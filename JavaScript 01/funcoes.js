function soma(a,b){
    return a+b;
}

/* var resultado = soma(10,30);
console.log("resultado: "+resultado); */

function ehPar(numero){
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
}


function somarPares(a,b){
    if(ehPar(a)==true && ehPar(b)==true){
        console.log(soma(a,b));
    }else{
        console.log("os dois precisam ser pares");
    }
}

somarPares(10,30);
somarPares(10,33);
somarPares(11,30);

/* console.log(ehPar(250));
console.log(ehPar(251)); */
