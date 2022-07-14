function sumInput(){
    let arr = [];

    while(true) {
     let value = prompt('Введите значение', '0')

        if(value === '' || value === null || !isFinite(value)) break;

        arr.push(+value);
    }

    let sum = 0;
    for (let ar of arr) {
sum += ar;
    }

    return sum;

}


alert(sumInput())
