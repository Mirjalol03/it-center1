function menuToggle(){
    let toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
    const body = document.querySelector('body');
    body.classList.toggle('active');
 }