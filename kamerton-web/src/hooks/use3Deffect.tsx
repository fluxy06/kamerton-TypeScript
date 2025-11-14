import { useRef, useEffect } from "react";

type RefArray = React.MutableRefObject<(HTMLDivElement | null)[]>;

export const use3dHover = (classNames: string[]): RefArray => {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handlers: {
      move: (e: MouseEvent) => void;
      leave: () => void;
      el: HTMLDivElement;
    }[] = [];

    classNames.forEach((cls, idx) => {
      const block = blockRefs.current[idx];
      if (!block) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        block.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      };

      const handleMouseLeave = () => {
        block.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      };

      block.addEventListener('mousemove', handleMouseMove);
      block.addEventListener('mouseleave', handleMouseLeave);

      handlers.push({ move: handleMouseMove, leave: handleMouseLeave, el: block });
    });

    // Возвращаем **одну функцию очистки** для useEffect
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [classNames]);

  return blockRefs;
};
