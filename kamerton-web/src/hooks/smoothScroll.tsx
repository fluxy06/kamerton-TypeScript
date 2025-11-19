import { useCallback } from "react";

/**
 * Хук для плавного скролла к элементу с easing-анимацией
 */
export const useSmoothScroll = () => {
  /**
   * Скроллит к элементу по id
   * @param id - id блока
   * @param offset - смещение сверху
   * @param duration - продолжительность анимации в мс
   */
  const scrollTo = useCallback(
    (id: string, offset = 0, duration = 899) => {
      const element = document.getElementById(id);
      if (!element) return;

      const start = window.scrollY; 
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const target = elementTop - offset;

      const distance = target - start;
      const startTime = performance.now();

    
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
    []
  );

  return { scrollTo };
};
