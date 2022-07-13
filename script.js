let user = {
     name: "Иван",
     age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
     clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = "Пётр"; // изменим в нём данные

alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.
/////\\


let user = { name: "Иван" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "Иван", canView: true, canEdit: true }
// \\\\\
let user = {
     name: "Иван",
     age: 30
};

let clone = Object.assign({}, user);