export default function countdown(id, final, mensaje) {
  const fechaLimite = new Date(final).getTime();

  let countdownTempo = setInterval(() => {
    let fechaActual = new Date().getTime(),
      msRestantes = fechaLimite - fechaActual,
      diasRestantes = Math.floor(msRestantes / (1000 * 60 * 60 * 24)),
      horasRestantes = (
        '0' +
        Math.floor((msRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutosRestantes = (
        '0' + Math.floor((msRestantes % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      segundosRestantes = (
        '0' + Math.floor((msRestantes % (1000 * 60)) / 1000)
      ).slice(-2);

    document.getElementById(
      id,
    ).innerHTML = `<h3>${diasRestantes} días ${horasRestantes} horas ${minutosRestantes} minutos ${segundosRestantes} segundos</h3>`;

    if (msRestantes < 0) {
      clearInterval(countdownTempo);
      document.getElementById(id).innerHTML = `<h3>${mensaje}</h3>`;
    }
  }, 1000);
}
