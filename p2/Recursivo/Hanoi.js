//RENTERIA BARRETO DIEGO EDUARDO 3°E
function Hanoi(D, A, F){

    if(D>0)

    {
        Hanoi(D-1, A, 6-A-F); //Auxiliar Actual

        console.log(" Mueve los Discos "+ D + " de la torre " + A + " a la torre "+ F);

        Hanoi(D-1, 6-A-F, F); //Auxiliar Final

    }
}
Hanoi(4,1,3);