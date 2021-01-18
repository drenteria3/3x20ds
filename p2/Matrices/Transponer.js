//RENTERIA BARRETO DIEGO EDUARDO 3°E
let m = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];
let m2= [];
for(let i=0; i<3; i++) {
    m2[i]=[]
}

for (let i=0; i<m.length; i++){
    console.log(mz[i]);
}

class Transpon{
    static traspon(){
        for (let i=0; i<4; i++) {
            for (let j = 0; j < 3; j++) {
                m2[j][i] = m[i][j];
            }
        }
        console.log("Transpuesta")
        for (let i=0; i<m2.length; i++){
            console.log(m2[i]);
        }
    }
}
Transpon.traspon()