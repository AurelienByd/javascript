console.log("Connecté!");

var a = window.prompt("entrez un nombre :");
var b = window.prompt("entrez un multiplicateur :");
var c = document.getElementById("i");
var d = document.getElementById("j");


function produit(x, y)
{
    c.innerHTML = "Le cube de " + x + " est égal à " + (x*x*x);
    d.innerHTML = "Le produit de " + x + " x " + y + " est égal à " + (x*y);
    return;
}

produit(a, b);

// var imagejavascript = document.createElement("/home/stagiaire/javascript/phase_09/papillon.jpg");

// function afficheImg(imagejavascript)
// {
//     var monimage = imagejavascript;
// monimage = "/home/stagiaire/javascript/phase_09/papillon.jpg";
// return monimage;
// }

// afficheImg("/home/stagiaire/javascript/phase_09/papillon.jpg");