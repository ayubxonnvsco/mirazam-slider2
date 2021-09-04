 const panels = document.querySelectorAll('.container__panel');
 
 panels.forEach((panel) => {
     panel.addEventListener('click', () => {
         activeClasses();
         panel.classList.add('active');
     })
 });
 
 function activeClasses() {
     
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    
 }