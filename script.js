// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:
//


// Строка, которую мы возвращаем, должна быть не длиннее maxlength, поэтому, если мы обрезаем строку, то мы должны убрать на один символ больше, чем maxlength — чтобы хватило места на многоточие.
//
//     Имейте в виду, что в качестве многоточия здесь используется … — ровно один специальный Юникодный символ. Это не то же самое, что ... — три точки.

    function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
// = "Вот, что мне хотело…"

truncate("Всем привет!", 20)
// = "Всем привет!"W