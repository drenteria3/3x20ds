function na()
{
 let a = new Set();
 var t = ""; 
 var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 var v = "AEIOU";
 for(j = 0; j < 10;j++)
 {  
    let long = Math.round(Math.random()*6);
    if (long < 2) long = 2;
 for (var i = 0; i < long; i++) 
  {
     t += c.charAt(Math.floor(Math.random()* c.length));
     t += v.charAt(Math.floor(Math.random()* v.length));
  } 
  a.add(t)
   t = "";
}

  return a;
}


console.log(na())
