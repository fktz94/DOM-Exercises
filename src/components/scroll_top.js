export default function scrollTop(id, href) {
  const $button = document.querySelector(id);
  $button.setAttribute('href', href);

  function viewScrollY() {
    scrollY < 200
      ? $button.classList.add('hidden')
      : $button.classList.remove('hidden');
  }

  window.addEventListener('scroll', () => {
    viewScrollY();
  });
  viewScrollY();

  document.addEventListener('click', (e) => {
    if (e.target.matches(id)) {
      window.scrollTo({
        behaviour: 'smooth',
        top: 0,
      });
    }
  });
}
