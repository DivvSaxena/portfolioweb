let sectiontwocontainerEl = document.getElementById('section-two-container')
let worksectionEl = document.getElementById('work')


function scrollFunction(){
    sectiontwocontainerEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}

function scrollFunctionTwo(){
  worksectionEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
  });
}