const observer = new IntersectionObserver((entries) => {
    for (let i=0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('show');
        } else {
        entries[i].target.classList.remove('show');
        }
        }
    }) ;
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  

    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.menu a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();

              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
  });

  // const theme = document.getElementById('.theme');
  // theme.addEventListener('click', (e) => {
  //   e.preventDefault();
    
  // });
//   const themeButton = document.getElementById('theme');

// themeButton.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     // Toggle class on body
//     document.body.classList.toggle('light-theme');
    
//     // Toggle class on sections
//     const elements = document.querySelectorAll(
//       '.section1, .section2, .section3, .section4, .section5, .section6, .section7, .section8, .section9, .section10, ' +
//       '.profile, .info, .lang, .extra-skill, .skill, .download, .social, .name, .image, .inform, .languages, .skills, .lang-info,   .skill-info,.middle-page'
//   );
//     elements.forEach(element => {
//         element.classList.toggle('light-theme');
//     });
// });
    
