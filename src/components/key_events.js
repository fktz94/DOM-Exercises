let x = 0,
  y = 0;

export default function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball),
    $stage = document.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  switch (e.keyCode) {
    case 37:
      if (limitsStage.left < limitsBall.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsStage.top < limitsBall.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsStage.right > limitsBall.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsStage.bottom > limitsBall.bottom) {
        e.preventDefault();
        y++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
}
