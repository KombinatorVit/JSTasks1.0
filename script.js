let str = "Ослик Иа-Иа посмотрел на Иа-Иа виадук Иа-Иа";
let target = "Иа";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log( pos );
}