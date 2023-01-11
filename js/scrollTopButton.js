let boton_scroll = document.querySelector('.boton_scroll');

document.addEventListener("scroll", e =>{
    
    if (window.pageYOffset > 1400) {
        boton_scroll.classList.remove('hidden');
    } else {
        boton_scroll.classList.add('hidden');
    }
})

function Top() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
}

