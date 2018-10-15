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