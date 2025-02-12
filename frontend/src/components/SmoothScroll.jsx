import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Controls the smoothness during active scroll
      smooth: true,  // Enable smooth scrolling
      direction: 'vertical', // Enable vertical scrolling only
      smoothTouch: false, // Prevent momentum on touch devices
      gestureDirection: 'vertical', // Gesture-based vertical scroll
    });

    const raf = (time) => {
      lenis.raf(time); // Updates Lenis on each animation frame
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis when the component is unmounted
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
