// script.js
function calcular() {

    var selectValue = document.querySelector('#select').value; // Obtém o valor selecionado no select


    var cxopValue = parseFloat(document.querySelector('#cxop').value); // Obtém o valor digitado no input de operadores e converte para número
    var cxtempoValue = parseFloat(document.querySelector('#cxtempo').value); // Obtém o valor digitado no input de tempo e converte para número
    var tempo = 8.13
    var minDecimal = cxtempoValue /60 // MINUTOS em numero decimal
    var paradaDecimal = tempo - minDecimal
    //produção //
    //MQBDianteiro
    var mqbd = 105 // 1 operador 
    mqbd = mqbd * cxopValue;
    //MQBTraseiro
    var mqbt = 254 // 1 operador
    mqbt = mqbt * cxopValue;
    //F3 dianteiro
    f3 = 99.75 // 1 operador
    f3 *= cxopValue
  
        // Lógica para calcular as metas com base nos valores inseridos pelo usuário
    var metas = 0;
    
    if (selectValue === "mqbd") {
        metas = (paradaDecimal * mqbd ) / 8.13   ; // Exemplo de cálculo para mqbd
    } else if (selectValue === "mqbt") {
        metas = (paradaDecimal * mqbt) / 8.13; // Exemplo de cálculo para mqbt
    } else if (selectValue === "f3") {
        metas = (paradaDecimal * f3) / 8.13; // Exemplo de cálculo para f3
    } else if (selectValue === "smart") {
        metas = cxopValue * cxtempoValue * 0.5; // Exemplo de cálculo para smart
    } else if (selectValue === "x52") {
        metas = cxopValue * cxtempoValue * 0.4; // Exemplo de cálculo para x52
    }
    else {
        alert('selecione uma produção para calcular')
    }

    metas = metas.toFixed(1)
    

    // Exibe o resultado das metas no elemento com id 'res'
    document.getElementById('res').innerHTML = "<p>Metas: " + metas + "</p>";
}