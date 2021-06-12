let calculateDayIndex = (day, month, year) => {
    let dd = day;
    let mm = month;
    let yy = year;

    let yearTemp1 = yy.toString();  // takes the year value and turns it to a string
    let yearTemp2 = yearTemp1[0] + yearTemp1[1]; // takes the initial first two digits

    let cc = parseInt(yearTemp2); // Converts temporary value into an integer and saves the century

    let yearTemp3 = yearTemp1[2] + yearTemp1[3]; // takes the last two digits

    yy = parseInt(yearTemp3);
    
    var dayIndex =  (((cc/4) - 2 * cc - 1) + ((5 * yy/4)) + ((26 * (mm + 1)/10)) + dd ) % 7 // calculates the day index

    return dayIndex;
}

calculateDayIndex(14, 10, 1994);