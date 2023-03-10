import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {


  const textRef = useRef();
  useEffect(() => {
    init(textRef.current,
      {
        showCursor: false,
        backDelay: 1500,
        backSpeed: 60,
        showCursor: true,
        strings:
          ['  Front-End Developer', 'Designer', 'Content Writer'],
      });

  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/p.png" alt="profilepic"></img>
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi there, I am
          </h2>
          <h1>
            Anika Tasnim
          </h1>
          <h3>CSE Graduate
            <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down arrow"></img>
          </a>
        </div>

      </div>
    </div>
  )
}
