# Winter Atelier — test 0.2.7

Wydanie testowe **0.2.7-test**. Wygląd i płynność wymagają oceny w grze.

[Zainstaluj lub zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), a następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.6

- Usunięte dwa jasne pionowe pasy wewnątrz konsoli. Poprawiony kolor starego obramowania we wspólnej oprawie dużych okien i handlu, przy zachowaniu wymiarów i nowej ramy.
- Oryginalne ikony NPC, obiektów oraz profesji ponownie dostarcza klient. Wycofane podmiany i ich pliki usunięte z aktywnej paczki. Widgety, umiejętności i notyfikacje nadal oryginalne.
- Naprawiony przepływ etykiet ulepszania: licznik pod paskiem, osobny podgląd przyrostu nad paskiem. Tor znajduje się pod wypełnieniami. Wartości i szerokości nadal aktualizuje klient.
- Wspólne nagłówki tabel i linie podziału mają nowy materiał CSS. Wyłączona stara warstwa border-image, która przykrywała tło.
- Duże okna otrzymały fakturę i głębię z rodziny stopek, również na faktycznych warstwach wnętrza. Małe przezroczyste okna, tooltipy i przesłona mapy zachowują swoje dotychczasowe zastosowania.
- Ciemne wyszukiwanie również w pełnej mapie, poza kontenerami okien; usunięte białe obramowanie. Zachowana obsługa natywnego pola wyszukiwania.

## Ładowanie

Mały instalator ładuje arkusz CSS i celowany znacznik X32×32 do wpisu /img/cross.gif w pamięci obrazów klienta. Bez @require, ogólnego runtime, MutationObserver i globalnych podmian IMG/XHR. Oryginalne grafiki dostarcza klient.

CSS i grafiki są przypięte do niezmiennego commita. Wszystkie262 zależności wydania są w jednym płaskim assets/:261 wskazanych przez CSS (grafiki i font) oraz znacznik X używany przez loader. Brak luźnych i brakujących plików. CSS używa ścieżek względnych. Starszy katalog Winter-Atelier pozostaje osobnym wydaniem.

## Kontrola i test w grze

Pełny lokalny pipeline13 etapów przeszedł:107 odpowiedników oryginalnych obrazów,111 wariantów okien,7 stanów HUD-u,18 scenariuszy walki,16 nagłówka/96 prób daty i84 złożenia ram. Nowa kontrola12 przypadków obejmuje piksele obu boków konsoli, natywne ikony, nagłówki tabel klanu utworzone metodami klienta, wyszukiwanie w obu trybach oraz sekwencję aktualizacji paska ulepszania. Style111 fixture zgodne z CSS przed optymalizacją. Arkusz źródłowy178960B,871 reguł, bez nowych filtrów, animacji i duplikatów; limity nie zostały podniesione.

To próby na natywnych szablonach i wybranych funkcjach klienta, a nie test zalogowanej gry. Sprawdź konsolę, ikony NPC i postaci, wyszukiwanie pełnej mapy, nagłówki oraz materiał dużych okien. W ulepszaniu klient rozróżnia bieżące punkty i podgląd przyrostu: przed zatwierdzeniem może pokazywać0/48000 oraz osobne+715. W kontroli lokalnej aktualizacja bieżącego stanu daje715/48000 i24000/48000; rzeczywiste odpowiedzi serwera wymagają próby w grze. Kontrole techniczne nie zatwierdzają wszystkich grafik ani FPS.
