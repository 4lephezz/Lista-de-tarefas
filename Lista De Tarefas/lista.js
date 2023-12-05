var input = document.getElementById("input");
var listaDeTarefas = document.getElementById("listaDeTarefas");

document.addEventListener ("click", function(event){
var alvo = event.target;
    if (alvo.nodeName == "LI") {
alvo.remove();
    }

})


document.addEventListener ("keypress", function(event){
    if (event.code == "Enter"){
add();
    }
})



function add() {
    var itemDigitado = input.value;
    var li = document.createElement("li");
    li.innerText = itemDigitado;
    listaDeTarefas.appendChild(li);
    input.value = "";
    input.focus();
}

 function teste(){
 console.log("testando")


 }