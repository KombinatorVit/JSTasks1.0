// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

// Или, как вариант, мы можем получить сумму, используя методы Object.values и reduce:

// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
    function sumSalaries(salaries) {
        return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
    }