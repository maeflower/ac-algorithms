//first you need to create a function
//then you create a functionName()that passes the str parameter.
//

function alphabet(str){
    var output = "";
    var arrayAlpha = str.split("");
     
     
    for(var i = arrayAlpha.length - 1; i >= 0; i--){;
      output += arrayAlpha[i];
      
     }                                                 
       return output;                                                 
   }
   
   var test = alphabet("a, b, c, d e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z");
   console.log(test);