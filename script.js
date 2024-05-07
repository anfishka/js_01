//1) Принять у пользователя 2 числа и их сумму вывести
function getNums() {
  let firstNum = prompt("Enter first val", "");
  let secondNum = prompt("Enter second val", "");
  let res = parseInt(firstNum) + parseInt(secondNum);

  console.log(firstNum, "+", secondNum, "=", res);
}

//2) Принять у пользователя ФИО как 3 отдельных переменных и вывести их конкатинированно
function getName() {
  let firstName = prompt("Enter first name", "");
  let middleName = prompt("Enter second name", "");
  let lastName = prompt("Enter second name", "");

  let res = firstName + " " + middleName + " " + lastName;

  console.log(res);
}

//3) Принять у пользователя имя и возраст И если ему больше 17 лет - вывести имя В противном случае - ошибку
function getAge() {
  let userName = prompt("Enter first name", "");
  let userAge = prompt("Enter age", "");

  if (parseInt(userAge) > 16) {
    console.log(userName);
  } else {
    console.log("Error");
  }
}

//4) Принять у пользователя дату его рождения в формате ГГГГ - ММ - ДД (3 отдельных переменных) и вывести через сколько дней будет его праздник
function daysToBirth() {
  let userYearOfBirth = prompt("Enter year of birth", "");
  let userMonthOfBirth = prompt("Enter month of birth", "");
  let userDayOfBirth = prompt("Enter date of birth", "");

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let userBirthdayThisY = new Date(
    currentYear,
    userMonthOfBirth - 1,
    userDayOfBirth
  );
  let userBirthdayNextY = new Date(
    currentYear + 1,
    userMonthOfBirth - 1,
    userDayOfBirth
  );

  let daysToBirthday;

  if (
    (daysToBirthday =
      Math.floor((userBirthdayThisY - currentDate) / (1000 * 60 * 60 * 24)) > 0)
  ) {
    console.log(
      `До вашего дня рождения осталось ${daysToBirthday} дней. Вам исполнится ${
        currentYear - userYearOfBirth
      } лет!`
    );
  } else {
    daysToBirthday = Math.floor(
      (userBirthdayNextY - currentDate) / (1000 * 60 * 60 * 24)
    );
    console.log(
      `До вашего дня рождения осталось ${daysToBirthday} дней. Вам исполнится ${
        currentYear + 1 - userYearOfBirth
      } лет!`
    );
  }
}

//5) Принять у пользователя дату его рождения в формате ГГГГ - ММ - ДД (3 отдельных переменных) и вывести сколько минут он живет в нашем мире

function numOfMinutesLived() {
  let userYearOfBirth = parseInt(prompt("Enter year of birth", ""));
  let userMonthOfBirth = parseInt(prompt("Enter month of birth", "")) - 1;
  let userDayOfBirth = parseInt(prompt("Enter date of birth", ""));

  let currentDate = new Date();
  let currentTime = currentDate.getTime();

  let userBirthday = new Date(
    userYearOfBirth,
    userMonthOfBirth,
    userDayOfBirth
  );
  let timeDifference = currentTime - userBirthday.getTime();
  let minutesLived = Math.floor(timeDifference / (1000 * 60));

  console.log(`Вы живете на Земле ${minutesLived} минут.`);
}

//6) Принять у пользователя отрезок времени в часах и вывести какая это дата

function convertHoursToDate() {
  let hours = parseInt(prompt("Введите количество часов: ", ""));
  let currentDate = new Date();
  let hoursInMilliseconds = hours * 3600000;
  let timestamp = currentDate.getTime() + hoursInMilliseconds;
  let newDate = new Date(timestamp);
  let formattedDate = `${newDate.getDate()}.0${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()}`;
  console.log(`Дата, соответствующая ${hours} часам: ${formattedDate}`);
}

//7) Спросить у пользователя какой цвет светофора он видит и дать ему инструкцию по его действиям
function trafficLightRule() {
  let inputCololor = prompt("Введите цвет светофора: ", "");
  if (inputCololor == "red") {
    console.error("Stop");
  } else if (inputCololor == "yellow") {
    console.warn("Ready");
  } else if (inputCololor == "green") {
    console.log("Go");
  } else {
    console.log("You entered incorrect value");
  }
}

//8) Принять у пользователя  необходимые данные и проверить, что они подходят под условие. В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов двух других сторон (катетов)

function checkRightTriangle() {
    let leg1 = parseInt(prompt("Введите длину первого катета треугольника: "));
    let leg2 = parseInt(prompt("Введите длину второго катета треугольника: "));
    let hypotenuse = parseInt(prompt("Введите длину гипотенузы треугольника: "));

    if (Math.pow(hypotenuse, 2) === Math.pow(leg1, 2) + Math.pow(leg2, 2)) {
        console.log("Результат проверки: Треугольник является прямоугольным.");
    } else {
        console.log("Результат проверки: Треугольник не является прямоугольным.");
    }
}

// Пример использования
checkRightTriangle();
