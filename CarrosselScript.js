(() => {
  function iniciarCarrossel() {
    const slides = document.querySelector('.carousel .slides');
    const images = document.querySelectorAll('.carousel img');

    if (!slides || images.length === 0) return;

    let index = 0;
    const total = images.length;

    function showSlide(i) {
      index = (i + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    showSlide(0);

    setInterval(() => {
      showSlide(index + 1);
    }, 8000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarCarrossel);
  } else {
    iniciarCarrossel();
  }
})();