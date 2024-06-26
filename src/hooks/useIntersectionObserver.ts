import { useCallback, useRef } from 'react';

const useIntersectionObserver = (callback: () => void) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 },
    ),
  );

  const observe = useCallback((element: Element) => {
    observer.current.observe(element);
  }, []);
  const unobserve = useCallback((element: Element) => {
    observer.current.unobserve(element);
  }, []);
  const disconnect = observer.current.disconnect;

  return { observe, unobserve, disconnect };
};

export default useIntersectionObserver;
