
var ca = 0;



function cloudsfront(){

    var cloudsfront = document.getElementById("cloudsfront");
    ca = ca -5;
    cloudsfront.style.backgroundPositionX= ca + "px";
}

var cab = 0;

function cloudsBack(){

    var cloudsBack = document.getElementById("cloudsBack");
    cab = cab + 1;
    cloudsBack.style.backgroundPositionX = cab + "px";

    cloudsfront();

}