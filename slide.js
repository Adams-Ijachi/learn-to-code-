const navSlide = () => { // javascript for slidein effect of navigation
  const burger = document.querySelector(".burger");
  const nav = document.querySelector('.new-navlink');
  const burgernav = document.querySelectorAll('.new-navlink li');
  burger.addEventListener('click',()=>{ //  click event  to bring out nav bar on mobile veiw
    nav.classList.toggle('nav-active');
  burgernav.forEach((link, index) => { // event to bring out list of links on the nav 
    if(link.style.animation){
      link.style.animation = ""
    }else {
          link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.7}s`
    }
  });

  burger.classList.toggle('toggle');
  })


}
navSlide();
