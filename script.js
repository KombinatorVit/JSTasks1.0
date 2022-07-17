// Раскрывающееся дерево
// важность: 5
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
//
//
//     Требования:
//
//         Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.
//
//     Решение состоит из двух шагов:
//
//     Оборачиваем текст каждого заголовка дерева в элемент <span>. Затем мы можем добавить стили CSS на :hover и обрабатывать клики только на тексте, т.к. ширина элемента <span> в точности совпадает с шириной текста.
//     Устанавливаем обработчик на корневой узел дерева tree и ловим клики на элементах <span>, содержащих заголовки.

<!DOCTYPE HTML>
<html>

<head>
<style>
.tree span:hover {
    font-weight: bold;
}

.tree span {
    cursor: pointer;
}
</style>
<meta charset="utf-8">
</head>

<body>

<ul class="tree" id="tree">
    <li>Животные
        <ul>
            <li>Млекопитающие
                <ul>
                    <li>Коровы</li>
                    <li>Ослы</li>
                    <li>Собаки</li>
                    <li>Тигры</li>
                </ul>
            </li>
            <li>Другие
                <ul>
                    <li>Змеи</li>
                    <li>Птицы</li>
                    <li>Ящерицы</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Рыбы
        <ul>
            <li>Аквариумные
                <ul>
                    <li>Гуппи</li>
                    <li>Скалярии</li>
                </ul>
            </li>
            <li>Морские
                <ul>
                    <li>Морская форель</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<script>
    // поместить все текстовые узлы в элемент <span>
    // он занимает только то место, которое необходимо для текста
    for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

    //  ловим клики на всём дереве
    tree.onclick = function(event) {

    if (event.target.tagName != 'SPAN') {
    return;
}

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; // нет детей

    childrenContainer.hidden = !childrenContainer.hidden;
}
</script>

</body>
</html>