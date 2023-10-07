function initCarousel() {
  
  const carouselInner = document.querySelector('.carousel__inner');
  const btnNext = document.querySelector('.carousel__arrow_right');
  const btnPrev = document.querySelector('.carousel__arrow_left');

  let click = 0;
  
  btnPrev.style.display = 'none';
  btnNext.onclick = function() {
    click = ++click;
    carouselInner.style.transform = `translateX(-${click * carouselInner.offsetWidth}px)`;
    console.log(click);
    switch (click){
      case 3: 
        btnNext.style.display = 'none';
      break;
      default:
        btnPrev.style.display = '';
        btnNext.style.display = '';
    }
    
  };

  btnPrev.onclick = function () {
    click = --click;
    carouselInner.style.transform = `translateX(-${click * carouselInner.offsetWidth}px)`;
    console.log(click);
    switch (click){
      case 0: 
        btnPrev.style.display = 'none';
      break;
      default:
        btnPrev.style.display = '';
        btnNext.style.display = '';
    }
  } 
}