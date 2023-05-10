var nombre = window.prompt("Ecrivez un nombre :");
if (nombre%2==0)
{
    window.alert("nombre pair");
}
else
{
    window.alert("nombre impair");
}

var année = window.prompt("Quelle année sommes-nous ?");
var age = window.prompt("Quelle est votre année de naissance ?");
if  ((année-age)>=18)
{
    window.alert((année-age) + " " + "an(s)" + "," + " " + "majeur");
}
else
{
    window.alert((année-age) + " " + "an(s)" + "," + " " + "mineur");
}

var n1 = parseInt(window.prompt("Saisir un nombre :"));
var n2 = parseInt(window.prompt("Saisir un nombre :"));
let o = window.prompt("Saisir un opérateur :");
if ((o!=="+") && (o!=="-") && (o!=="*") && (o!=="/"))
{
    window.alert("ERREUR");
}
if (o=="+")
{
    window.alert(n1 + n2);
}
else if (o=="-")
{
    window.alert(n1-n2);
}
else if (o=="*")
{
    window.alert(n1*n2);
}
else if ((o=="/") && (n2!==0))
{
    window.alert(n1/n2);
}
else if ((o=="/") && (n2==0))
{
    window.alert("DIVISION PAR 0 IMPOSSIBLE");
}