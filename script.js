// Какой день месяца был много дней назад?
//     важность: 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//
//     К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//
//     Функция должна надёжно работать при значении days=365 и больших значениях:
//
//     let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

// Идея проста: нужно вычесть заданное количество дней из date:
//
//     function getDateAgo(date, days) {
//         date.setDate(date.getDate() - days);
//         return date.getDate();
//     }
// …Но функция не должна изменять объект date. Это очень важно, поскольку внешний код, передающий нам объект, не ожидает его изменения.
//
//     Это можно осуществить путём клонирования даты:

    function getDateAgo(date, days) {
        let dateCopy = new Date(date);

        dateCopy.setDate(date.getDate() - days);
        return dateCopy.getDate();
    }

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)