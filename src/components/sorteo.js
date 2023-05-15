export default function sortear(id, btn) {
  const $btn = document.getElementById(btn);

  const getWinner = (id) => {
    const $lista = document.querySelectorAll(id),
      random = Math.floor(Math.random() * $lista.length),
      winner = $lista[random].textContent;
    return `El ganador es: ${winner}`;
  };

  document.addEventListener('click', (e) => {
    if (e.target === $btn) {
      let result = getWinner(id);
      alert(result);
    }
  });
}
