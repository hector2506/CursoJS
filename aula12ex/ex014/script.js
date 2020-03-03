function Carregar() {
    var mensagem = document.getElementById("msg")
    var image = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        image.src = "imagem_manha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18){
        image.src = "imagem_tarde.png"
        document.body.style.background = "#b9846f"
    } else {
        image.src = "imagem_noite.png"
        document.body.style.background = "#515154"
    }
}