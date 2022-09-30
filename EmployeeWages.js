console.log("Welcome to employee wage computation program");
const FULL_TIME=1;
const PART_TIME=2;
const FULL_HOURS=8;
const PART_HOURS=4;
const WAGE_PER_HOURS=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HOURS=160;

function getWorkingHours(isPresent)
{
switch(isPresent)
{
case FULL_TIME:
    return FULL_HOURS;
    break;

case PART_TIME:
    return PART_HOURS;
    break;

default:
    return 0;
}
}

function calculateDailyWages(empHrs)
{
    return empHrs*WAGE_PER_HOURS;
}


let empHrs=0;
let numberOfDays=0;
let empDailyWagesArr=new Array();
let totalEmpHours=0;
while(empHrs<MAX_WORKING_HOURS&&numberOfDays<MAX_WORKING_DAYS)
{
    numberOfDays++;
    let isPresent=Math.floor(Math.random()*3);
    empHrs=getWorkingHours(isPresent);
    totalEmpHours+=empHrs;
    empDailyWagesArr.push(calculateDailyWages(empHrs));
}
let totalEmpWage=0;

function sum(dailyWages)
{
    totalEmpWage+=dailyWages;
}
empDailyWagesArr.forEach(sum);

let dailyCount=0;
function mapDayWithWage(dailyWages)
{
    dailyCount++;
    return dailyCount+"="+dailyWages;
}

let mapDayWithWageArr=empDailyWagesArr.map(mapDayWithWage);
console.log(mapDayWithWageArr);
function fullTimeWage(dailyWages)
{
    return dailyWages.includes("160");
}

let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log("full day wage array :"+fullDayWageArr);
function partTimeWage(dailyWages)
{
    return dailyWages.includes("80");
}

let partDayWageArr=mapDayWithWageArr.filter(partTimeWage);
console.log("Half day wage array :"+partDayWageArr);
console.log("total hours :"+totalEmpHours +" total working days :"+numberOfDays+" total employee wages :"+totalEmpWage);
console.log("Number of Days "+numberOfDays);
console.log("Number of hours "+totalEmpHours);
let calWage=totalEmpHours*WAGE_PER_HOURS;
console.log("Monthly Employee wages is $"+calWage);
console.log("--------Daily wages array---------------");
console.log(empDailyWagesArr);


