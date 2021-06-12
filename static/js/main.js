let calculateDayIndex = (day, month, year) => {
    let dd = day;
    let mm = month;
    let yy = year;

    let yearTemp1 = yy.toString();  // takes the year value and turns it to a string
    let yearTemp2 = yearTemp1[0] + yearTemp1[1]; // takes the initial first two digits

    let cc = parseInt(yearTemp2); // Converts temporary value into an integer

    // let yearTemp1 =
    

    console.log(cc);
}

calculateDayIndex(14, 10, 1994);