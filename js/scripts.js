

function formValidation() {
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let gender = document.getElementsByName("gender");

  // checks date
  if (date === "") {
    alert("Enter date in number format");
  }
  else {
    if (isNaN(date)) {
      alert("Enter a number");

    }
    else {
      if (date <= 0 || date > 31) {
        alert("Invalid date");

      }
      else {
        return date;

      }

    }
  }

  // checks month
  if (month === "") {
    alert("Enter month in number format");
  }
  else {
    if (isNaN(month)) {
      alert("Enter a number");

    }
    else {
      if (month <= 0 || month > 12) {
        alert("Invalid month");

      }
      else {
        return month;

      }

    }
  }

  //checks year
  if (year === "") {
    alert("Enter year in number format");
  }
  else {
    if (isNaN(year)) {
      alert("Enter a number");

    }
    else {
      if (year <= 0 || year > 2019) {
        alert("Invalid year");

      }
      else {
        return year;

      }

    }
  }

  //checks gender
  if (gender[0].checked === false && gender[1].checked === false) {
    alert("Select your gender");
  }
  else {
    for (i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        alert(gender[i].value);
      }
    }

  }

  var userInfo = {
    myDate: date,
    myMonth: month,
    myYear: year,
    myGender: gender
  }
  return userInfo;
}

function calcDay() {
  var details = formValidation();
  var calcDate = parseInt(details.myDate);
  var calcMonth = parseInt(details.myMonth);
  var cc = parseInt(details.myYear.slice(0, 2));
  var yy = parseInt(details.myYear.slice(2, 4));


  var weekDay = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (calcMonth + 1) / 10)) + calcDate) % 7;

  alert(weekDay);

  // var x = Math.floor((14 - month) / 12);
  // var y = year - x;
  // var z = month + 12 * x - 2;

  // dayOfWeek = (date + y + Math.floor(y / 4) - Math.floor(y / 100) +
  //   Math.floor(year / 400) + Math.floor((31 * z) / 12) % 7);

  //  alert(dayOfWeek);





}

function getAkanName() {
  var userInfo = formValidation();
  var index = calcDay();
  var gender = userInfo.gender;



  var femaleArray = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var maleArray = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  if (gender === "male") {

    alert("Your Akan name is " + maleArray[index]);

  }
  else if (gender === "female") {
    alert("Your Akan name is " + femaleArray[index]);

  }
  else {
    alert("Invalid");
  }



}

function akanNamer() {








}

































