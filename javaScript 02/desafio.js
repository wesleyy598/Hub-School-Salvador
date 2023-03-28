function reverso (numero){
var resto = 0;

    while(numero >= 10){
        resto = numero%10;
        console.log(resto);
        numero = parseInt(numero/10);
    }
    console.log(numero);
}