export default function smartVideo() {
  const $videos = document.querySelectorAll('video[data-smart-video]');

  const cb = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();

      document.addEventListener('visibilitychange', (e) =>
        document.visibilityState === 'visible'
          ? entry.target.play()
          : entry.target.pause(),
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.9 });

  $videos.forEach((el) => observer.observe(el));
}
