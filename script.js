const menuIcon = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector("#navbar-menu");

function display(){
    const visiblity = navbarMenu.getAttribute('data-visible');
    if(visiblity === 'false'){
        navbarMenu.setAttribute('data-visible','true');
    } else{
        navbarMenu.setAttribute('data-visible','false');
    }

}

menuIcon.addEventListener('click', display);
