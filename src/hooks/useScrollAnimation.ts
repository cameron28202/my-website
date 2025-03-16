import { useEffect, RefObject } from 'react';

interface ScrollAnimationOptions {
  rootMargin?: string;
  threshold?: number;
  delay?: number;
}

const useScrollAnimation = <T extends HTMLElement>(
  refs: RefObject<T | null>[],
  {
    rootMargin = '0px 0px -100px 0px',
    threshold = 0.15,
    delay = 100
  }: ScrollAnimationOptions = {}
) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
          // Add a small delay for a more natural feel
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        } 
        // When element leaves viewport
        else {
          // Remove the visible class when element is out of view
          entry.target.classList.remove('visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all refs that exist
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, [refs, rootMargin, threshold, delay]);
};

export default useScrollAnimation; 