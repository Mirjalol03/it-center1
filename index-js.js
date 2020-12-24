let mediaQueryList = window.matchMedia('(max-width: 600px)');

if(mediaQueryList.matches) {
    document.querySelector('#more-btn-2').innerHTML = '<i id="icon-in-nav" class="fas fa-angle-double-up"></i>';
    let iconsNav = document.querySelector('#icon-in-nav'); 
    // iconsNav.addEventListener(
    //     'click', function() {
    //     }
    // )
}

function menuToggle(){
    let toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
    const body = document.querySelector('body');
    body.classList.toggle('active');
    // const iconInNav = document.querySelector('#more-btn-2');
    let iconsNav = document.querySelector('#icon-in-nav'); 
    iconsNav.classList.toggle('active');
 }




 $(document).ready(function(){
  
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
       event.preventDefault();
  
       var hash = this.hash;
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });


function changeBg() {
      // header images 
  let headerImages = [
    'url(./imgs/rasm1.jpg)',
    'url(./imgs/rasm2.jpg)',
    'url(./imgs/rasm4.jpg)',
    'url(./imgs/rasm5.jpg)',
  ]

  const header = document.querySelector('header');
  const bg = headerImages[Math.floor(Math.random() * headerImages.length)];
  header.style.backgroundImage = bg;
}

setInterval(changeBg, 5000);