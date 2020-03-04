function contar() {
    var res = document.getElementById("res")
    var inicio = document.getElementById("val_inicio")
    var final = document.getElementById("val_final")
    var passo = document.getElementById("val_passo")
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "[ERRO] Faltam dados!"
    }else {
        let inicio_number = Number(inicio.value)
        let final_number = Number(final.value)
        let passo_number = Number(passo.value)
        if (passo_number <= 0) {
            window.alert("Passo invalido! Considerando o passo igual a 1.")
            passo = 1
        }
        if (final_number >= inicio_number) {
            for (let a = inicio_number; a <= final_number; a += passo_number){
                res.innerHTML += `${a} \u{1F449}`
            }
        }
        else {
            for (let b = inicio_number; b >= final_number; b -= passo_number){
                res.innerHTML += `${b} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}