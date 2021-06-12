let calculateDayIndex = (day, month, year) => {
    let dd = day;
    let mm = month;
    let yy = year;

    let temp1 = yy.toString();
    let temp2 = temp1[0] + temp1[1]; // takes the initial first two digits

    let cc = parseInt(temp2); // Converts temporary value into an integer

    console.log(cc);
}

calculateDayIndex(14, 10, 1994);