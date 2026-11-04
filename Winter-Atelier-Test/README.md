# Winter Atelier — test 0.2.17

Wydanie 0.2.17-test, build `fc2ab24b3f6244f8`. Poprawki po teście 0.2.16 w grze; do ponownej oceny przez użytkownika.

- Wspólny kafelek Darrefulla zachowuje natywny rozstaw 33 px i pola 32 px w torbach, sklepach i targowisku. Poprawiona jest wyłącznie skala tła; pozycje i rozmiary przedmiotów pozostają oryginalne. Usunięte jasne pasy boczne podkładu siatki.
- Zwijanie i odświeżanie: dostępne kontrolki, miejsce obok tytułu i poprawne rysunki normal/hover również przy późniejszym wczytaniu CSS autora.
- Zachowane oba przełączane tryby okien. Pełny pozostaje nieprzezroczysty, a tylko przezroczysty otrzymuje materiał małych okien i stałe 75% krycia tła. Tekst, kontrolki i oryginalna ikona autora pozostają widoczne. Bez nowych poziomów przezroczystości.
- Biały tekst natywnego ostrzeżenia o zbliżającym się stanie AFK; odliczanie i obsługa klienta bez zmian. SI pozostaje poza zakresem.

[Zainstaluj lub zaktualizuj w Tampermonkey](https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js), sprawdź wersję **0.2.17-test** i przeładuj grę. Pozostaw włączony jeden skrypt motywu.

Instalator pobiera CSS, grafiki i dotychczasowy skrypt metadanych palety z przypiętego commita. Wszystkie 263 pliki assets są identyczne z 0.2.16; nie dodano nowych grafik ani logiki loadera. Nie ma ogólnego runtime ani obserwatora DOM. Darrefull otrzymuje wspólne reguły CSS.

Lokalne kontrole: 111 wariantów klienta; 8 stanów panelu Darrefulla; 8 rodzin komponentów w obu trybach i kolejnościach CSS; 10 prób siatki/nagłówka oraz 24 próby pikseli ikon normal/hover. Nowy test odrzuca opublikowany CSS 0.2.16 z powodu zgłoszonych błędów. CSS źródłowy 205436 B, bez duplikatów, filtrów, rozmyć i nowych animacji.

Ponowny test w zalogowanej grze i ocena 75% krycia pozostają osobne. Kontrole lokalne nie potwierdzają wszystkich prywatnych/przyszłych okien dodatku ani wydajności gry. Yuuki/Lootlog/Maddonz nadal oczekują wdrożenia oprawy.
