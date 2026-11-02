# Winter Atelier — test 0.2.3

[Zainstaluj lub zaktualizuj skrypt w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Zostaw włączony tylko jeden skrypt motywu.

Instalator ładuje jeden arkusz CSS. Wszystkie zasoby są bezpośrednio w assets/, a CSS ma ścieżki względne. CSS i zasoby wydania są przypięte do niezmiennego commita. Dotychczasowy font jest osobnym WOFF2, z identycznymi bajtami jak wcześniej; usunięto jego base64 z arkusza.

Nie ma @require, ogólnego runtime, obserwatorów DOM ani globalnych podmian IMG/XHR. Jedyny celowany fragment JavaScript podłącza move-marker.png 32×32 do wpisu /img/cross.gif w cache klienta. Pliki pozostające oryginalne dostarcza klient gry.

## Zmiany do sprawdzenia

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

To wersja testowa. Lokalne kontrole obejmują 105 wariantów okien, 19 regresji oraz 16 scenariuszy nagłówka walki z 96 próbami daty. Nie zatwierdzają wyglądu ani wydajności w grze. Podejrzana nakładka ulepszenia nadal wymaga rozpoznania; nie jest oznaczona jako naprawiona. Pełny przegląd wszystkich złożeń i stanów dynamicznych pozostaje otwarty.

Wycofano poprzedni ogólny runtime, więc polecenie WinterAtelierTest.downloadReport() nie jest dostępne w tej wersji. Nie dodano modułu animacji notyfikacji ani item-rarity.png.

Katalog Winter-Atelier z wcześniejszym wydaniem pozostaje osobny.
