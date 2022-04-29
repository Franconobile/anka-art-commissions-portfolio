const iconMenu = document.querySelector('#icono-menu');

menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const actualRute = e.target.getAttribute('src');
    if(actualRute == document.getElementById('#icono-menu')){
        e.target.setAttribute('src', document.getElementById('#icono-menu'))
    }else {
        e.target.setAttribute('src', document.getElementById('#icono-menu'))    
    }
})


