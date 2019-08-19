

function formValidation() {
  let date = document.getElementById("date");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  let gender = document.getElementsByName("gender");


  // checks date
  if (date.value === "") {
    alert("Enter date in number format");
  }
  else {
    if (isNaN(date.value)) {
      alert("Enter a number");

    }
    else {
      if (date.value <= 0 || date.value > 31) {
        alert("Invalid date");

      }
      else {
        valdate = date.value;

      }

    }
  }

  // checks month
  if (month.value === "") {
    alert("Enter month in number format");
  }
  else {
    if (isNaN(month.value)) {
      alert("Enter a number");

    }
    else {
      if (month.value <= 0 || month.value > 12) {
        alert("Invalid month");

      }
      else {
        valmonth = month.value;

      }

    }
  }

  //checks year
  if (year.value === "") {
    alert("Enter year in number format");
  }
  else {
    if (isNaN(year.value)) {
      alert("Enter a number");

    }
    else {
      if (year.value <= 0 || year.value > 2019) {
        alert("Invalid year");

      }
      else {
        valyear = year.value;

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
        valgender = gender[i].value;
      }
    }

  }

  var userInfo = {
    myDate: valdate,
    myMonth: valmonth,
    myYear: valyear,
    myGender: valgender
  }


  return userInfo;
}


function calcDay() {
  var details = formValidation();
  var date = parseInt(details.myDate);
  var month = parseInt(details.myMonth);
  var year = parseInt(details.myYear);


  var a = Math.floor((14 - month) / 12);
  var y = year - a;
  var m = month + 12 * a - 2;
  dayOfWeek = (date + y + Math.floor(y / 4) - Math.floor(y / 100) +
    Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
  //alert(dayOfWeek);
  return dayOfWeek;





}

function getAkanName() {
  var userInfo = formValidation();
  var index = calcDay();
  var gender = userInfo.myGender;



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

function myFunctions() {
  formValidation();
  calcDay();
  getAkanName();


}











































