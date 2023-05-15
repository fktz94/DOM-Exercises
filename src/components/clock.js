export function createAlarmClockButtons(section) {
  const fragment = document.createDocumentFragment(),
    clockDiv = document.createElement('span'),
    $section = document.getElementById(section),
    clockBtnDiv = document.createElement('div');
  clockDiv.setAttribute('id', 'clock');
  clockBtnDiv.setAttribute('id', 'clock-btn-div');
  fragment.appendChild(clockDiv);
  for (let i = 0; i < 4; i++) {
    const clockButton = document.createElement('button');
    clockButton.classList.add('clock-btn');
    if (i === 0) {
      clockButton.textContent = 'Habilitar Reloj';
      clockButton.setAttribute('id', 'habilitar-reloj');
    } else if (i === 1) {
      clockButton.textContent = 'Deshabilitar Reloj';
      clockButton.setAttribute('id', 'deshabilitar-reloj');
    } else if (i === 2) {
      clockButton.textContent = 'Activar Alarma';
      clockButton.setAttribute('id', 'activar-alarma');
    } else {
      clockButton.textContent = 'Desactivar Alarma';
      clockButton.setAttribute('id', 'desactivar-alarma');
    }
    clockBtnDiv.appendChild(clockButton);
  }

  fragment.appendChild(clockBtnDiv);
  $section.appendChild(fragment);
}

export function clock(clock, btnPlay, btnStop) {
  let interval;
  const $clock = document.getElementById(clock);

  document.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
      $clock.classList.remove('clock-disabled');
      $clock.textContent = new Date().toLocaleTimeString();
      interval = setInterval(() => {
        $clock.textContent = new Date().toLocaleTimeString();
      }, 1000);
      e.target.disabled = true;
      if (document.querySelector(btnPlay).disabled) {
        document.querySelector(btnPlay).style.cursor = 'auto';
      }
    }

    if (e.target.matches(btnStop)) {
      document.querySelector(btnPlay).removeAttribute('disabled');
      if (!document.querySelector(btnPlay).disabled) {
        document.querySelector(btnPlay).style.cursor = 'pointer';
      }
      $clock.classList.add('clock-disabled');
      clearInterval(interval);
    }
  });
}
export function alarm(audio, btnPlay, btnStop) {
  const $audio = document.createElement('audio');
  $audio.src = audio;
  let alarmAudio;

  document.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
      alarmAudio = setTimeout(() => {
        $audio.play();
      }, 500);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmAudio);
      $audio.currentTime = 0;
      $audio.pause();
      document.querySelector(btnPlay).removeAttribute('disabled');
    }
  });
}
