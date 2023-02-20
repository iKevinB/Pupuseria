function hamburger(){
    let nav = document.querySelector(".navigation");
    let ham = document.querySelector(".hamburger");
    nav.classList.toggle("is-active");
    ham.classList.toggle("is-active");
}
document.addEventListener("click", e => {

    if (e.target.matches('.list-item')){
        document.querySelector('.navigation').classList.remove('is-active');
        document.querySelector('.hamburger').classList.remove('is-active');
    }  
})

