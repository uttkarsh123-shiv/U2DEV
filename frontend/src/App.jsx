import "./App.css";
import Homepage from "./components/Homepage";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {
  const third = useRef();
  const cursor = useRef(null);
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to(".main", {
      backgroundColor: "#111111",
      scrollTrigger: {
        trigger: third.current,
        start: "52.5% 80%",
        end: "53% 80%",
        scrub: 1,
      }
    });
  }, []);
  useEffect(() => {
    const moveCursor = (e) => {
      cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY})`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

useEffect(()=>{
  window.addEventListener("mousemove",(e)=>{
    gsap.to(cursor.current,{
      x:e.clientX,
      y:e.clientY,
     duration:0.5
    })
  }
)
})

  return (
    <>
    <div className="noise"></div>
          <div
        className="cursor"
        ref={cursor}
        style={{
          pointerEvents:"none",
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%,-50%)",
          width: "1vw",
          height: "1vw",
          borderRadius: "50%",
          background: "pink",
          zIndex: 100,
          mixBlendMode:"difference",
          transition:"all cubic-bezier(0.19, 1, 0.22, 1) 0.5s"
        }}
      ></div>
    <div className="main">
      <Homepage />
      <Second />
      <Third ref={third} />
      <Fourth />
      <Fifth />
      {/* <p style={{textAlign:"center", position:"absolute",top:"99%", zIndex:"10"}}>Made with love</p> */}
    </div>
    </>
  );
}

export default App;
