export const useScrollToTop = () => {
  const scrollToTop = () => {
    const duration = 900;
    const start = window.scrollY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const amount = easeInOutCubic(progress);
      const position = start * (1 - amount);

      window.scrollTo(0, position);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return scrollToTop;
};
