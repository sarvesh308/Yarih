
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (elementPosition < screenPosition) {
          if (element.classList.contains('animate-fade-up')) {
            (element as HTMLElement).style.animation = 'fade-in-up 0.7s ease-out forwards';
          } else if (element.classList.contains('animate-fade-left')) {
            (element as HTMLElement).style.animation = 'fade-in-left 0.7s ease-out forwards';
          } else if (element.classList.contains('animate-fade-right')) {
            (element as HTMLElement).style.animation = 'fade-in-right 0.7s ease-out forwards';
          } else {
            (element as HTMLElement).style.animation = 'fade-in 0.7s ease-out forwards';
          }
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check when component mounts
    setTimeout(animateOnScroll, 100);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return null;
};
