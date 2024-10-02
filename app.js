console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i ++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

console.log(`Print odds in 1-10:`)
printOdds(10);
console.log(`Print odds in 1-100:`)
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait ${ 16 - age } year(s) until you can drive.`;

    if (age < 16){
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Mariah", 32);
    checkAge("Cadie", 14);
    checkAge("Violet", 6);
    checkAge("Shane", 37);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
    if (x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2";
    } else if (x < 0 && y < 0 ){
    return "Quadrant 3";
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y != 0){
        return "X Axis";
    } else if (x != 0 && y == 0){
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(10, 10));
console.log(checkQuadrant(-20, 20));
console.log(checkQuadrant(-5, -17));
console.log(checkQuadrant(10, -10));
console.log(checkQuadrant(0, 20));
console.log(checkQuadrant(27, 0));
console.log(checkQuadrant(0, 0));


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(a, b, c){
    return a + b > c || a + c > b || b + c > a
}

function checkTriangle(a, b, c){
    let isValid = isTriangle(a, b, c);
    if (isValid){
        if( a == b & b == c ) {
            return `The triangle is equilateral`;
        } else if (a == b || b == c || a  == c ){
            return `The triangle is isoceles`;
        } else {
            return 'The triangle is scalene';
        }
    } else {
        return `Not a valid triangle.`
    }
}

console.log(checkTriangle(3, 6, 9));
console.log(checkTriangle(4, 4, 10));
console.log(checkTriangle(3, 3, 3));


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining `);
    console.log(`Averge projected use: ${projectedAvg} GB per day`);

    if (currentAvg > projectedAvg){
        statusMsg = "EXCEEDING"
    }
    else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    }
    else {
        statusMsg = "AT";
    }
    console.log(`You are ${statusMsg} daily use by ${currentAvg} GB per day. If you continue, you will use ${planLimit - (remainingDays * currentAvg)} from your limit of ${planLimit} `)
}

console.log(dataUsage(30, 15, 90));
console.log(dataUsage(100, 2, 2));