const elemento = document.querySelector("#calcular");
const resultado = document.querySelectorAll(".resultado");


for (let i = 0; i < resultado.length; i++) {
        elemento.addEventListener("click", (evento) => {
        resultado[i].innerHTML = "Fui clicado"
    })
}
