function dia(x){
    let d = 1
    let r =  d + x%7;  
    if (r>7)r-7; 
    if (r == 1)return "lunes";
    else if (r == 2)return "martes";
    else if (r == 3)return "miercoles";
    else if (r == 4)return "jueves";
    else if (r == 5)return "viernes";
    else if (r == 6)return "sabado";
    else if (r == 7)return "domingo";
    
}

console.log(dia(11))