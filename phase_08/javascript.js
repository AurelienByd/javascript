//Exercice 2

const n = 30;
let m;
for (m=0; m<n; ++m)
{
    console.log(m);
}

//Exercice 3

let e1 = parseInt(window.prompt("Ecrire un nombre entier :"));
let e2 = parseInt(window.prompt("Ecrire un nombre entier :"));
let r1;
let r2;
while (r1!==0)
{
    r1 = e1 + e2;
    r2 = (e1 + e2) / 2;
    window.alert(r1 + " " + "-" + " " + r2);
}
