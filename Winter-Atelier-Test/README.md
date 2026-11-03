# Winter Atelier — test 0.2.14

Wydanie testowe **0.2.14-test**.

[Zaktualizuj w Tampermonkey przez jsDelivr](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), następnie przeładuj grę. Pozostaw włączony jeden skrypt motywu.

## Zmiany po 0.2.13

- Oprawa rodziny okien Darrefulla: pełny i przezroczysty wariant, tytuły, przyciski, formularze i wybrane powierzchnie wewnętrzne. Zachowany przycisk zmiany stylu i oryginalna ikona dodatku przy tytule.
- Osobne reguły dla paska teleportów: nagłówek, podkład siatki, sloty, menu i uchwyt rozmiaru. Ikony autora, przedmiotów i potworów pozostają oryginalne.
- Wypełnienie pełnego panelu dochodzi pod widoczną krawędź ramy. Kontrolki zmiany wyglądu, zwijania i rozmiaru korzystają z istniejących grafik motywu.
- Wdrożenie Darrefulla przez ograniczony do jego kontenerów CSS. Bez nowego runtime, obserwatora DOM i zmian komunikacji z serwerem.
- Wszystkie262pliki assets oraz skrypt palety identyczne bajtowo z0.2.13. Materiały i grafiki są współdzielone z motywem; zmienia się CSS.

## Ładowanie

Mały instalator pobiera CSS, znacznik X i istniejący scripts/palette-bindings.js z jednego przypiętego commita. Pozostaje dotychczasowa obsługa rang i znacznika X. Obsługa Darrefulla nie dodaje JavaScriptu.

## Kontrola

Lokalny odczyt struktury panelu i teleportów Darrefulla:163elementy,8kombinacji klas wyglądu/zwinięcia/przypięcia, zachowane rozmiary i oryginalne źródła obrazków. Dodatkowo formularze w obu wariantach, hover kontrolek, jednoczesne różne tryby okien, CSS dodatku załadowany po motywie oraz kontrola pikseli prześwitów. To kontrola odtworzonego DOM i statycznego CSS autora, bez wykonywania jego skryptu.

Kontrole klienta obejmują107obrazów,111wariantów okien,7HUD,18konfiguracji walki,16nagłówka i96dat. CSS192151B/974reguły;0zdublowanych deklaracji,0nowych filtrów, rozmyć i animacji. Grafiki i skrypt palety bez zmian.

Wygląd, funkcje dodatków i płynność wymagają oceny w zalogowanej grze. Wersja Dev i inne pakiety dodatków nie są objęte deklaracją zgodności tego wydania.
