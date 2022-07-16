// Скрыть элемент по нажатию кнопки
// важность: 5
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
//
//     Демо:

<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />

<div id="text">Текст</div>

    // Здесь не важно, как мы скрываем текст.
    // Также можно использовать style.display:
    document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}
