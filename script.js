
const techSection = document.querySelector('.cv-tech');
if (techSection) {
  const headers = techSection.querySelectorAll('h4');
  headers.forEach(header => {
    header.style.cursor = 'pointer';
    const nextUl = header.nextElementSibling;
    if (nextUl && nextUl.tagName === 'UL') {
      nextUl.style.maxHeight = '0';
      nextUl.style.overflow = 'hidden';
      nextUl.style.transition = 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)';
      header.addEventListener('click', () => {
        const isOpen = nextUl.style.maxHeight !== '0px' && nextUl.style.maxHeight !== '0';
        if (isOpen) {
          nextUl.style.maxHeight = '0';
          header.classList.remove('open');
        } else {
          nextUl.style.maxHeight = nextUl.scrollHeight + 20 + 'px';
          header.classList.add('open');
        }
      });
    }
  });
}


const cards = document.querySelectorAll('.cv-job, .cv-tech');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.boxShadow = '0 6px 24px rgba(80, 80, 200, 0.13)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '';
  });
});
