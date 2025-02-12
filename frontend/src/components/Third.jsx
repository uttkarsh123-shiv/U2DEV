import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  const skills = [
    { 
      name: "Web dev", 
      about: "Creating functional and responsive websites with modern UI/UX principles and scalable architecture." 
    },
    { 
      name: "Core web vitals",
      about: "Optimizing performance, accessibility, and SEO to enhance user experience and improve search rankings."
    },
    { 
      name: "DBMS", 
      about: "Designing and managing structured databases with efficient indexing, normalization, and secure data handling." 
    },
    { 
      name: "Web security",
      about: "Implementing secure coding practices, protection measures, and encryption to prevent cyber threats and attacks."
    },
    { 
      name: "Testing",
      about: "Ensuring software quality through various testing methodologies, including unit, integration, and automated testing." 
    },
    { 
      name: "Git",
      about: "Version control and collaboration using Git, managing repositories, branching strategies, and efficient code tracking."
    }
  ];
  

  const hoverBoxRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(hoverBoxRefs.current[index], {
      height: "100%",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(hoverBoxRefs.current[index], {
      height: "0%",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div className="experience">
      <div className="heading2">
        <p>Core Competencies</p>
      </div>

      <div className="content">
        <div className="right">
          {skills.map((item, index) => (
            <div
              key={index}
              className="right-elem"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div 
                className="hover-box" 
                ref={(el) => (hoverBoxRefs.current[index] = el)}
              ></div>
              <p>{item.name}</p>
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
