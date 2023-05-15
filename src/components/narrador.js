export default function narrador() {
  const $select = document.getElementById('voices'),
    $textArea = document.querySelector('#voice-form > textarea'),
    $btn = document.querySelector('#voice-form > button'),
    synth = window.speechSynthesis,
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  document.addEventListener('DOMContentLoaded', () => {
    window.speechSynthesis.addEventListener('voiceschanged', (e) => {
      voices = synth.getVoices();
      voices.forEach((voice) => {
        const $option = document.createElement('option');
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $select.appendChild($option);
      });
    });
  });

  document.addEventListener('change', (e) => {
    if (e.target === $select) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value,
      );
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === $btn) {
      speechMessage.text = $textArea.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}
