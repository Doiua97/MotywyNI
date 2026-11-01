# Winter Atelier — test nowej przebudowy

To osobny, roboczy zestaw. Wygląd HUD-u oraz pozostałe grafiki są w trakcie opracowania. Katalog `Winter-Atelier` z dotychczasowym wydaniem pozostaje oddzielny.

## Instalacja

1. Wyłącz dotychczasowy Winter Atelier i ewentualny wielomegabajtowy skrypt „nowa przebudowa TEST”.
2. Otwórz [mały instalator](https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js) i zainstaluj go w Tampermonkey. Jeśli instalator otworzy się jako tekst, skopiuj wyłącznie ten mały plik do edytora nowego skryptu.
3. Przeładuj grę na dowolnym świecie `https://nazwaswiata.margonem.pl/`.

Instalator ma limit 4096 B. Nie zawiera grafik base64 ani treści CSS. Osobny kod runtime, CSS i obrazy ładuje z tego folderu przez CDN. Zasoby jednego wydania są przypięte do konkretnego commita, aby nie mieszać wersji. Nie trzeba uruchamiać serwera lokalnego.

## Test w grze

Sprawdź HUD bez walki, oba rzędy umiejętności w walce, wartości energii/many i powrót EXP po walce. Następnie otwieraj okna, które chcesz sprawdzić. Błędy wyglądu dokumentuj screenem z gry.

Opcjonalny raport techniczny z konsoli przeglądarki:

```js
WinterAtelierTest.downloadReport()
```

Raport zawiera wersję zestawu, nazwy plików main.js, klasy i pozycje otwartych okien oraz nierozpoznane ścieżki grafik. Nie zapisuje treści czatu i niczego nie wysyła automatycznie.

Aby wrócić do starego wydania, wyłącz skrypt testowy, włącz poprzedni motyw i przeładuj grę.

## Aktualizacje

- `assets-production/`: osobne grafiki; `css/`: jeden arkusz; `runtime/`: wspólny mechanizm podmian; `install/`: mały loader.
- Zmiana wspólnego komponentu wymaga sprawdzenia wszystkich jego zastosowań i stanów.
- Najpierw zatwierdzany jest commit zasobów. Następnie loader wskazuje jego niezmienny identyfikator. Kolejne wydania aktualizują ten sam folder i instalator.
- Tylko dokładnie zarejestrowane grafiki oprawy UI są podmieniane. Mapy, postacie, przedmioty i ikony umiejętności zachowują zasoby klienta.
- Testy lokalne nie oznaczają akceptacji wizualnej ani potwierdzenia działania w zalogowanej grze.


## Wersja testowa 0.2.1

- Pełny nowy panel umiejętności, wolne miejsca dla Zmiany celu i Szybkiej walki oraz dopasowany HUD. Zewnętrzna próbna otoczka wycofana.
- Ikony górnej belki walki wyrównane do srebrnego pasa; strzałka kotwiczona do prawej krawędzi.
- Wspólna rodzina ram i półprzezroczystych powierzchni okien, większe tytuły i dopasowany przycisk zamknięcia.
- Nowe długie belki, górny HUD z wcześniejszego motywu w zaakceptowanym zakresie, zimowe tła czatu i EQ.
- Natywne ikony widgetów, gracza i klanu. Pozostałe ikony UI i dalsze szczegóły wyglądu pozostają w opracowaniu.

Ocena wyglądu w grze nadal należy do testu użytkownika. Kontrole lokalne obejmują także wolne miejsca przycisków, ornamenty nad polami, natywne szablony ikon32px i położenia kontrolek nagłówka. Wydanie nie jest oznaczone jako finalny motyw.
