export default function validateFormInputs() {
  const $form = document.querySelector('.validate-form'),
    $inputs = document.querySelectorAll('.validate-form > [required]');

  $inputs.forEach((input) => {
    const $span = document.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('validate-form-error', 'none');
    input.insertAdjacentElement('afterend', $span);
  });

  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.validate-form > [required]')) {
      const $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== '') {
        const regExp = new RegExp(pattern);
        return !regExp.exec($input.value)
          ? document.getElementById($input.name).classList.add('is-active')
          : document.getElementById($input.name).classList.remove('is-active');
      }

      if (!pattern) {
        return $input.value === ''
          ? document.getElementById($input.name).classList.add('is-active')
          : document.getElementById($input.name).classList.remove('is-active');
      }
    }
  });

  document.addEventListener('submit', (e) => {
    // e.preventDefault();
    const $loader = document.querySelector('.contact-form-loader'),
      $response = document.querySelector('.contact-form-response');

    $loader.classList.remove('none');

    setTimeout(() => {
      $loader.classList.add('none');
      $response.classList.remove('none');
      $form.reset();

      setTimeout(() => $response.classList.add('none'), 3000);
    }, 3000);
  });
}
