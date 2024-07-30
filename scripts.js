AOS.init();
document.addEventListener('DOMContentLoaded', function() {
 // Smooth scrolling for internal links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
   e.preventDefault();
   document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
   });
  });
 });

 // Hide loading screen once page is fully loaded
 window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading');
  if (loadingScreen) {
   loadingScreen.style.opacity = 0;
   setTimeout(() => {
    loadingScreen.style.display = 'none';
   }, 500); 
  }
 });
});
                                                   
