var elForm = document.querySelector("#form");
var elCar = document.querySelector("#car");
var elPlane = document.querySelector("#plane");
var elBike = document.querySelector("#bike");
var elWalk = document.querySelector("#walk");

elForm.addEventListener('submit' , function (evt) {
    evt.preventDefault();
    var elInput = document.querySelector("#input").value.trim();
    

    var Result1 = Math.trunc(((elInput / 0.06) / 60)) 
    var Result2 = ((elInput / 0.06) % 60).toFixed(1)
    var byfoot = `${Result1} soat ${Result2} minut`;
    elWalk.textContent = byfoot;


    var Result3 = Math.trunc(((elInput / 0.335) / 60)) 
    var Result4 = ((elInput / 0.335) % 60).toFixed(1)
    var byBike = `${Result3} soat ${Result4} minut`;
    elBike.textContent = byBike

    var Result5 = Math.trunc(((elInput / 1.166666666666667) / 60)) 
    var Result6 = ((elInput / 1.166666666666667) % 60).toFixed(1)
    var byCar = `${Result5} soat ${Result6} minut`;
    elCar.textContent = byCar

    var Result7 = Math.trunc(((elInput / 13.33333333333333) / 60)) 
    var Result8 = ((elInput / 13.33333333333333) % 60).toFixed(1)
    var byPlane = `${Result7} soat ${Result8} minut`;
    elPlane.textContent = byPlane
})