const lista = document.querySelector("[data-lista]");
const botao = document.querySelectorAll("[data-show]");

botao.forEach(elemento => {
    elemento.addEventListener("click", () => {
        if(elemento.dataset.show === "yes") {
            lista.style.display = "block";
        }else {
            lista.style.display = "none";
        }
    })
})
