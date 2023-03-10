import "./testimonials.scss"

export function Testimonials() {


  const data = [
    {
      id: "1",
      name: "Alex",
      title: "CEO of Des",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://cdn.tatlerasia.com/tatlerasia/i/2022/03/22162608-richest-korean-actors-and-actresses-in-2021-cropped_cover_1500x785.jpg",
      icon: "https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima rem repellat deserunt sit maiores ut accusantium libero doloremque, reprehenderit recusandae, autem voluptatum eius eaque quisquam officiis obcaecati provident tempore."'
    },
    {
      id: "2",
      name: "Sophia",
      title: "CEO of Sign",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://assets.vogue.in/photos/6126002a6b9d539ed2dfd1c2/3:2/w_854,h_569,c_limit/stylish-k-drama-characters.jpg",
      icon: "https://cdn-icons-png.flaticon.com/512/60/60580.png",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima rem repellat deserunt sit maiores ut accusantium libero doloremque, reprehenderit recusandae, autem voluptatum eius eaque quisquam officiis obcaecati provident tempore."'
    }, {
      id: "3",
      name: "John",
      title: "CEO of Ign",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur consequatur earum maiores doloremque dolore eum repudiandae similique debitis eius, dignissimos, velit totam veniam eos nulla ipsum provident ea nisi.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNa5k9i-36RCoicVDjHQryqcVME7DyB1w5w&usqp=CAU",
      icon: "https://cdn-icons-png.flaticon.com/512/49/49068.png",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima rem repellat deserunt sit maiores ut accusantium libero doloremque, reprehenderit recusandae, autem voluptatum eius eaque quisquam officiis obcaecati provident tempore."'
    },

  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>
        Testimonials
      </h1>
      <div className="container">
        {data.map((d) => (


          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/a.png" className="left"></img>
              <img className="user" src={d.img}></img>
              <img className="right" src={d.icon}></img>

            </div>
            <div className="center">
              {d.desc}

            </div>
            <div className="bottom">
              <h3>
                {d.name}
              </h3>
              <h4>
                {d.title}
              </h4>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

