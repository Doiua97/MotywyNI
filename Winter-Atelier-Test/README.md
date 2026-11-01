# Winter Atelier — test 0.2.2

[Zainstaluj lub zaktualizuj skrypt w Tampermonkey](https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Zostaw włączony tylko jeden skrypt motywu.

Instalator ładuje jeden arkusz CSS. Wszystkie 161 grafik jest bezpośrednio w assets/, a CSS ma ścieżki względne. CSS i grafiki wydania są przypięte do niezmiennego commita.

Nie ma @require, ogólnego runtime, obserwatorów DOM ani globalnych podmian IMG/XHR. Jedyny celowany fragment JavaScript podłącza move-marker.png 32×32 do wpisu /img/cross.gif w cache klienta. Pliki pozostające oryginalne dostarcza klient gry.

## Zmiany do sprawdzenia

- Pełne zimowe tła dużych okien, czatu, prawego panelu EQ i przelogowania; kafelki ekwipunku.
- Kompaktowe tytuły małych przezroczystych okien bez dużej czerwonej tabliczki. Przezroczystość tych okien zachowana.
- Tooltipy i dialogi z celowanym wykończeniem wcześniejszego motywu.
- Wcześniejsza belka góra/dół, ikony czatu i odpowiedzi dialogów oraz kursory; nowy centralny HUD zachowany.
- Nowe ikony statystyk i kontrolek, poprawione suwaki/checkbox-custom, białe komunikaty.
- Fioletowy EXP i bazowo szary wariant bez wyczerpania, wypełnienie kafelka ms, lepszy kontrast HP/energii/many, wyśrodkowane nazwy mapy i świata.
- Tła i kontrolki walki; kontrole lokalne obejmują cztery rozmiary okna.

## Test w grze

Sprawdź cztery rozmiary walki, dodatkowe umiejętności i zakończenie walki, wartości energii/many, powrót EXP i brak zasłaniania pól. Obejrzyj małe i duże okna, komunikaty, dymek NPC oraz tooltipy. Przy zgłoszeniu dołącz screen z gry i nazwę okna.

To wersja testowa. Lokalne kontrole nie zatwierdzają wyglądu ani wydajności w grze. Podejrzana nakładka ulepszenia nadal wymaga rozpoznania; nie jest oznaczona jako naprawiona. Premium i pozostałe rodziny ikon pozostają na liście dalszych prac.

Wycofano poprzedni ogólny runtime, więc polecenie WinterAtelierTest.downloadReport() nie jest dostępne w tej wersji. Nie dodano modułu animacji notyfikacji ani item-rarity.png.

Katalog Winter-Atelier z wcześniejszym wydaniem pozostaje osobny.
