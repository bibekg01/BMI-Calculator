const Button = document.getElementById("calculate");


Button.addEventListener("click",function(e){
    e.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    var weightinkg = weight * 0.453592;
    var heightincm = height * 2.54;
    var heightsquared = heightincm*heightincm;

    const bmi = Math.floor(weightinkg/heightsquared *10000);
    // console.log(`BMI is ${bmi}`);
    document.getElementById("para").textContent = `Your BMI is ${bmi} kg/m2`
})
