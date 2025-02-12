import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);
const Third = () => {

  useGSAP(()=>{
    gsap.from(".info1", {
      duration: 1,
      x:-50,
      scrollTrigger: {
        trigger: ".info",
        start: "-10% 15%",
        end:"60% 25%",
        scrub:true,
      }
    })
    gsap.from(".cursive", {
      duration: 1,
      x:-20,
      scrollTrigger: {
        trigger: ".info",
        start: "top bottom",
        scrub:true,
      }
    })
    gsap.from(".info2", {
      duration: 1,
      x:40,
      scrollTrigger: {
        trigger: ".info",
        start: "top 60%",
        scrub:true,
      }
    })
  })
  
  return (
    <div className="third">
      <div className="info">
        <div className='info1'>Let&apos;s Start</div>
        <div className="cursive">something great</div>
         <div className='info2'>together</div>
      </div>

    </div>
  );
};

export default Third;
