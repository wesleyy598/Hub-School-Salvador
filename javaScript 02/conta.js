class Conta{

    //private, public, protected
    cliente;
    _saldo=0;

    setCliente(nome){
        this.cliente = nome;
    }

    depositar(valor){
        if(valor>0){
            this.saldo=this._saldo=valor;
            console.log("Novo saldo: "+this._saldo);
        }else{
            console.log("Valores precism ser positivos");
        }
    }
}
let contaPedro = new Conta();

contaPedro.depositar(1000);