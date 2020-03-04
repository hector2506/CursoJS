function gerar() {
    var res = document.getElementById("res")
    if (document.getElementById("numero").value.length == 0) {
        window.alert("Por favor, digite um número!")
    }
    else {
        var num = Number(document.getElementById("numero").value)
        res.innerHTML = ``
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text += `${num} * ${i} = ${num * i}`
            res.appendChild(item)
        }
    }
}