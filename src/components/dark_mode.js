export default function darkLightMode(btn, classDark, moon, sun) {
  const $selectors = document.querySelectorAll('[data-dark]');
  const $mode = document.getElementById('dark-light-img');
  let image;

  const darkMode = () => {
    document.querySelector('.stage').classList.add('dark-mode-stage');
    $selectors.forEach((el) => el.classList.add(classDark));
    image = sun;
    $mode.setAttribute('src', image);
  };

  const lightMode = () => {
    document.querySelector('.stage').classList.remove('dark-mode-stage');
    $selectors.forEach((el) => el.classList.remove(classDark));
    image = moon;
    $mode.setAttribute('src', image);
  };

  document.addEventListener('click', (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      image === moon ? darkMode() : lightMode();
      localStorage.setItem('darkMode', JSON.stringify(image));
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    image = JSON.parse(localStorage.getItem('darkMode')) || moon;
    image === sun ? darkMode() : lightMode();
  });
}
