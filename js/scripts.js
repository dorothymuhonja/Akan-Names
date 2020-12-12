function getAkanName () {
  let yearOfBirth = document.getElementById("year").value;
  let monthOfBirth = Number(document.getElementById("month").value);
  let dayOfBirth = Number(document.getElementById("date").value);
  let genders = document.getElementsByName("gender");

  
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);

  
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }
function yearValidator () {

    if (yearOfBirth < 1900 || yearOfBirth > 2030 ) {
        return false;
    } else {
        return true;
    }
}
  let yearValid = yearValidator();
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  let dayOfWeekNumber = ((century / 4) - 2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
    var dayOfWeekNumber = Math.floor(dayOfBirth);
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  let index;
  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

  console.log(index);

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('show').textContent = "You were born on a " + daysOfWeek[index] + " and your Akan name is " + maleAkanNames[index];
    document.getElementById('show').style.fontSize = "18px";
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('show').textContent = "You were born on a " + daysOfWeek[index] + "  and your Akan name is " + femaleAkanNames[index];
    document.getElementById('show').style.fontSize = "18px";
    return false;
  } else {
    alert("You've entered an invalid date, month or year or have not selected a gender, please try again.");
  }
}

// function akanName(date, month, yearOfBirth) {

//     var century = yearOfBirth.slice(0, 2);
//     var year = yearOfBirth.slice(2, 4);

//     var genders = document.getElementById("gender");
//     var gender = genders.options[genders.selectedIndex].text;

//     var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
//     var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

//     var dayOfBirth = (((century / 4) - 2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
//     var dayOfBirth = Math.floor(dayOfBirth);

//     if (gender === "Male") {
//         document.getElementById("result").innerHTML = "You were born on a " + dayOfWeek[dayOfBirth - 1] + " and your Akan name is " + maleName[dayOfBirth - 1];
//          document.getElementById('date').value = '';
//          document.getElementById('month').value ='';
//          document.getElementById('year').value ='';
//         return false;
//     }
//     else if (gender === "Female") {
//         document.getElementById("result").innerHTML = "You were born on a " + dayOfWeek[dayOfBirth - 1] + " and your Akan name is " + femaleName[dayOfBirth - 1];
//         document.getElementById('date').value = '';
//          document.getElementById('month').value ='';
//          document.getElementById('year').value ='';
//         return false;
//     }

// }

// function verify() {
//     var date = document.getElementById('date').value;
//     var month = document.getElementById('month').value;
//     var yearOfBirth = document.getElementById('year').value;
//     var newDate= new Date();


//     if (date === "" || date < 1 || date > 31) {
//         alert("Date must be between 1 and 31");
//         return;
//     }
//     else if (month === "" || month < 1 || month > 12) {
//         alert("Month must be between 1 and 12");
//         return;
//     }
//     else if (yearOfBirth === "" || yearOfBirth.length < 4 || yearOfBirth > newDate.getFullYear()) {
//         alert("Please enter the correct year!!");
//         return;
//     }
//     else if(date === "" || month === "" || yearOfBirth === ""){
//         alert("All fields are required!");
//         return false;
//     }else{
//         generateName(date,month,yearOfBirth);
//         return false;
//     }
// }

