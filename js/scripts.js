function generateName(date, month, yearOfBirth) {


    var maleName = [
      'Kwasi',
      'Kwadwo',
      'Kwabena',
      'Kwaku',
      'Yaw',
      'Kofi',
      'Kwame',
    ];
    var femaleName = [
      'Akosu',
      'Adwoa',
      'Abenaa',
      'Akua',
      'Yaa',
      'Afua',
      'Amna',
    ];
    var dayOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    var century = yearOfBirth.slice(0, 2);
    var year = yearOfBirth.slice(2, 4);

    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;


    var dayOfBirth = (((century / 4) - 2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);

    if (gender === "Male") {
         document.getElementById('show').innerHTML = "You were born on a " + dayOfWeek[dayOfBirth] + " and your name is " + maleName[dayOfBirth];
         document.getElementById('date').value = '';
         document.getElementById('month').value ='';
         document.getElementById('year').value ='';
        return false;
    }
    else if (gender === "Female") {
        document.getElementById('show').innerHTML = "You were born on a " + dayOfWeek[dayOfBirth] + " and your name is " + femaleName[dayOfBirth];
        document.getElementById('date').value = '';
         document.getElementById('month').value ='';
         document.getElementById('year').value ='';
        return false;
    }

}

function verify() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var newDate = new Date();

  if (date === '' || date < 1 || date > 31) {
    alert('Date must be between 1 and 31');
    return;
  } else if (month === '' || month < 1 || month > 12) {
    alert('Month must be between 1 and 12');
    return;
  } else if (
    yearOfBirth === '' ||
    yearOfBirth.length < 4 ||
    yearOfBirth > newDate.getFullYear()
  ) {
    alert('Enter a valid year of birth!!');
    return;
  } else if (date === '' || month === '' || yearOfBirth === '') {
    alert('All fields are required.....!');
    return false;
  } else {
    generateName(date, month, yearOfBirth);
    return false;
  }
}
