export default function imgSlider() {
  const $prev = document.querySelector('.slider-btns > .prev'),
    $next = document.querySelector('.slider-btns > .next'),
    $slides = document.querySelectorAll('.slider-slide');

  let i = 0;

  document.addEventListener('click', (e) => {
    if (e.target === $prev) {
      e.preventDefault();
      $slides[i].classList.remove('active');
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add('active');
    }
    if (e.target === $next) {
      e.preventDefault();
      $slides[i].classList.remove('active');
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add('active');
    }
  });
}
