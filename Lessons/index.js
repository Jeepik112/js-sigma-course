// ЛЕКЦИЯ 1.

console.log("привет из курса по javascript");

console.log("=====================================");


// ЛЕКЦИЯ 2. 
// Переменные, типы данных и сравнение.

const test = "ой. кстати const нельзя менять, а let можно. " + 123; 
console.log(test);

if (test >= 100) {
        console.log("нихуя себе");
} else {
    console.log("ну такое");
}

// if (в скобках условие) {
//      тело если условие верно
// } else {
//      тело если условие неверно
// }

console.log("=====================================");


let num = 50;
num = num + 10;
console.log(num);

if (num > 50) {
    console.log("больше 50");
} else if (num === 50) {
    console.log("равно 50");
}

//== - не строгое равенство
//=== - строгое равенство
//!= - не строгое неравенство

console.log("=====================================");


const isAdmin = false;
let fileSize = 1024;
console.log(fileSize);

if (isAdmin && fileSize > 1000) {
    console.log("доступ разрешен");
}
if (isAdmin || fileSize < 1000) {
    console.log("доступ разрешен");
}
if (!isAdmin) {
    console.log("доступ запрещен");
}

// && - и
// || - или
// ! - не

console.log("=====================================");


async function typewriter(text, delay = 50) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    console.log();
}

// Начало с небольшой задержкой
setTimeout(async () => {
    await typewriter("Загрузка началась...");
}, 600);

// Проценты идут быстрее (каждую секунду)
setTimeout(async () => {
    await typewriter("21%");
}, 2000);  // Через 1.4 сек после первого

setTimeout(async () => {
    await typewriter("78%");
}, 3000);  // Через 1 сек после предыдущего

setTimeout(async () => {
    await typewriter("99%");
}, 4000);  // Через 1 сек после предыдущего

// Финальное сообщение с бóльшей паузой для драматизма
setTimeout(async () => {
    // Добавляем небольшую паузу перед финалом
    await new Promise(resolve => setTimeout(resolve, 800));
    await typewriter("Загрузка завершена. Приятного пользования!");
    await typewriter("=====================================");
}, 5500);  // Через 1.5 сек после 99%


// ЛЕКЦИЯ 3. 
// Git, массивы и циклы.

const numb = [1, 2, 3, 4, 5];
console.log(numb[0]); // 1
numb.push(6); // добавить в конец
console.log(numb.length); // длина массива


let fuel = 100;
while (fuel > 0) {
    console.log("машина едет" + ". топливо осталось: " + fuel);
    fuel -= 10; // fuel = fuel - 10
}
console.log("машина остановилась");
// while (пока условие верно) {
//      тело цикла
// }

for (let i = 1; i < 5; i++) {
    console.log("Отжимание " + i);
}
// for (начало; условие; шаг) {
//      тело цикла
// }

for (let i = 0; i < numb.length; i++) {
    console.log("Элемент массива: " + numb[i]);
}

for (const number of numb) {
    console.log("Элемент массива: " + number);
}
// for (переменная of массив) {
//      тело цикла
// }
// for...of - цикл по значениям массива. то же самое, что и выше, но короче. только для массивов.

console.log("=====================================");

const files = ["photo1.jpg", "video1.mp4", "document1.pdf", "virus.exe"];
for (const file of files) {
    if (file === "virus.exe") {
        console.log("опасный файл найден: " + file);
    } else {
        console.log("файл в безопасности: " + file);
    }
}

// break - прервать цикл
// continue - пропустить текущую итерацию и перейти к следующей

console.log("=====================================");


// ЛЕКЦИЯ 4. Функции 

function sum(a, b) {
    return a + b;
}
console.log(sum)

const result = sum(5, 10);
console.log(result);







