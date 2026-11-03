# Winter Atelier — test 0.2.8

Wydanie testowe **0.2.8-test**. Wygląd i płynność wymagają oceny w grze.

[Zainstaluj lub zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.7

- Wspólne pole wyszukiwania w dużych oknach: subtelna faktura, gradient, cień wpuszczonego pola i jaśniejszy tekst podpowiedzi. Geometria pól dużych okien pozostaje bez zmian. Małe przezroczyste okna zachowują swój wariant.
- Ten sam wygląd w pełnej mapie. Pole228×28px mieści się pomiędzy natywnymi listwami11px: po12px odsunięcia od boków kolumny daje1px luzu od wewnętrznych krawędzi. Zachowane odstępy od zakładek i listy lokacji; wpisywanie, filtrowanie i czyszczenie pozostają funkcjami klienta.
- Jaśniejsze lokacje i współrzędne klanowiczów, również na liście członków innego klanu: #c2d4de,10px, delikatny cień.
- Naprawione sześć oznaczeń statusów tooltipa. Po wycofaniu podmiany obrazu pozostały błędne ustawienia rozmiaru i przesunięcia; teraz cały kontrakt atlasu ponownie dostarcza klient. Dotyczy błogosławieństwa, wyciszenia, VIP, ostrzeżenia, poszukiwanego oraz oznaczenia mistrza rankingu, w obu wariantach tooltipa.

## Ładowanie

Mały instalator ładuje arkusz CSS i celowany znacznik X32×32 do wpisu /img/cross.gif w pamięci obrazów klienta. Bez @require, ogólnego runtime, MutationObserver i globalnych podmian IMG/XHR. Widgety, umiejętności i oryginalne oznaczenia dostarcza klient.

CSS i grafiki są przypięte do niezmiennego commita. Wszystkie262 zależności wydania są w jednym płaskim assets/:261 wskazanych przez CSS (grafiki i font) oraz znacznik X używany przez loader. Brak luźnych i brakujących plików. CSS używa ścieżek względnych. Starszy katalog Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola i test w grze

Pełny lokalny pipeline14 etapów przeszedł:107 odpowiedników oryginalnych obrazów,111 wariantów okien,7 stanów HUD-u,18 scenariuszy walki,16 nagłówka/96 prób daty i84 złożenia ram. Nowa kontrola7 przypadków sprawdza12 ikon statusów względem oryginalnych stylów i pikseli,4 lokacje klanowiczów, geometrię wspólnego wyszukiwania oraz osadzenie pełnej mapy w obu trybach interfejsu. Przycisk czyszczenia sprawdzony rzeczywistym kliknięciem. Style111 fixture zgodne z CSS przed optymalizacją. Arkusz źródłowy179008B/872reguły, bez nowych filtrów, animacji i duplikatów; limity nie zostały podniesione.

To próby na natywnych szablonach i wybranych funkcjach klienta, a nie test zalogowanej gry. Sprawdź wygląd wyszukiwania w dużych oknach i mapie, tekst lokacji klanu oraz oznaczenia tooltipów. Kontrole techniczne nie zatwierdzają wszystkich grafik ani FPS.
