# Winter Atelier — test 0.2.12

Wydanie testowe **0.2.12-test**.

[Zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.11

- Torby otrzymują pełny podkład bezpośrednio pod ikoną przedmiotu. Symbol pustego miejsca nie przebija przez założoną torbę. Jedna reguła CSS; wcześniejszy podkład wrappera usunięty. Bez osobnych reguł ukrywania symbolu i bez nowej obsługi JS toreb.
- Dolny odcinek ramki walki korzysta ze srebrno-rubinowego detalu renderu ramy. Oddzielny ciemny podkład nie przykrywa dolnej krawędzi. Zachowana własna ramka walki i położenie przycisków.
- Nick w podglądzie ekwipunku otrzymuje kolor rangi oglądanej postaci. Własny tooltip także korzysta z rangi dla nicku; nagłówek „Moja postać” pozostaje biały, zwykły gracz biały.

## Ładowanie

Instalator pobiera CSS, znacznik X i scripts/palette-bindings.js z jednego przypiętego commita. Kolory pozostają w CSS. Adapter dekoruje sześć funkcji UI: trzy tooltipy, dopiski EXP/wartości i utworzenie podglądu ekwipunku. Zachowuje argumenty, this, wartości zwracane, dane i istniejące handlery. Bez MutationObserver, globalnych podmian IMG/XHR i zmian komunikacji. Ograniczone oczekiwanie na gotowość UI, bez stałej pętli gry.

262 pliki assets/: 261 zależności CSS i znacznik X. Względem0.2.11 zmienia się tylko battle-compact-frame.png; pozostałe261 plików identyczne. Skrypt palety osobno w scripts/, z SHA256 w manifeście. Starszy Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola

Kontrole lokalne obejmują107 obrazów,111 wariantów okien,84 złożenia ram,7HUD,18 konfiguracji walki,16 nagłówka i96 dat. Paleta:24tooltipy postaci,182przypadki potworów,24podglądy ekwipunku z zachowaniem kliknięcia nicku. Torby:16kombinacji zajętości w obu trybach i odczyt pikseli przezroczystego natywnego canvasa; pełny podkład, brak przebijania. CSS182912B/915reguł;0zdublowanych deklaracji dla tego samego scope/selektora/właściwości,0nowych filtrów i animacji. Instalator poniżej4KB, skrypt palety około4.7KB osobno.

To kontrole techniczne. Wygląd, współpraca z dodatkami i płynność wymagają oceny w zalogowanej grze.
