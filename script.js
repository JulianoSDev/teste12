document.addEventListener("DOMContentLoaded", () => {
    let simButton = document.getElementById("sim");
    let naoButton = document.getElementById("nao");
    let gif = document.getElementById("gif");
    let paginaInicial = document.getElementById('pagina-inicial');
    let novaPagina = document.getElementById('nova-pagina');
    let size = 18;


    simButton.addEventListener("click", () => {
        
        paginaInicial.style.display = 'none';
        size = 15;
        novaPagina.classList.remove('hidden');

    
        gif.src = "https://media.giphy.com/media/25688FI5AUUVf04upZ/giphy.gif?cid=790b7611b5kx51oy5ar8gj074rzs3yhmm09azfqb42spaon2&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    });

    
    naoButton.addEventListener("click", () => {
        size += 20;
        simButton.style.fontSize = size + "px";
    
        if (size >= 100) {
            simButton.style.width = "100vw";
            simButton.style.height= "100vh";
            naoButton.style.display = "none";
        }
    });
});