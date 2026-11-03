# Winter Atelier — test 0.2.11

Wydanie testowe **0.2.11-test**. Wygląd i płynność wymagają oceny w grze.

[Zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.10

- Rangi postaci według zaakceptowanej palety. Zwykły gracz biały; nick w tooltipie ma kolor rangi, podpis „Moja postać” pozostaje biały.
- Sześć osobnych kolorów rang potworów. Nazwa korzysta z barwy rangi i wariantu zależnego od różnicy poziomów; poziom dodatkowo sygnalizuje trudność. Zwykłe potwory srebrzystobiałe, poniżej progu łupu szare, ponad5 poziomów złocistożółte, ponad10 koralowe. Progi klienta i świata zachowane.
- Dopasowane radio, hover plusów górnego HUD-u, statystyki, dopiski zysku/straty, paski lekkiego interfejsu, tła stopni umiejętności i neutralne wpisy walki.
- Poprawiona widoczność toreb: pełne krycie ikon i ciemny podkład pól w zwykłym oraz lekkim interfejsie. Aktywna torba nadal wyróżniona ramką.
- Grafiki i oryginalne ikony bez zmian.

## Ładowanie

Instalator pobiera CSS, znacznik X i **scripts/palette-bindings.js** z jednego niezmiennego commita. Kolory są w CSS. Adapter dopisuje oznaczenia rang/poziomów, dekorując pięć funkcji UI: tworzenie tooltipów własnej/innej postaci i NPC oraz dopiski EXP i wartości. Zachowuje argumenty, this, wartości zwracane i dane klienta. Bez MutationObserver, globalnych podmian IMG/XHR i zmian komunikacji. Jednorazowe odświeżenie cache tooltipów; ograniczone oczekiwanie na gotowość metod, bez stałej pętli gry.

262 zależności assets/ identyczne bajtowo z0.2.10:261 zależności CSS i znacznik X. Jedna nowa zależność JS w scripts/ z SHA256 w manifeście. Starszy Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola

Pełny lokalny pipeline16etapów przeszedł.107 obrazów,111 wariantów okien,84 złożenia ram,7HUD,18walki,16 nagłówka/96 dat. Test palety:24 warianty postaci i182 warianty potworów na izolowanych funkcjach klienta, granice poziomów/wag, elastyczny poziom, próg świata również jako tekst liczbowy, zachowanie tekstów/liczb i kolor nicku względem rangi. Sprawdzono też kontrolki, opóźniony start, ograniczenie oczekiwania, idempotencję i zachowanie this/argumentów/return. Po korekcie toreb odświeżono kontrole zależne od CSS; sprawdzono także cztery ikony i podkłady pól toreb w obu trybach interfejsu.

CSS182987B/916reguł, około3KB przyrostu w zatwierdzonym nowym zakresie. Bez nowych filtrów, animacji i duplikatów. Instalator poniżej4KB, adapter palety około4.1KB osobno. To lokalne kontrole techniczne; wygląd, współpraca z dodatkami i płynność wymagają oceny w zalogowanej grze.
