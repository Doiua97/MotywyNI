# Winter Atelier — test 0.2.13

Wydanie testowe **0.2.13-test**.

[Zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.12

- Naprawiony kolor nicku w „Pokaż ekwipunek” otwartym z listy graczy online, także dla postaci nieobecnej na mapie. Klient pomijał rangę przy przekazywaniu danych do tego okna. Adapter zachowuje ją z wybranego wpisu i stosuje istniejącą paletę CSS.
- Rozdzielenie informacji o rangach według świata i ID postaci. Zachowane oryginalne dane, menu i handlery. Bez dodatkowych zapytań do serwera.
- CSS i wszystkie262pliki assets identyczne z0.2.12.

## Ładowanie

Instalator pobiera CSS, znacznik X i scripts/palette-bindings.js z jednego przypiętego commita. Kolory pozostają w CSS. Adapter dekoruje osiem funkcji UI: trzy tooltipy, dopiski EXP/wartości, utworzenie podglądu ekwipunku oraz otwarcie listy online i jej menu. Zachowuje argumenty, this, wartości zwracane, dane i istniejące handlery. Bez MutationObserver, globalnych podmian IMG/XHR i zmian komunikacji. Ograniczone oczekiwanie na gotowość UI, bez stałej pętli gry.

262 pliki assets/: 261 zależności CSS i znacznik X. Względem0.2.12 wszystkie262pliki identyczne. Skrypt palety osobno w scripts/, z SHA256 w manifeście. Starszy Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola

Kontrole lokalne obejmują107 obrazów,111 wariantów okien,84 złożenia ram,7HUD,18 konfiguracji walki,16 nagłówka i96 dat. Paleta:24tooltipy postaci,182przypadki potworów,24podglądy ekwipunku z zachowaniem kliknięcia nicku. Dodatkowo28przypadków rzeczywistego menu listy online: brak rangi w danych przekazywanych do show-eq, postać nieobecna na mapie, różne światy, ponowne otwarcie listy, zachowanie zwracanej wartości i oryginalnych danych. Torby:16kombinacji zajętości w obu trybach i odczyt pikseli przezroczystego natywnego canvasa; pełny podkład, brak przebijania. CSS182912B/915reguł;0zdublowanych deklaracji dla tego samego scope/selektora/właściwości,0nowych filtrów i animacji. Instalator poniżej4KB, skrypt palety około5.8KB osobno.

To kontrole techniczne. Wygląd, współpraca z dodatkami i płynność wymagają oceny w zalogowanej grze.
