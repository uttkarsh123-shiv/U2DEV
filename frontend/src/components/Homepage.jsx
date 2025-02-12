import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); 
const Homepage = () => {
    useGSAP(()=> {
      gsap.from(".items li", {
        duration: 0.2,
        opacity: 0,
        delay:0.1,
        y: -50,
        stagger: 0.05,
      })

      gsap.from(".logo li", {
        duration: 4,
        opacity: 0,
      })
    })
  return (
    <div className="first">
    <div className="nav">
      <div className="logo">
        <li>Ⓒ by Uttkarsh</li>
      </div>
      <div className="items">
        <ul>
          <li><a>Work</a></li>
          <li><a>About</a></li>
          <li ><a>Contact</a></li>
          <li><a>CV</a></li>
        </ul>
      </div>
    </div>
    <div className="head">
      <div className="head-content">
        <p>Web dev</p>
      <h1>Designer </h1>
      <h1>&</h1>
      <h1>  Developer</h1> <br />
      </div>
    </div>

    <p className='head-start'>A passionate web developer specializing in crafting custom websites and applications. I merge elegant design with high-performance technology and SEO optimization to create seamless digital experiences</p>




  </div>
  )
}

export default Homepage
