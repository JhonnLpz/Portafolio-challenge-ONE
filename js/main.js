// loader
window.onload = () => {
    let contenedor = document.querySelector(".loader_container");

    contenedor.style.display = "none";
}
// menu Mobile

let menuMobile = document.querySelector(".menuMobile");
let menuList = document.querySelector(".menuLinks");
let menuOptions = document.querySelectorAll(".menuOptions");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    menuList.classList.toggle("active");
});

menuOptions.forEach(option => {
    option.addEventListener("click", () => {
        menuMobile.classList.remove("active");
        menuList.classList.remove("active");
    })
});
// modo oscuro/claro

let btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('light')) {
        localStorage.setItem('lightMode', 'true');
    } else {
        localStorage.setItem('lightMode', 'false');
    }

});

if (localStorage.getItem('lightMode') === 'true') {

    document.body.classList.add('light');
    btnSwitch.classList.add('active');
    document.body.classList.remove('dark');

} else {
    document.body.classList.remove('light');
    btnSwitch.classList.remove('active');
    document.body.classList.add('dark');
}

// validacion formulario

const form = document.querySelector('.contactoForm');

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
})