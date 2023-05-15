export function createCards(id) {
  const $div = document.querySelector(id);
  for (let i = 0; i < 8; i++) {
    const $card = document.createElement('figure'),
      $img = document.createElement('img'),
      $figcaption = document.createElement('figcaption'),
      url = 'https://placeimg.com/120/120/';
    $card.classList.add('card');
    if (i === 0) {
      $img.setAttribute('src', `${url}people`);
      $img.setAttribute('alt', 'People');
      $figcaption.textContent = 'People';
    } else if (i === 1) {
      $img.setAttribute('src', `${url}animals`);
      $img.setAttribute('alt', 'Animals');
      $figcaption.textContent = 'Animals';
    } else if (i === 2) {
      $img.setAttribute('src', `${url}architecture`);
      $img.setAttribute('alt', 'Architecture');
      $figcaption.textContent = 'Architecture';
    } else if (i === 3) {
      $img.setAttribute('src', `${url}nature`);
      $img.setAttribute('alt', 'Nature');
      $figcaption.textContent = 'Nature';
    } else if (i === 4) {
      $img.setAttribute('src', `${url}people`);
      $img.setAttribute('alt', 'People');
      $figcaption.textContent = 'People';
    } else if (i === 5) {
      $img.setAttribute('src', `${url}tech`);
      $img.setAttribute('alt', 'Tech');
      $figcaption.textContent = 'Tech';
    } else if (i === 6) {
      $img.setAttribute('src', `${url}animals`);
      $img.setAttribute('alt', 'Animals');
      $figcaption.textContent = 'Animals';
    } else if (i === 7) {
      $img.setAttribute('src', `${url}architecture`);
      $img.setAttribute('alt', 'Architecture');
      $figcaption.textContent = 'Architecture';
    }
    $card.appendChild($img);
    $card.appendChild($figcaption);
    $div.appendChild($card);
  }
}

export function filtroDeBusqueda(id, cards) {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') e.target.value = '';

    if (e.target.matches(`#${id}`)) {
      document
        .querySelectorAll(cards)
        .forEach((card) =>
          card.textContent.toLowerCase().includes(e.target.value)
            ? card.classList.remove('display-none')
            : card.classList.add('display-none'),
        );
    }
  });
}
