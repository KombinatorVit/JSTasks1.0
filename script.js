// Сделайте внешние ссылки оранжевыми
// важность: 3
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
//
//     Ссылка является внешней, если:
//
// Её href содержит ://
//     Но не начинается с http://internal.com.
//     Пример:
//
//         <a name="list">the list</a>
// <ul>
//     <li><a href="http://google.com">http://google.com</a></li>
//     <li><a href="/tutorial">/tutorial.html</a></li>
//     <li><a href="local/path">local/path</a></li>
//     <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//     <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//     <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>
//
// <script>
//     // добавление стиля для одной ссылки
//     let link = document.querySelector('a');
//     link.style.color = 'orange';
// </script>
//
// Во-первых, мы должны найти все внешние ссылки.
//
//     Это можно сделать двумя способами.
//
//     Первый – это найти все ссылки, используя document.querySelectorAll('a'), а затем отфильтровать ненужное:

//     let links = document.querySelectorAll('a');
//
// for (let link of links) {
//     let href = link.getAttribute('href');
//     if (!href) continue; // нет атрибута
//
//     if (!href.includes('://')) continue; // нет протокола
//
//     if (href.startsWith('http://internal.com')) continue; // внутренняя
//
//     link.style.color = 'orange';
// }
// Пожалуйста, обратите внимание: мы используем link.getAttribute('href'). Не link.href, потому что нам нужно значение из HTML.
//
// …Другой, более простой путь – добавить проверку в CSS-селектор:

// найти все ссылки, атрибут href у которых содержит ://
// и при этом href не начинается с http://internal.com
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');