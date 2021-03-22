const clientes = [
    {
        nome: "bruno",
        codigo: "123",
        senha: "123",
        saldo: 100
    }, {
        nome: "joaozinho",
        codigo: "456",
        senha: "456",
        saldo: 10
    },
]

var codigo = prompt("Digite o seu código!")
var senha = prompt("Digite sua senha")

function procura_cliente(cliente)
{
    return cliente.codigo == codigo && cliente.senha == senha
}

var cliente_localizado = (clientes.find(procura_cliente))

if (cliente_localizado == null)
{
    console.log("cliente não localizado")
}
else{
    var operacao = Number(window.prompt("Qual operacao você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))

    //para operaçao 1 (Saque) : daqui pra baixo
    if (operacao == 1){
        var valor_da_operacao = Number(window.prompt("Digite o valor da operacao. OBS: valor positivo"))
        
        if (valor_da_operacao > cliente_localizado.saldo)
        {
            alert("saldo insuficiente")
        }
        else{
            cliente_localizado.saldo -= valor_da_operacao;
            alert(`Dinheiro liberado, seu saldo agora é de: R$${cliente_localizado.saldo}`)
        }
    }

    //para operação 2 (Deposito): daqui pra baixo
    else if (operacao == 2){
        var conta_destino_codigo = Number(window.prompt("Qual sera a conta destino?"))
        var operacao_deposito = Math.abs(Number(window.prompt("Qual sera o valor do deposito")))

        var conta_localizada = clientes.find(cliente => cliente.codigo == conta_destino_codigo)

        if(conta_localizada) {
            novo_saldo_deposito = (conta_localizada.saldo + operacao_deposito)
            conta_localizada.saldo += operacao_deposito
            alert(`Saldo atualizado: R$${conta_localizada.saldo}`);
        }
        else {
            alert("Não foi possivel encontrar essa conta")
        }
    }

    //operacao 3 (Transferencia): daqui pra baixo
    else if (operacao == 3) {
        var conta_transferencia = Number(window.prompt("Qual sera a conta destino?"));
        var operacao_transferencia = Number(window.prompt("Qual sera o valor da transferencia"));

        var conta_localizada = clientes.find(cliente => cliente.codigo == conta_transferencia)

        if (operacao_transferencia > cliente_localizado.saldo) {
            alert("Saldo insuficiente")
        }
        else if (conta_localizada) {
            conta_localizada.saldo += operacao_transferencia;
            cliente_localizado.saldo -= operacao_transferencia;

            alert(`Transferência de R$${operacao_transferencia} realizada. Novo saldo: ${cliente_localizado.saldo}.`);
        } else {
            alert(`Não foi possivel encontrar a conta com o código ${conta_transferencia}`);
        }
    }

    else {
        console.log("Não foi possivel encontrar essa conta");
    }   
}
console.log(clientes)
//outra operação.
var novamente = window.prompt("Deseja fazer outra operação? se sim tecle '1', se não tecle '2'")

if(novamente == 1){
  alert("não sei como fazer isso")

}
else if(novamente == 2){
  alert("Tenha um bom dia!")
}
else
  alert("Dados incorretos.")