# Winter Atelier — test 0.2.15

Wydanie testowe **0.2.15-test**.

[Zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.14

- Usunięto zbędny warunek `html body.ni` z reguł Darrefulla. Style są przypisane bezpośrednio do `.dad-popup`, `#dad-popup-addons` i `#dad-tp-bag`.
- Wybrane właściwości tła i kolorów zachowują pierwszeństwo także wtedy, gdy arkusz dodatku zostanie załadowany po motywie.
- Zachowano dwa warianty okien, oryginalną ikonę autora, rozmiary i obsługę kontrolek. Bez nowych elementów DOM i JavaScriptu.
- Wszystkie 262 pliki assets oraz istniejący skrypt palety są identyczne bajtowo z 0.2.14.

## Ładowanie

Mały instalator pobiera CSS, znacznik X i istniejący scripts/palette-bindings.js z jednego przypiętego commita. Pozostaje dotychczasowa obsługa rang i znacznika X. Obsługa Darrefulla nie dodaje JavaScriptu.

## Kontrola

Kontrola korzysta z rozprowadzanego CSS i faktycznych plików assets. Obejmuje 163 elementy panelu i teleportów, 8 kombinacji wyglądu/zwinięcia/przypięcia oraz oba warianty w dwóch kolejnościach arkuszy przy pustej klasie body, klasie ni i niezwiązanej ll-mounted. Brak różnic wynikowego malowania zależnych od tych warunków. Dodatkowo formularze, hover, kontrola źródeł obrazków, klikalny X i brak prześwitów pełnego panelu. To lokalna rekonstrukcja DOM i statycznego CSS autora; kod dodatku nie jest wykonywany.

Kontrole klienta: 107 obrazów, 111 wariantów okien, 7 HUD, 18 konfiguracji walki, 16 nagłówka i 96 dat. CSS 191616 B / 975 reguł; bez zdublowanych deklaracji i nowych filtrów, rozmyć czy animacji.

W 0.2.14 test wymuszał klasę body.ni i nie wykrywał zależności od niej. Obecny test nie dodaje tej klasy jako warunku działania adaptera. Zgłoszony przez użytkownika brak efektu w grze wymaga ponownej oceny po aktualizacji. Nie deklarujemy testu zalogowanej gry ani wersji Dev.
