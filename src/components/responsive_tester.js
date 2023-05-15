export default function responsiveTester(id) {
  const $form = document.getElementById(id);
  let tester;

  document.addEventListener('submit', (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        `${$form.url.value}`,
        'tester',
        `innerWidth=${$form.width.value},innerHeight=${$form.heigth.value}`,
      );
      console.log(tester);
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === $form.close) tester.close();
  });
}
