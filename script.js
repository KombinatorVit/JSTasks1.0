// // Поймайте переход по ссылке
// // важность: 5
// // Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// //
// //     Так это должно работать:
// //
// //
// //     Детали:
// //
// //         Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// //     Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
//
//
// Это – классическая задача на тему делегирования.
//
//     В реальной жизни мы можем перехватить событие и создать AJAX-запрос к серверу, который сохранит информацию о том, по какой ссылке ушёл посетитель. Или мы можем загрузить содержимое и отобразить его прямо на странице (если допустимо).
//
// Всё, что нам необходимо, это поймать событие contents.onclick и использовать функцию confirm, чтобы задать вопрос пользователю. Хорошей идеей было бы использовать link.getAttribute('href') вместо link.href для ссылок. Смотрите решение в песочнице.

<!DOCTYPE HTML>
<html>

<head>
<meta charset="utf-8">
    <style>
    #contents {
    padding: 5px;
    border: 1px green solid;
}
</style>
</head>

<body>

<fieldset id="contents">
    <legend>#contents</legend>
    <p>
        Как насчёт того, чтобы прочитать <a href="https://wikipedia.org">Википедию</a> или посетить <a href="https://w3.org"><i>W3.org</i></a> и узнать о современных стандартах?
    </p>
</fieldset>

<script>
    contents.onclick = function(event) {

    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }

    let target = event.target.closest('a');

    if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
}
};
</script>

</body>
</html>