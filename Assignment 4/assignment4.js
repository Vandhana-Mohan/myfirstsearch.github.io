// Temperature check

alert("Hello!! Welcome to Temperature Check");

let temp1 = 0;
const temp = prompt("Enter your temperature:-");

if(temp >= 30 && temp < 45) { 
    console.log("You have entered temperature in °celcius");
    alert(`Hold..till we convert the temperature  from ${temp}°C to °F:`);
    console.log(`Hold..till we convert the temperature  from ${temp}°C to °F:`);
    temp1 = (temp * 1.8) + 32
    console.log(`Your ${temp} °celcius temperature is = ${temp1} °Fahrenheit`);
    
}
else if (temp > 45 && temp < 90) {
    alert("You have entered an invalid temperature - Try Again!!! - Refresh the screen")
    console.log(`Good luck`);
}
else if(temp >= 90 && temp < 105){
    console.log("You have entered temperature in °Fahrenheit");
    alert(`Hold..till we convert the temperature from ${temp}°F to °C:`);
    console.log(`Hold..till we convert the temperature from ${temp}°F to °C:`);
    temp1 = ((temp - 32) * (5/9))
    console.log(`Your ${temp} °Fahrenheit temperature is = ${temp1} °Celcius`);
}
else {
    alert("You have entered an invalid temperature - Try Again!!! - Refresh the screen")
    console.log(`Good luck`);
};

// BMI check

alert("Hello!! Welcome to The BMI Check");
console.log("Hello!! Welcome to The BMI Check")
let m1 = Number(prompt("Enter John's Mass in kg:-"));
let h1 = Number(prompt("Enter John's Height in meter:-"));
let m2 = Number(prompt("Enter Lucas's Mass in kg:-"));
let h2 = Number(prompt("Enter Lucas's Height in meter:-"));

bmi1= (m1/(h1*h1));
bmi2= (m2/(h2*h2));

console.log(`The BMI of John is ${bmi1}`);
console.log(`The BMI of Lucas is ${bmi2}`);

if (bmi1 > bmi2){
    console.log(`John's BMI ${bmi1} is higher than Lucas BMI ${bmi2}`)
}
else if (bmi2 > bmi1){
    console.log(`Lucas's BMI ${bmi2} is higher than John's BMI ${bmi1}`)
}
else if (bmi1 == bmi2){
    console.log(`John's BMI is equal to Lucas BMI = ${bmi1}`)
};

if (bmi2 >= 18.5 && bmi2 <= 24.9){
    console.log(`Lucas's BMI ${bmi2} is in Normal category between 18.5 - 24.9`)
}
else if (bmi2 >= 25 && bmi2 <= 29.9){
    console.log(`Lucas's BMI ${bmi2} is in Overweight category between 25 - 29.9`)
}
else if (bmi2 >= 30 && bmi2 <= 39.9){
    console.log(`Lucas's BMI ${bmi2} is in Obese category between 30 - 39.9`)
}
else if (bmi2 >= 40){
    console.log(`Lucas's BMI ${bmi2} is in Morbidity Obese category greater than 40`)
}

if (bmi1 >= 18.5 && bmi1 <= 24.9){
    console.log(`John's BMI ${bmi1} is in Normal category between 18.5 - 24.9`)
}
else if (bmi1 >= 25 && bmi1 <= 29.9){
    console.log(`John's BMI ${bmi1} is in Overweight category between 25 - 29.9`)
}
else if (bmi2 >= 30 && bmi2 <= 39.9){
    console.log(`John's BMI ${bmi1} is in Obese category between 30 - 39.9`)
}
else if (bmi1 >= 40){
    console.log(`John's BMI ${bmi1} is in Morbidity Obese category greater than 40`)
}


// Game check

alert("Hello!! Welcome to The Game of Nets and Knicks");
console.log("Hello!! Welcome to The Game of Nets and Knicks")

let avg1 = 0;
let avg2 = 0;
let nets1 = Number(prompt("Enter team Nets score 1:-"));
let knick1 = Number(prompt("Enter team Knicks score 1:-"));
let nets2 = Number(prompt("Enter team Nets score 2:-"));
let knick2 = Number(prompt("Enter team Knicks score 2:-"));
let nets3 = Number(prompt("Enter team Nets score 3:-"));
let knick3 = Number(prompt("Enter team Knicks score 3:-"));
console.log(typeof knick3);

avg1 = ((nets1 + nets2 + nets3)/3);
avg2= ((knick1 + knick2 + knick3)/3);
if(avg1 > avg2) { 
    alert("Team Nets won");
    console.log(`Team Nets won by : ${(avg1 - avg2)} runs`)
}

else if (avg2 > avg1){
     alert("Team Knicks won");
     console.log(`Team Knicks won by : ${(avg2 - avg1)}  runs`)
}

else if (avg2 == avg1 ){

alert("Its a draw... ");
console.log(`Net and Knicks scored ${avg2} runs`)
};