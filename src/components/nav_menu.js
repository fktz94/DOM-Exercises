export function createNavMenu(sections, nav) {
  const fragment = document.createDocumentFragment(),
    $nav = document.querySelector(nav),
    $sections = document.querySelectorAll(sections);

  $sections.forEach(({ id, firstElementChild: { textContent } }) => {
    // const link = document.createElement('a');
    // link.classList.add('link');
    // link.setAttribute('href', `#${id}`);
    // link.setAttribute('data-scroll-spy', true);
    // link.textContent = textContent;
    // fragment.appendChild(link);
    $nav.innerHTML += `<a class="link" href="#${id}" data-scroll-spy>${textContent}</a>`;
  });
  $nav.appendChild(fragment);
}

export function hamburgerMenuFunction(hamburgerButton, panel, menuLink) {
  document.addEventListener('click', (e) => {
    if (
      e.target.matches(hamburgerButton) ||
      e.target.matches(`${hamburgerButton} *`)
    ) {
      document.querySelector(hamburgerButton).classList.toggle('is-active');
      document.querySelector(panel).classList.toggle('panel-visible');
    }

    if (e.target.matches(menuLink)) {
      document.querySelector(hamburgerButton).classList.remove('is-active');
      document.querySelector(panel).classList.remove('panel-visible');
    }
  });
}
