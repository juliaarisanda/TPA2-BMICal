const height = document.querySelector("#h");
const weight = document.querySelector("#w");
const calculate = document.querySelector("#btn");

calculate.addEventListener("click" , ()=>{
    //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²
    
    
    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value/100) ** 2;
        
        if(bmiValue < 18.5){
            document.getElementById("result").innerHTML=`BMI Index Kamu Adalah : <span> ${bmiValue.toFixed(2)} </span>`+
            "<br>" +
            "UnderWeight";
        } else if(bmiValue > 18.5 && bmiValue <= 24.9){
            document.getElementById("result").innerHTML=`BMI Index Kamu Adalah : <span> ${bmiValue.toFixed(2)} </span>`+
            "<br>" +
            "Normal";
        } else if(bmiValue >= 25 && bmiValue <= 29.9){
            document.getElementById("result").innerHTML=`BMI Index Kamu Adalah : <span> ${bmiValue.toFixed(2)} </span>`+
            "<br>" +
            "Overweight";
        } else if(bmiValue > 30){
            document.getElementById("result").innerHTML=`BMI Index Kamu Adalah : <span> ${bmiValue.toFixed(2)} </span>`+
            "<br>" +
            "Obesity";
        }
    }
    else
        {
            document.getElementById("result").innerHTML = `Silahkan Isi Berat Badan dan Tinggi Badan`;
        }
});