import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤 시 요소가 뷰포트에 들어오면 true를 반환하는 훅.
 * threshold: 얼마나 보여야 트리거할지 (0.15 = 15%)
 * once: true면 한 번 보이면 다시 숨기지 않음
 */
export function useReveal(threshold = 0.15, once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
}
