// loader
window.onload = () => {
    let container = document.querySelector(".loader_container");

    container.style.display = "none";
}

// boton de ir hacia arriba

let btnUp = document.querySelector("#botonUp");

window.onscroll = () => {

    let scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        btnUp.style.transform = "scale(1)"
    } else {
        btnUp.style.transform = "scale(0)"
    }
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
const inputs = document.querySelectorAll("#formulario input");
const formButton = document.getElementsByClassName("button");

const expresiones = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    subject: /^[A-Za-z0-9\s]+$/g, // Letras y espacios, pueden llevar acentos.
}

const validateForm = (event) => {
    switch (event.target.name) {
        case 'nombre':
        console.log("nombree");
        break;
        case 'email':
            console.log("emaillll");

        break;
        case 'asunto':
            console.log("asuntoo");

        break;

        default:
            break;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

inputs.forEach((input) => {
    input.addEventListener("keyup", validateForm);
    input.addEventListener("blur", validateForm);
})