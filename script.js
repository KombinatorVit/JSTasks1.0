Счётчик: <input type="button" value="1" data-counter>
    Ещё счётчик: <input type="button" value="2" data-counter>

    <script>
        document.addEventListener('click', function(event) {

        if (event.target.dataset.counter != undefined) { // если есть атрибут...
        event.target.value++;
    }

    });
    </script>