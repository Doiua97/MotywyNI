# Winter Atelier — test 0.2.5

Wydanie testowe 0.2.5-test. Wygląd i płynność oczekują na ocenę użytkownika w grze.

Zmiany po0.2.4: jedna pełna rama9-slice dużych okien i osobna spójna rama walki, wypełnienie do wewnętrznej krawędzi, fakturowane stopki na pełną wewnętrzną szerokość, naturalne pola wyszukiwania, sceny podglądu stroju/maskotki i stroju klanowego ze wskazanego starego motywu. Usunięty osobny prostokątny środek tytułu handlu. Przyciski „Zmiana celu” i „Szybka walka” podniesione o kolejne2px. Najmniejsza walka bez dodatkowej górnej belki panelu umiejętności.

Usunięte z eksportu zastąpione window-frame.png i search-frame.png. W zbiorczym buttony.png wyczyszczono13 zastąpionych pól HUD-u/belek, przy zachowaniu rozmiaru i chronionych współdzielonych pikseli. Audyt obecności URL nie oznacza pełnego audytu rzeczywistego użycia: raport effective-assets rozróżnia wybrane obrazy, nadpisane reguły i stany nieobjęte fixture. Jeden prawdziwy obraz zależny od JS, move-marker.png, jest zachowany.

Pełny przegląd atlasu pozostaje otwarty:305 pozycji jego mapy nie ma reprezentacji w badanych stanach, więc nie zostały uznane za zbędne ani usunięte. Kontrola techniczna nie jest zatwierdzeniem wyglądu w rzeczywistej grze.

[Zainstaluj lub zaktualizuj skrypt w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Zostaw włączony tylko jeden skrypt motywu.

Instalator ładuje jeden arkusz CSS. Wszystkie zasoby są bezpośrednio w assets/, a CSS ma ścieżki względne. CSS i zasoby wydania są przypięte do niezmiennego commita. Dotychczasowy font jest osobnym WOFF2, z identycznymi bajtami jak wcześniej; usunięto jego base64 z arkusza.

Nie ma @require, ogólnego runtime, obserwatorów DOM ani globalnych podmian IMG/XHR. Jedyny celowany fragment JavaScript podłącza move-marker.png 32×32 do wpisu /img/cross.gif w cache klienta. Pliki pozostające oryginalne dostarcza klient gry.

## Zmiany do sprawdzenia

W stosunku do 0.2.3:

- Wspólne tło całej rodziny okien przezroczystych, w tym przelogowania, grupy, filtra łupów, obserwowanych zadań i podglądu wyposażenia. Zachowane natywne poziomy przezroczystości i małe tytuły.
- Ramy obejmujące stopki, mniejszy odstęp pod stopką, poprawione połączenia narożników. Wspólne reguły obejmują handel, rzemiosło, depozyt, stroje i pozostałe rozpoznane stopki.
- Nowy atlas 25 kategorii aukcji bez nierównomiernego skalowania; poprzedni atlas kategorii wyłączony z eksportu. Stylizacja „Kup teraz”, „Licytuj” i aktywnych przełączników mapy, również stanów hover/disabled.
- Nowe wspólne ramki pól przedmiotów handlu/rzemiosła i łącznik rzemiosła; oddzielenie zawartości depozytu od górnej ramy.
- Połączona ramka ogonka dymka NPC w obu kierunkach, bez dodatkowego prostokątnego tła pod dymkiem.
- Najmniejszy wariant walki: dopasowana rama i minimalna wysokość wariantu z dodatkowymi umiejętnościami. „Zmiana celu” i „Szybka walka” podniesione o 2 px.
- Przedmioty w slotach 1–8 wyrównane do dołu pola, bez zmiany rozmiaru ikon 32×32.
- Wyśrodkowane znaki + górnego HUD-u i kontenery widgetów na belkach, bez ingerencji w oryginalne ikony widgetów.
- Srebrna krawędź prawego panelu i ramka trybu okienkowego; jasny tekst formularzy komunikatów i handlu; rozszerzona wspólna ikona pomocy.

Zachowane poprawki z poprzednich wydań:

- Usunięta ingerencja w grafiki widgetów: klient wyświetla własne oryginalne ikony.
- Wypełnione wewnętrzne pasy pod górną i nad dolną ramą okien, komunikatów i walki; zewnętrzna przezroczystość zachowana.
- Data i godzina walki na niewielkim ciemnym tle jak licznik sekund, bez podmiany danych klienta.
- Poprawione składanie dolnych krawędzi pól EXP/wyczerpania w HUD-zie.
- Usunięte dodatkowe tło z zewnętrznej warstwy dymka NPC.
- Naprawione reguły suwaków odrzucane wcześniej przez przeglądarkę; nowe uchwyty zamiast zielonych.
- Globalna ikona pomocy i naprawione tło ikony przezroczystości podczas hover.
- Minutnik, gracze na mapie i minimapa: tło starego motywu z natywnymi poziomami przezroczystości i małym tytułem. Przelogowanie ponownie półprzezroczyste.
- Grafiki starego motywu w premium, ofertach złota, wspólnych skrzyniach złota/łusek, daszkach sklepów, wyszukiwaniu i Otchłani; rozszerzone zastosowania w aukcjach, kalendarzu, Battle Passie i timerze walki.
- Wspólne kafelki ekwipunku, autorskie symbole pustego wyposażenia, oprawa numerów zestawów i stany zgody/braku zgody PvP. Numery pozostają tekstem klienta.

## Test w grze

Sprawdź cztery rozmiary walki, dodatkowe umiejętności i zakończenie walki, wartości energii/many, powrót EXP i brak zasłaniania pól. Obejrzyj małe i duże okna, komunikaty, dymek NPC oraz tooltipy. Przy zgłoszeniu dołącz screen z gry i nazwę okna.

To wersja testowa. Lokalne kontrole obejmują 110 wariantów okien, 24 regresje, 23 przypadki zgodności komponentów, 18 scenariuszy walki oraz 16 scenariuszy nagłówka walki z 96 próbami daty. Nie zatwierdzają wyglądu ani wydajności w grze. Podejrzana nakładka ulepszenia nadal wymaga rozpoznania; nie jest oznaczona jako naprawiona. Pełny przegląd wszystkich złożeń i stanów dynamicznych pozostaje otwarty.

Wycofano poprzedni ogólny runtime, więc polecenie WinterAtelierTest.downloadReport() nie jest dostępne w tej wersji. Nie dodano modułu animacji notyfikacji ani item-rarity.png.

Katalog Winter-Atelier z wcześniejszym wydaniem pozostaje osobny.
