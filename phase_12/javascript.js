var t = 0;
var table = [];
var v = parseInt(window.prompt("Ecrire un nombre :"));
table[t] = [v];
while (v != 0)
{
    table[t] = [v];
    v = parseInt(window.prompt("Ecrire un nombre :"));
    t++;
}
console.table(table);
console.log(t);