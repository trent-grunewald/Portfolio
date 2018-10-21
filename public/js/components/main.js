  // NAV COLLAPSE
  function navToggle() {
    const navs = document.querySelectorAll('.nav-item')
    const collapsed = document.querySelectorAll('.nav-collapse')
  
        //Targets the nav-item css class and replaces it with nav-collapse;
    navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
        //targets the nav-collapse css class and replaces it with nav-item;
    collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));
  }
  
  window.onload =_=>{
  const butt = document.querySelector('.logo');
      //checks the window size on load  
  if(window.innerWidth <= 1000) {
      //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide and initiates the navToggle function.
    butt.addEventListener('click', navToggle)
    }
     //if the window is not 1000 px wide, it adds an event listener to the window resize.
  window.addEventListener("resize", () =>{
    const butt = document.querySelector('.logo');
      //checks the window width on resize.
  if(window.innerWidth <= 1000) {
      //adds "click" event listener to collapse menu at 1000px
    butt.addEventListener('click', navToggle)
      } else {
    butt.removeEventListener('click', navToggle)
      }
    })
  }

  function smoothScroll(target, duration) {
    let userTarget = document.querySelector(target);
    let targetPosition = userTarget.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime){
      if(startTime === null)startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
      
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t <1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t -2) -1) + b;
    }


    requestAnimationFrame(animation);
  }

  const about = document.querySelector('.about');
  about.addEventListener('click', function(){
    smoothScroll('#about',1000);
  })
  const projects = document.querySelector('.projects');
  projects.addEventListener('click', function(){
    smoothScroll('#projects',1000);
  })
  const contact = document.querySelector('.contact');
  contact.addEventListener('click', function(){
    smoothScroll('#contact', 1000);
  })



  const footerClick = document.getElementById('what');
  function alertFunc(){
  const footerBG = document.getElementById('bg');
    if(footerBG.classList.contains('.crabby-cat')){
      footerBG.classList.replace('.crabby-cat', 'hidecc')
    } else {
      footerBG.classList.replace('hidecc', 'crabby-cat');
    }
  }
  footerClick.addEventListener('click', alertFunc)
