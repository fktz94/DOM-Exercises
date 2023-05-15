export default async function detectWebcam(id) {
  const $video = document.getElementById(id);

  if (confirm('desea usar la webcam?')) {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    try {
      $video.srcObject = stream;
      $video.play();
    } catch (error) {
      console.log(error);
    }
  }
}
