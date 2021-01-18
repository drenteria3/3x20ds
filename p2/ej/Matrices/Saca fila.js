//RENTERIA BARRETO DIEGO EDUARDO 3°E
let m = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]];
let f = [];

for (let i=0; i<m.length; i++){
    console.log(m[i]);
}
console.log("Que fila imprimirás:");

b= process.openStdin();
b.addListener("data", function(n) {
    x = (parseInt(n))-1;
    console.log(Saca.fila());
    process.exit();
})
class Saca {

    static fila() {
        for (let i = 0; i < m[0][Array.length+1]; i++) {
            f[i] = m[x][i];
        }
        return f
    }
}