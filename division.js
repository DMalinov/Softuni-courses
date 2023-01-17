function devision(number) {
    let divNumber = 0;
    if (number % 10 == 0) {
        divNumber = 10;
    } else if (number % 7 == 0) {
        divNumber = 7;
    } else if (number % 6 == 0) {
        divNumber = 6;
    } else if (number % 3 == 0) {
        divNumber = 3;
    } else if (number % 2 == 0) {
        divNumber = 2;
    }
    if (divNumber > 0) {
        console.log(`The number is divisible by ${divNumber}`);
    } else {
        console.log("Not divisible");
    }
}

devision(30);
devision(15);
devision(12);
devision(1643);