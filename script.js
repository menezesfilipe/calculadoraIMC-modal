var inputAltura = document.querySelector("#altura")
var inputPeso = document.querySelector("#peso")
var modal = document.querySelector("dialog")
var resultado = document.querySelector("#resultado")
var modal = document.querySelector("dialog")
var conteudo = document.querySelector("#conteudo")
var img = document.querySelector("#img-modal")


function calcular(){
    if(inputAltura.value == "" || inputPeso.value == ""){
        alert("Por favor, preencha os campos corretamente")
    }else{
        var altura = inputAltura.value
        var peso = inputPeso.value
        var imccalculado = Math.round(peso / (altura * altura)) 
        modal.showModal()
        resultado.innerHTML = "O seu IMC é de " + (imccalculado)
        if(imccalculado < 18.5){
            conteudo.innerHTML = "<strong>PERIGO!!!</strong> <br> Você está MUITO ABAIXO do seu peso ideal. Procure um nutricionista."
            img.innerHTML = "<img src='img/perigo2.png'>"
        }
        if(imccalculado >= 18.5 && imccalculado <= 24.9){
            conteudo.innerHTML = "MUITO BEM! <br> Você está no peso ideal. Continue assim."
            img.innerHTML = "<img src='img/marca.png'>"
        }
        if(imccalculado >= 25 || imccalculado >= 29.9){
            conteudo.innerHTML = "Você está um pouco acima do seu peso ideal. Se cuide."
            img.innerHTML = "<img src='img/perigo1.png'>"
        }
        if(imccalculado >= 30 || imccalculado >= 39.9){
            conteudo.innerHTML = "<strong>PERIGO!!!</strong> <br> Você está ACIMA do seu peso ideal. Procure um nutricionista."
            img.innerHTML = "<img src='img/perigo2.png'>"
        }
        if(imccalculado > 50){
            conteudo.innerHTML = "<strong>PERIGO!!!</strong> <br> Você está MUITO ACIMA do seu peso ideal. Procure um nutricionista."
            img.innerHTML = "<img src='img/perigo2.png'>"
        }
        
    }
    
}

function fecharmodal(){
    modal.close()
}