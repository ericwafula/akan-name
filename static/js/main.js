// Calculates day index and returns it as a value
let calculateDayIndex = (day, month, year) => {
    let dd = day;
    let mm = month;
    let yy = year;

    let yearTemp1 = yy.toString();  // takes the year value and turns it to a string
    let yearTemp2 = yearTemp1[0] + yearTemp1[1]; // takes the initial first two digits

    let cc = parseInt(yearTemp2); // Converts temporary value into an integer and saves the century

    let yearTemp3 = yearTemp1[2] + yearTemp1[3]; // takes the last two digits

    yy = parseInt(yearTemp3);
    
    let dayIndex =  (((cc/4) - 2 * cc - 1) + ((5 * yy/4)) + ((26 * (mm + 1)/10)) + dd ) % 7 // calculates the day index

    dayIndex = Math.floor(dayIndex); // rounds downward to its nearest integer

    return dayIndex;
}


// Returns the Akan name
function getDayAndName(){
    // days of the week array
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // akan male names array
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    // akan female names array
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // call our function & pass arguments (input from user), day, month, year
    let index = calculateDayIndex(14, 10, 1994); 
    
    let day = daysOfWeek[index - 1]; 
    let gender = "M";  // gender input from user

    let maleAkanName = maleNames[index - 1]; // Returns Male name
    let femaleAkanName = femaleNames[index -1]; // Returns Female name

    if (gender === "M"){
        console.log("You were born on " + day + " and your Akan name is " + maleAkanName + ".");
    } else {
        console.log("You were born on " + day + " and your Akan name is " + femaleAkanName + ".");
    }
}


getDayAndName();