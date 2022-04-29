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


// GALLERY SLIDER

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 5000);