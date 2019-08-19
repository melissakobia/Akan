function formValidation(){
  let date = parseInt(document.getElementById("date"));
  let month = parseInt(document.getElementById("month"));
  let year = document.getElementById("year");
  let gender = document.getElementsByName("gender");

  if(date === "") {
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
        alert("date");
        
      }
      
    }
  }

  if(month === "") {
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
        alert("month");
        
      }
      
    }
  }

}




var femaleArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
var maleArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

var cc = parseInt(year.slice(0,2));
var yy = parseInt(year.slice(2,4));

var day = function(date,month,cc,yy){
  return  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7;

}

if (0 < date < 31 && 0 < month < 12) {
  if(female == true) {
    femaleArray[day]
  }

}
else {
  alert("The date entered is invalid");
}


