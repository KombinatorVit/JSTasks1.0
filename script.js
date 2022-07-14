// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
//
//     let ladder = {
//         step: 0,
//         up() {
//             this.step++;
//         },
//         down() {
//             this.step--;
//         },
//         showStep: function() { // показывает текущую ступеньку
//             alert( this.step );
//         }
//     };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
//
//     ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
//     ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

// Решением является возврат самого объекта в каждом методе.

    let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
}

ladder.up().up().down().up().down().showStep(); // 1
// Мы также можем писать один вызов на одной строке. Для длинной цепи вызовов это более читабельно:

    ladder
        .up()
        .up()
        .down()
        .up()
        .down()
        .showStep(); // 1