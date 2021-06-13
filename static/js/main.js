// Calculates day index and returns it as a value
var calculateDayIndex = function(day, month, year) {
    let dd = day;
    let mm = month;
    let yy = year;

    let yearTemp1 = yy.toString();  // takes the year value and turns it to a string
    let yearTemp2 = yearTemp1[0] + yearTemp1[1]; // takes the initial first two digits

    let cc = parseInt(yearTemp2); // Converts temporary value into an integer and saves the century

    let yearTemp3 = yearTemp1[2] + yearTemp1[3]; // takes the last two digits

    yy = parseInt(yearTemp3);
    let dayIndex = (((cc/4) - 2 * cc - 1) + ((5 * yy/4)) + ((26 * (mm + 1)/10)) + dd ) % 7 // calculates the day index;

    dayIndex = Math.floor(dayIndex); // rounds downward to its nearest integer

    return dayIndex;
}

// This was assigned globally to reduce the need of clicking the modal button twice in-order to change default output box paragraph text in HTML
var button = document.getElementById("modal-button");

// Listens to when the button has been clicked
button.addEventListener("click", () => getDayAndName());

// Returns the Akan name
var getDayAndName = function(){
    // Gets HTML elements and stores them in variables
    let outputText = document.getElementById("output-text");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender;

    // Gets the date values in form of string
    let date = document.getElementById("birthday").value;

    // stores values from calendar
    let day = parseInt(date[8] + date[9]);
    let month = parseInt(date[5] + date[6]);
    let year = parseInt(date[0] + date[1] + date[2] + date[3]);

    console.log(date);

    // Assigns gender to the gender variable
    if (male.checked === true){
        gender = "Male";
    } else if (female.checked === true){
        gender = "Female";
    }

    // days of the week array
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // akan male names array
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    // akan female names array
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // call our function & pass arguments (input from user), day, month, year
    let index = calculateDayIndex(day, month, year);

    let dayOfWeek = daysOfWeek[index - 1]; 

    // gender input from user

    let maleAkanName = maleNames[index - 1]; // Returns Male name
    
    let femaleAkanName = femaleNames[index -1]; // Returns Female name

    // Outputs Akan names based on respective genders
    if (gender === "Male"){
        outputText.innerHTML = "You were born on " + dayOfWeek + " and your Akan name is " + maleAkanName + ".";
    } else {
        outputText.innerHTML = "You were born on " + dayOfWeek + " and your Akan name is " + femaleAkanName + ".";
    }
}