export default function lostSignal(id) {
  const $div = document.querySelector(id);

  const isOnLine = () => {
    if (navigator.onLine) {
      $div.classList.add('online');
      $div.textContent = 'Connection recovered!';
      setTimeout(() => {
        $div.textContent = '';
        $div.classList.remove('online');
      }, 1000);
    } else {
      $div.classList.add('offline');
      $div.textContent = 'Connection lost!';
      setTimeout(() => {
        $div.textContent = '';
        $div.classList.remove('offline');
      }, 1000);
    }
  };

  window.addEventListener('offline', () => isOnLine());
  window.addEventListener('online', () => isOnLine());
}
