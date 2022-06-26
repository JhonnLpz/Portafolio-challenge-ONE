window.onload = () => {
    let contenedor = document.querySelector(".loader_container");

    contenedor.style.display = "none";
}

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
