const former = document.querySelector("form")
former.addEventListener("submit", (e) => {  
    e.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);  
    const advice = document.querySelector("#advice");
    const result = document.querySelector("#result");

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerText = "Please provide a valid weight";
    } else if (height === "" || height < 0 || isNaN(height)) {
        result.innerText = "Please provide a valid height";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerText = `Your BMI is ${bmi}`;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi >=0 && bmi < 18.5){
        advice.innerText = "Underweight";
    } else if(bmi >=18.5 && bmi <= 25){
        advice.innerText = "Normal weight";
    }else if(bmi >=25 && bmi <=30){
        advice.innerText = "Overweight";
    }else if(bmi>30 && bmi <= 70){
        advice.innerText = "Obese";
    }

    });