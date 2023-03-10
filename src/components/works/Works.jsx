import { Translate } from "@material-ui/icons";
import { useState } from "react"
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "data:image/png;base64,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",
      title: "Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/08/Logo_Design_Process_jpg_4EOOtXuw.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces"
    },
    {
      id: "2",
      icon: "https://cdn1.vectorstock.com/i/1000x1000/87/70/webpage-app-icon-with-long-shadow-vector-4128770.jpg",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg"
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Mobile",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://www.rambeeinc.com/wp-content/uploads/2021/07/mobile-app-development-rambee.png"
    },

  ];


  const handleClick = (way) => {
    way === "left" ?
      setCurrentSlide(currentSlide > 0 ?
        currentSlide - 1 : 2) :
      setCurrentSlide
        (currentSlide < data.length - 1 ?
          currentSlide + 1 : 0);

  }
  return (

    <div className="works" id="works">

      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d => (


          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src=
                      {d.icon}></img>
                  </div>
                  <h2>
                    {d.title}

                  </h2>
                  <p>

                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                  <img src={d.img}></img>
              </div>
            </div>

          </div>))}
      </div>
      <img src="assets/arrow.png " className="arrow left" onClick={() => handleClick("left")} ></img>
      <img src="assets/arrow.png " className="arrow right" onClick={() => handleClick("right")}></img>
    </div>

  )
}
