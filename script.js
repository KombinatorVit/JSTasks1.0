// // state -> copyState -> changeCopyState => use CopyState with changes
// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof (() => {}))
// console.log(Array.isArray([]))


const user = {
    name: 'Bob',
    age: 23,
    isStudent: true
}

// const user2 = user;
//
// user2.name = 'Alex';
//
// console.log(user)


let user2 = {...user}

// user2.name = user.name
// user2.age = user.age;

const deepCopyUser = {...user}

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]

console.log(students.map(st => st.name ==='Ann' ? {...st, name: 'Joen'}: st))

const arr = [1,2,3]

const [a, b, c] = arr;