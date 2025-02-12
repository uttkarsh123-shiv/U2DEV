import { useState } from "react";
const Text = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <div className="about-me">
        <div className="image"></div>
        <div className="content">
          <div className="left">
            <p style={{ color: "white", position: "relative", top: "-5% " }}>
              A CREATIVE
            </p>
            <p style={{ position: "relative", top: "-5%" }}>
              COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL
            </p>
          </div>
          <div className="right">
            <div className="singleLine">
              <p>
                I&apos;m a passionate Computer Science and Engineering student
                at Mait College, with a strong interest in designing and
                development. enjoy transforming ideas into functional, user-
                friendly solutions and continuously strive to enhance my.
              </p>
            </div>
          </div>
        </div>
        <button
          className="resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1G8XmAmreJhqfdVNBblSePHZc3DOC2KFM/view?usp=drive_link",
              "_blank"
            )
          }
        >
          <p> View my Resume</p>
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={hovered ? "hovered" : ""} // Add a class when hovered
          ></span>
        </button>
      </div>
      =
    </>
  );
};

export default Text;
