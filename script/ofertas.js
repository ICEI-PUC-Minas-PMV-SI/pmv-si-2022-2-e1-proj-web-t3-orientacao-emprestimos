function calcular1() {
    var tn1 = window.document.getElementById('txtn1')
    var tot = window.document.getElementById('tot1')
    var n1 = Number(tn1.value)
    select = document.getElementById("opt1");
    var juros = n1 * 0.1730 * select.options[select.selectedIndex].value;
    total = juros + n1
    parcelas = total / Number(select.options[select.selectedIndex].text)
    tot.innerHTML = `R$${total.toFixed(2)}`;
}
function calcular2() {
    var tn2 = window.document.getElementById('txtn2')
    var tot = window.document.getElementById('tot2')
    var n2 = Number(tn2.value)
    select = document.getElementById("opt2");
    var juros = n2 * 0.1848 * select.options[select.selectedIndex].value;
    total = juros + n2
    parcelas = total / Number(select.options[select.selectedIndex].text)
    tot.innerHTML = `R$${total.toFixed(2)}`;
}
function calcular3() {
    var tn3 = window.document.getElementById('txtn3')
    var tot = window.document.getElementById('tot3')
    var n3 = Number(tn3.value)
    select = document.getElementById("opt3");
    var juros = n3 * 0.1464 * select.options[select.selectedIndex].value;
    total = juros + n3
    parcelas = total / Number(select.options[select.selectedIndex].text)
    tot.innerHTML = `R$${total.toFixed(2)}`;
}

enviarbtn = window.document.getElementById('enviar')
txtavalia = window.document.getElementById('exp')
opcoes = window.document.getElementById('opbancos')

enviarbtn.addEventListener('click', function () {
    if (txtavalia.value && opcoes.value) {
        alert('Sua avaliação foi enviada com sucesso!');
    }
});