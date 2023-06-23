const number = prompt("Введите число");
console.log(number * 0.1)

const number1 = prompt("Введите первое число:");
const number2 = prompt("Введите второе число:");
if (number1 < number2) {
  console.log("Наименьшее число: " + number1);
} else {
  console.log("Наименьшее число: " + number2);
}

const number3 = prompt("Введите число");
if (number < 100) {
    console.log("Число меньше 100");
} else if (number > 100) {
    console.log("Число больше 100");
} else {
    console.log("Числа равны")
};

const name = prompt ("Введите ваше имя");
const age = prompt ("Введите ваш возраст")
if (age > 18) {
    console.log ("Hello " + name);
} else {
    console.log ("Hi " + name)
}
