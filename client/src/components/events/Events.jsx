import { Link } from "react-router-dom"

export default function Events(){
    return (

        <section id="content">
  <div className="container_12 top-4">
    <div className="grid_4">
      <h2 className="p5">Latest News</h2>
      <p><Link to={`/events`} className="link">7.05.2012</Link></p>
      <div className="wrap border-bot-1"> <img src="./src/images/page1-img6.jpg" alt="" className="img-indent"/></div>
      <p className="clr-1">Consetetur sadipscing elitr</p>
      <p className="p3">Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed <br/>
        diam voluptua.</p>
      <p><Link to={`/events`} className="link">2.05.2012</Link></p>
      <div className="wrap border-bot-1"> <img src="./src/images/page1-img3.jpg" alt="" className="img-indent"/></div>
      <p className="clr-1">At vero eos et accusam et justo</p>
      <p className="p3">Duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est <br/>
        lorem ipsum. dolor sit amet orem ipsum<br/>
        dolor.</p>
      <p><Link to={`/events`} className="link">29.04.2012</Link></p>
      <div className="wrap border-bot-1"> <img src="./src/images/page1-img1.jpg" alt="" className="img-indent"/></div>
      <p className="clr-1">Sit amet, consetetur sadips</p>
      <p className="p3">Cing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      <p><Link to={`/events`} className="link">12.04.2012</Link></p>
      <div className="wrap border-bot-1"> <img src="./src/images/page1-img6.jpg" alt="" className="img-indent"/></div>
      <p className="clr-1">At vero eos et accusam et justo duo</p>
      <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <Link to={`/events`} className="button top-3">Read More</Link> </div>
    <div className="grid_8">
      <div className="left-1">
        <h2 className="p5">Well Being of Your Horse</h2>
        <div className="wrap border-bot-1"> <img src="./src/images/page2-img3.jpg" alt="" className="img-indent"/></div>
        <div className="wrap"> <img src="images/page4-img1.jpg" alt="" className="img-indent-2"/>
          <div className="extra-wrap">
            <p className="p3"><span className="clr-1">Consetetur sadipscing elitr, sed diam nonumy eirmod</span> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>
        </div>
        <h2 className="p5 top-5">Facilities at Equestrian Farm</h2>
        <div className="wrap border-bot-1"> <img src="./src/images/page2-img2.jpg" alt="" className="img-indent"/></div>
        <div className="lists">
          <ul className="list-2">
            <li><Link to={`/events`}>Nam liber tempor cum soluta</Link></li>
            <li><Link to={`/events`}>Nobis eleifend option congue nihil</Link></li>
            <li><Link to={`/events`}>Imperdiet doming id quod mazim placerat</Link></li>
            <li><Link to={`/events`}>Facer possim assum. Lorem ipsum dolor</Link></li>
            <li><Link to={`/events`}>Sit amet, consectetuer adipiscing</Link></li>
          </ul>
          <ul className="list-2 last">
            <li><Link to={`/events`}>Elit sed diam nonummy nibh euismod</Link></li>
            <li><Link to={`/events`}>Tincidunt ut laoreet dolore magna aliquam</Link></li>
            <li><Link to={`/events`}>Ut wisi enim ad minim veniam quis</Link></li>
            <li><Link to={`/events`}>Nostrud exerci tation ullamcorper suscipit</Link></li>
            <li><Link to={`/events`}>Lobortis nisl ut aliquip ex ea</Link></li>
          </ul>
        </div>
        <h2 className="p5 top-6">Upcoming Events</h2>
        <div className="wrap p2"> <img src="images/page4-img2.jpg" alt="" className="img-indent-2"/>
        <div className="wrap border-bot-1"> <img src="./src/images/page4-img3.jpg" alt="" className="img-indent"/></div>
          <div className="extra-wrap">
            <p><Link to={`/events`} className="link">13.05.2012</Link></p>
            <div className="wrap border-bot-1"> <img src="./src/images/page3-img3.jpg" alt="" className="img-indent"/></div>
            <p className="clr-1">Consetetur sadipscing elitr, sed diam nonumy eirmod</p>
            <div className="wrap border-bot-1"> <img src="./src/images/page4-img1.jpg" alt="" className="img-indent"/></div>
            <p>Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
          </div>
        </div>
        <div className="wrap"> <img src="images/page4-img3.jpg" alt="" className="img-indent-2"/>
          <div className="extra-wrap">
            <p><Link to={`/events`} className="link">17.05.2012</Link></p>
            <div className="wrap border-bot-1"> <img src="./src/images/page3-img1.jpg" alt="" className="img-indent"/></div>
            <p className="clr-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            <p>Invidunt ut labore et dolore magna aliquyam erat, sed diamt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="clear"></div>
  </div>
</section>
    )
}