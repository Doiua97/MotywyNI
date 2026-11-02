# Winter Atelier — test 0.2.6

Wydanie testowe **0.2.6-test**. Wygląd i płynność wymagają oceny w grze.

[Zainstaluj lub zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.5

- Wyśrodkowane ikony32×32 w pojedynczych polach rzemiosła i innych wspólnych slotach. Handel zachowuje rozstaw klienta; dopasowane osadzenie ikon w ramkach. Liczniki i oznaczenia pozostają elementami klienta.
- Naprawiona kolejność warstw paska postępu ulepszania. Klient nadal wyznacza szerokość wypełnienia.
- Wyrównane styki bocznych linii treści, nagłówków i stopek dużych okien, również konfiguracji, poczty, umiejętności i listy znajomych.
- Aktualności bez błędnej rezerwy stopki; spójny nagłówek „Dla Ciebie”; nowe strzałki lewo/prawo i stany hover.
- Neutralny szary rubin przy0HP; czerwona klatka ostrzegawcza ukrywana tylko przy0%. Ostrzeżenia niskiego dodatniego HP zachowane.
- Różowy pasek EXP przy braku wyczerpania. Normalny EXP nadal fioletowy.
- Uzupełnienia kontrolek ze wskazanego starszego motywu, z rejestrem zastosowań. Współdzielone wycinki odizolowane, aby większa grafika nie nadpisywała sąsiedniej ikony. Pozycje dynamiczne atlasu zachowane.
- Cały atlas notyfikacje-sprite i canvasowe oznaczenia przedmiotów pozostają oryginalne zgodnie z ostatnią decyzją. Zachowane autorskie kategorie aukcji i waluty górnego HUD-u. Widgety i ikony umiejętności nadal oryginalne.
- Mniej powtarzanych deklaracji CSS i wspólne wartości. Arkusz źródłowy179396B/890reguł, bez nowych filtrów, animacji i duplikatów. Limity CSS nie zostały podniesione.

## Ładowanie

Mały instalator ładuje arkusz CSS i celowany znacznik X32×32 do wpisu /img/cross.gif w pamięci obrazów klienta. Bez @require, ogólnego runtime, MutationObserver i globalnych podmian IMG/XHR. Oryginalne grafiki dostarcza klient.

CSS i grafiki są przypięte do niezmiennego commita. Wszystkie279 zależności wydania są w jednym płaskim assets/:278 wskazanych przez CSS (grafiki i font) oraz znacznik X używany przez loader. Brak luźnych i brakujących plików. CSS używa ścieżek względnych. Starszy katalog Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola i test w grze

Lokalny pipeline przeszedł:116 odpowiedników oryginalnych grafik,111 wariantów okien,7 stanów HUD-u,18 scenariuszy walki,16 nagłówka walki/96 prób daty,84 złożenia ram,23 przypadki zgodności,24 regresje,11 prób uzupełnienia audytu i9 domen loadera. Obliczone style111 fixture są identyczne z wersją CSS przed optymalizacją.

To próby na natywnych szablonach i wybranych funkcjach klienta, a nie test zalogowanej gry. Sprawdź przedmioty, ilości i oznaczenia w rzemiośle/handlu, przeciąganie, postęp ulepszania,0HP, EXP bez wyczerpania, aktualności, styki ram i cztery rozmiary walki. Pozostałe stany serwera i wariant500+ wymagają potwierdzenia. Kontrole techniczne nie zatwierdzają wszystkich grafik ani FPS.
