//alert("Prueba para Saber que esta funcionando JavaScript") // 

document.addEventListener("DOMContentLoaded", function() {

    // Metodo Largo
    let nav = document.querySelector("nav"); 
    let link = document.createElement("a")
    link.innerText = "Google1"
    link.href = "https://www.google.com"
    nav.appendChild(link)

    //Metodo Corto
    nav.innerHTML += `<a href="https://www.google.com" target="_blank">Google2</a>`

})
