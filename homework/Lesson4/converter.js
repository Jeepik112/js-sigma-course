
// Задание 1. Конвертация долларов в рубли
function usdToRub(usd, rate = 90) {
  return usd * rate;
}

function euroToRub(euro, rate = 100) {
  console.log(euro * rate);
}

console.log("USD => RUB:");
console.log(usdToRub(100));       // 9000
console.log(usdToRub(50, 95));    // 4750

console.log("EUR => RUB:");
euroToRub(20);                    // 2000
euroToRub(10, 105);               // 1050


// Задание 2. Фильтр для взрослых

const ages = [10, 18, 55, 3, 20];

function checkAccess(age) {
  if (age >= 18) {
    return " Доступ разрешен";
  } else {
    return " Доступ запрещен";
  }
}

for (let i = 0; i < ages.length; i++) {
  console.log("Возраст: " + ages[i] + checkAccess(ages[i]));
}
