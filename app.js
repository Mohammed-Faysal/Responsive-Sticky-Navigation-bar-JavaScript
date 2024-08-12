var header = document.querySelector('header')

window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0)
    // header.classList.toggle("sticky", window.scrollY > 10)
})


function toggleMenu() {
    
    const body = document.body;
    const navbarMenu = document.getElementById('navbarMenu');
    // Toggle the navbar menu visibility
    navbarMenu.classList.toggle('open');

    // Check if the menu is open
    if (navbarMenu.classList.contains('open')) {
      // Disable scrolling
      body.classList.add('no-scroll');
    } else {
      // Enable scrolling
      body.classList.remove('no-scroll');
    }
    
}
  