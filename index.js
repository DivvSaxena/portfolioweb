let sectiontwocontainerEl = document.getElementById('section-two-container')



function scrollFunction(){
    sectiontwocontainerEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}