import { useState } from "react";
import "./contact.scss"

export function Contact() {

  const [message, setMesaage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMesaage(true)

  }
  return (
    <div className="contact" id="contact">

      <div className="left">
        <img src="https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2023/03/The-Heavenly-Idol-episode-7-and-8.jpg?fit=1280%2C720&ssl=1"></img>
      </div>
      <div className="right">
        <h2>
          Contact
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email">
          </input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply soon</span>}

        </form>
      </div>

    </div>
  )
}

