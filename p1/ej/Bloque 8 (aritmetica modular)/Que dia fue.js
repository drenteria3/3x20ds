function dia(x){
    día = 0
    let r =  día - x%7;  
    if (r < 0 )r * 1; 
    if (r  < -7)r  + 7;
    if (r == -7)return "lunes";
    else if (r == -6)return "martes";
    else if (r == -5)return "miercoles";
    else if (r == -4)return "jueves";
    else if (r == -3)return "viernes";
    else if (r == -2)return "sabado";
    else if (r == -1)return "domingo";
    
    
}

console.log(dia(11))