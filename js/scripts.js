var date = parseInt(document.getElementById("date"));
var month = parseInt(document.getElementById("month"));
var year = document.getElementById("year");

var male = document.getElementById("male");
var female = document.getElementById("female");

var femaleArray = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
var maleArray = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

var cc = parseInt(year.slice(0,2));
var yy = parseInt(year.slice(2,4));

var day = function(date,month,cc,yy){
  return  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7;

}

if (0 < date < 31 && 0 < month < 12) {

}
else {
  alert("The date entered is invalid");
}


