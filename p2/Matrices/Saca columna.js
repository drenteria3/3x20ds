//RENTERIA BARRETO DIEGO EDUARDO 3°E
let m = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]];
let colum = [];
let x=0;

for (let i=0; i<m.length; i++){
    console.log(m[i]);
}

class Saca {
    static columna() {
        for (let i = 0; i < m.length; i++){
            console.log(m[i][x]);
        }
        return colum
    }
}
console.log("Que columna imprimirás:");
b= process.openStdin();
b.addListener("data", function(n) {
    x = (parseInt(n))-1;
    console.log(Saca.columna());
    process.exit();
})