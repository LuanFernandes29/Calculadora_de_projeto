function calcular() {
    const valorConta = document.querySelector("#valorConta").value;
    const qualidade = document.querySelector("#qualidade").value;
    if(valorConta == ""){
        alert("Por favor, preencha todos os campos");
    }
    else{
        let gorjeta = parseFloat(valorConta) * parseFloat(qualidade);
        let total = parseFloat(gorjeta) + parseFloat(valorConta);
        document.querySelector("#ValorGorjeta").value = `R$ ${gorjeta.toFixed(2)}`;
        document.querySelector("#ValorTotal").value = `R$ ${total.toFixed(2)}`;
    }
}
function reset() {
    document.querySelector("#ValorGorjeta").value = "";
    document.querySelector("#valorConta").value = "";
    document.querySelector("#ValorTotal").value = "";

}
