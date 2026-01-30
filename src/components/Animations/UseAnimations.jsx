
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      yIn = 0,
      yOut = 50,
      durationIn = 1.4,
      durationOut = 0.5,
      triggerStart = "bottom bottom", 
      triggerEnd = "bottom top"       
    } = options;

    gsap.fromTo(el,
      { opacity: 0, y: yOut },
      { opacity: 1, y: yIn, duration: durationIn, ease: "power3.out" }
    );


    ScrollTrigger.create({
      trigger: el,
      start: triggerStart,
      end: triggerEnd,
      scrub: true,
      onLeave: () => {
        gsap.to(el, {
          opacity: 0,
          y: -yOut,
          duration: durationOut,
          ease: "power1.in",
          immediateRender: false 
        });
      },
      onEnterBack: () => {
        gsap.to(el, {
          opacity: 1,
          y: yIn,
          duration: durationOut,
          ease: "power1.out",
          immediateRender: false
        });
      }
    });
  }, [ref, options]);
}