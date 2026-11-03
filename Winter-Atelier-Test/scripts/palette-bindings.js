(async function installPaletteBindings() {
 const mark=Symbol.for('winter-atelier.palette.v1');
 for(let attempt=0;attempt<150;attempt++){
  const e=window.Engine;
  if(!e?.hero?.createStrTip||!e?.others?.createStrTip||!e?.npcs?.getTip||!e?.showEqManager?.newWindow||!e?.worldWindow?.open){await new Promise(resolve=>setTimeout(resolve,200));continue;}
  if(e[mark])return;
  const template=document.createElement('template');
  const decorate=(text,update)=>{if(typeof text!=='string')return text;template.innerHTML=text;update(template.content);return template.innerHTML;};
  const role=n=>(n&1)?'administrator':(n&16)?'super-game-master':(n&2)?'game-master':(n&4)?'super-chat-moderator':n?'chat-moderator':'player';
  const onlineRoles=new Map(),onlineMenus=new WeakSet();
  const world=()=>String(e.worldConfig?.getWorldName?.()||'').toLowerCase();
  const key=(realm,id)=>String(realm||world()).toLowerCase()+':'+String(id);
  const player=(text,rights,own)=>decorate(text,root=>{
   const rank=role(Number(rights)||0);
   for(const nick of root.querySelectorAll('.info-wrapper .nick'))nick.dataset.waPlayerRole=rank;
   for(const node of root.querySelectorAll('.rank')){
    node.dataset.waPlayerRole=own?'player':rank;
    // Hero's original rank is a suffix in brackets after the own-character
    // label. Split only that native suffix, never match a translated name.
    if(own&&rank!=='player'&&node.childNodes.length===1&&node.firstChild.nodeType===3){const value=node.textContent,at=value.lastIndexOf(' [');if(at>=0&&value.endsWith(']')){node.textContent=value.slice(0,at)+' ';const span=document.createElement('span');span.dataset.waPlayerRole=rank;span.textContent=value.slice(at+1);node.append(span);}}
   }
  });
  const npc=(text,obj)=>{
   const d=obj?.d;if(!d||![2,3].includes(Number(d.type)))return text;
   const wt=Number(d.wt)||0,kind=wt>99?'tytan':wt>89?'colossus':wt>79?'heros':wt>29?'elite3':wt>19?'elite2':wt>9?'elite1':null;
   const listed=e.npcs.check?.()?.[d.id],level=Object.hasOwn(obj,'elasticLevel')&&listed?obj.elasticLevel:d.lvl,hero=e.hero.getLevel?.()??e.hero.d?.lvl;
   const threshold=Number(e.worldConfig?.getDropDestroyLvl?.()),difference=Number(level)-Number(hero);
   if(!Number.isFinite(difference)||!Number.isFinite(threshold))return text;
   const state=difference < -threshold?'weak':difference>10?'danger':difference>5?'higher':'normal';
   return decorate(text,root=>{
    const header=root.firstElementChild,strong=header?.querySelector('strong');if(!strong)return;
    header.dataset.waNpc='';header.dataset.waLevel=state;if(kind)header.dataset.waKind=kind;
    for(const label of root.querySelectorAll('.npc-class')){label.dataset.waNpc='';if(kind)label.dataset.waKind=kind;}
    const suffix='('+String(level||'')+String(d.prof||'')+')',last=strong.lastChild;
    if(last?.nodeType===3&&last.textContent.endsWith(suffix)){const value=last.textContent;last.textContent=value.slice(0,-suffix.length);const span=document.createElement('span');span.className='wa-npc-level';span.textContent=suffix;strong.append(span);}
   });
  };
  const wrap=(owner,key,after)=>{const original=owner?.[key];if(typeof original!=='function')return;owner[key]=function(...args){const result=original.apply(this,args);try{return after(result,args,this);}catch{return result;}};};
  wrap(e.hero,'createStrTip',(text)=>player(text,e.hero.d?.uprawnienia,true));
  wrap(e.others,'createStrTip',(text,args)=>player(text,args[0]?.rights,false));
  wrap(e.npcs,'getTip',(text,args)=>npc(text,args[0]));
  const equipment=(manager,data)=>{const view=manager.windows?.[data?.id],nick=view?.contentEl?.querySelector('.player-info .character-name');if(!nick)return;const d=view.playerData||data,sameWorld=!d.world||String(d.world).toLowerCase()===world(),known=sameWorld?(String(d.id)===String(e.hero.d?.id)?e.hero.d:e.others.getById?.(d.id)?.d):null,rights=d.uprawnienia??d.rights??known?.uprawnienia??known?.rights;nick.dataset.waPlayerRole=onlineRoles.get(key(d.world,d.id))??role(Number(rights)||0);};
  wrap(e.showEqManager,'newWindow',(value,args,manager)=>{equipment(manager,args[0]);return value;});
  const bindOnline=()=>{const list=e.worldWindow.playersOnline;if(!list||typeof list.createContextMenu!=='function'||onlineMenus.has(list))return;const original=list.createContextMenu;list.createContextMenu=function(event,p){try{if(p?.c!=null&&Number.isFinite(Number(p.r))){const k=key(this.worldName,p.c),highest=[1,2,4,16,32].find(bit=>(Number(p.r)&bit)===bit)||0;onlineRoles.delete(k);onlineRoles.set(k,role(highest));if(onlineRoles.size>512)onlineRoles.delete(onlineRoles.keys().next().value);const view=e.showEqManager.windows?.[p.c];if(view&&key(view.playerData.world,p.c)===k)equipment(e.showEqManager,view.playerData);}}catch{}return original.apply(this,arguments);};onlineMenus.add(list);};
  wrap(e.worldWindow,'open',value=>{bindOnline();return value;});bindOnline();
  for(const view of Object.values(e.showEqManager.windows||{}))equipment(e.showEqManager,view.playerData);
  wrap(e.hero,'showGainedExp',(value,args)=>{for(const node of document.querySelectorAll('.gained-exp-indicator,.gained-exp-indicator-light-mode'))node.dataset.waDelta=args[0]>0?'gain':'loss';return value;});
  wrap(e.hero,'showDifference',(value,args)=>{if(args[2]&&args[1]!==args[2]){const node=(args[0]?.[0]||args[0])?.querySelector?.('.diff-msg');if(node)node.dataset.waDelta=args[1]>args[2]?'gain':'loss';}return value;});
  e[mark]=true;
  // A single refresh of cached tooltips; no document observer or game loop.
  try{e.hero.updateTip?.();e.others.otherTipRefresh?.();for(const obj of Object.values(e.npcs.check?.()||{}))obj.createTipFromNpcData?.();}catch{}
  return;
 }
 console.warn('Winter Atelier: nie podłączono palety tooltipów — klient nie udostępnił metod UI.');
})();
