# Winter Atelier — test 0.2.9

Wydanie testowe **0.2.9-test**. Wygląd i płynność wymagają oceny w grze.

[Zainstaluj lub zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.8

- Wspólna ikona pomocy: biała litera „i” w obu stanach; okrągła obwódka i przezroczystość bez zmian.
- X na górnej belce walki dopasowany do wysokości nagłówka, bez kolizji z logiem i timerem. Natywny węzeł i obsługa poddania pozostają funkcjami klienta.
- Tło tur sojusznika w ciemnym lodowym turkusie, przeciwnika w ciemnym rubinie. Neutralne komunikaty walki wykorzystują wspólną powierzchnię nagłówków/podziałów klanu zamiast szarego pasa.
- Jaśniejsze zielone/czerwone stany tekstowe: mięta #99ebba i róż #ff9dad, m.in. ceny i bilans sklepu, online/offline i wyniki walki. Zaakceptowane kolory etykiet przycisków zachowane.
- Ukryty osobny znak > przed wejściem konsoli. Wpisana treść i obsługa poleceń bez zmian.

## Ładowanie

Mały instalator ładuje arkusz CSS i celowany znacznik X 32×32 do wpisu /img/cross.gif w pamięci obrazów klienta. Bez nowego runtime, @require, MutationObserver i globalnych podmian IMG/XHR. Widgety, umiejętności i oryginalne oznaczenia dostarcza klient.

CSS i grafiki są przypięte do niezmiennego commita. Wszystkie 262 zależności wydania są w jednym płaskim assets/: 261 wskazanych przez CSS (grafiki i font) oraz znacznik X używany przez loader. Brak luźnych i brakujących plików. CSS używa ścieżek względnych. Starszy katalog Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola i test w grze

Pełny lokalny pipeline 15 etapów przeszedł: 107 odpowiedników oryginalnych obrazów, 111 wariantów okien, 7 stanów HUD-u, 18 scenariuszy walki, 16 nagłówka/96 prób daty i 84 złożenia ram. Nowa kontrola kosmetyki obejmuje 11 przypadków, w tym piksele obwódki pomocy, zachowanie inputu konsoli, statusy i etykiety przycisków oraz 4 rozmiary walki w 2 trybach interfejsu z próbami kliknięcia i hover. Style 111 fixture zgodne z CSS przed optymalizacją. Arkusz źródłowy 179664 B/876 reguł, bez nowych filtrów, animacji i duplikatów; limity nie zostały podniesione.

To próby na natywnych szablonach i wybranych funkcjach klienta, a nie test zalogowanej gry. Kontrast sprawdzono względem punktów gradientu, nie każdego piksela tekstury. Kontrole techniczne nie zatwierdzają wszystkich grafik ani FPS. Do oceny w grze: czytelność pomocy i statusów, belka oraz kolory logów walki, wejście konsoli.
