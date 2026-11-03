# Winter Atelier — test 0.2.10

Wydanie testowe **0.2.10-test**. Wygląd i płynność wymagają oceny w grze.

[Zainstaluj lub zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.9

- Własne tury mają jaśniejszy lodowy turkus #205d6b → #194f5e → #153f50, odcinający się od tła okna. Rubin przeciwnika zachowany.
- Pola neutralne i tury bez natywnych odstępów 2 px odsłaniających fakturę okna. Jednolita, nieprzezroczysta linia podziału 1 px usuwa poszarpane prześwity.
- Bez nowych grafik ani funkcji skryptu. Klient nadal dostarcza klasy i treść logów.

## Ładowanie

Mały instalator ładuje arkusz CSS i celowany znacznik X 32×32 do wpisu /img/cross.gif w pamięci obrazów klienta. Bez nowego runtime, @require, MutationObserver i globalnych podmian IMG/XHR. Widgety, umiejętności i oryginalne oznaczenia dostarcza klient.

CSS i grafiki są przypięte do niezmiennego commita. Wszystkie 262 zależności wydania są w jednym płaskim assets/: 261 wskazanych przez CSS (grafiki i font) oraz znacznik X używany przez loader. Brak luźnych i brakujących plików. CSS używa ścieżek względnych. Starszy katalog Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola i test w grze

Pełny lokalny pipeline 15 etapów przeszedł: 107 odpowiedników oryginalnych obrazów, 111 wariantów okien, 7 stanów HUD-u, 18 scenariuszy walki, 16 nagłówka/96 prób daty i 84 złożenia ram. Nowa kontrola kosmetyki obejmuje 11 przypadków, w tym piksele obwódki pomocy, zachowanie inputu konsoli, statusy i etykiety przycisków oraz 4 rozmiary walki w 2 trybach interfejsu z próbami kliknięcia i hover. Style 111 fixture zgodne z CSS przed optymalizacją. Arkusz źródłowy 179753 B/877 reguł, bez nowych filtrów, animacji i duplikatów; limity nie zostały podniesione.

To próby na natywnych szablonach i wybranych funkcjach klienta, a nie test zalogowanej gry. Kontrast sprawdzono względem punktów gradientu, nie każdego piksela tekstury. Kontrole techniczne nie zatwierdzają wszystkich grafik ani FPS. Do oceny w grze: czytelność pomocy i statusów, belka oraz kolory logów walki, wejście konsoli.

Kontrola pól tur obejmuje wielowierszowe wpisy, styki prostokątów i rzeczywiste piksele dolnych linii. W badanych odcinkach wszystkich trzech typów pól linie są w 100% jednolite; kontrast tekstu własnej tury względem punktów gradientu wynosi co najmniej 5.26:1. Nie jest to test zalogowanej gry.
