// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.




    let user = {
    name: "Василий Иванович",
    age: 35
};


let json = JSON.stringify(user);
console.log(json)
let obj = JSON.parse(json);
console.log(obj)

//let user2 = JSON.parse(JSON.stringify(user)); как вариант