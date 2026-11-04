# Winter Atelier — test 0.2.16

Wydanie 0.2.16-test, build `fec89eb708ae29b0`. Nowy zestaw do oceny w grze; kontrola lokalna nie zastępuje tego testu.

Zmiany względem 0.2.15:

- Uzupełniona oprawa wnętrz Darrefulla: konfiguracja dodatków, wspólne przyciski, pola, rozwijane listy i sloty, pełne teleporty oraz Prowadź. Jasny tekst także we własnych klasach dodatku. Zachowana oryginalna ikona autora oraz oba przełączane warianty okien.
- Konfiguracja ramek i badanie aktywności: wspólne zimowe tło, dopasowane zakładki i czytelne napisy/statusy. Podglądy ramek oraz dane pozostają oryginalne. SI nie jest objęty nową adaptacją.
- Tytuły: ta sama ilustracja, dedykowane zakończenia 4× i dopasowany środek CSS; nowy montaż oczekuje oceny.
- Oryginalny minutnik klienta: nazwa na liście i nazwa/ranga w tooltipie korzystają z uzgodnionej palety. Bez zmian czasu, danych i obsługi odrodzenia.

[Zainstaluj lub zaktualizuj w Tampermonkey](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), sprawdź wersję 0.2.16-test i przeładuj grę. Zostaw włączony jeden skrypt motywu.

Instalator jest mały; pobiera CSS, grafiki i istniejący mały skrypt metadanych palety z przypiętego commita. Grafiki/font są w jednym płaskim assets/. Brak ogólnego runtime, obserwatora DOM, globalnych podmian IMG/XHR i modułu animacji notyfikacji. Celowany znacznik X mapy oraz adapter palety UI pozostają jawnie częścią zestawu. Darrefull jest stylizowany przez CSS.

Lokalnie przeszły kontrole 111 wariantów klienta, ośmiu stanów panelu Darrefulla i ośmiu zestawów jego komponentów w obu trybach/kolejnościach CSS. Arkusz źródłowy 204004 B, zero zduplikowanych deklaracji, filtrów, rozmyć i nowych animacji. Nie jest to potwierdzenie wszystkich prywatnych/przyszłych okien ani płynności gry. Pozostałe pakiety Yuuki/Lootlog/Maddonz nie mają jeszcze wdrożonej oprawy.

Do oceny przede wszystkim wnętrza Darrefulla, przełączanie wyglądu, tytuły oraz kolory minutnika. Dotychczasowy folder Winter-Atelier pozostaje osobny.
