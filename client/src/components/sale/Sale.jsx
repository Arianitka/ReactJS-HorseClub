import { Link } from "react-router-dom"

export default function Sale(){

    return (
        <section id="content">
  <div className="container_12 top-4">
    <div className="grid_4">
      <h2>Special Note</h2>
      <div className="box-4"><img src="images/page3-img4.png" alt=""/><span className="extra-wrap text-1">Consetetur sadipscing elitr sed diam nonumy.</span></div>
      <p className="p1">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
      <h2 className="p3">Special Note</h2>
      <div className="wrap border-bot-1"> <img src="./src/images/gallery-3.jpg" alt="" className="img-indent"/></div>
      <ul className="list-2">
        <li><Link to={`/events`}>Magna aliquyam erat sed diam</Link></li>
        <li><Link to={`/events`}>At vero eos et accusam</Link></li>
        <li><Link to={`/events`}>Stet clita kasd gubergren sea takimata</Link></li>
        <li><Link to={`/events`}>Lorem ipsum dolor sit amet</Link></li>
        <li><Link to={`/events`}>Consetetur sadipscing elitr sed</Link></li>
        <li><Link to={`/events`}>Diam nonumy eirmod</Link></li>
        <li><Link to={`/events`}>Tempor invidunt ut labore et dolore</Link></li>
        <li><Link to={`/events`}>Magna aliquyam erat, sed diam</Link></li>
        <li><Link to={`/events`}>At vero eos et accusam</Link></li>
      </ul>
    </div>
    <div className="grid_8">
      <div className="left-1">
        <h2 className="p2">Breeding Stallions</h2>
        <div className="wrap border-bot-1"> <img src="./src/images/gallery-6.jpg" alt="" className="img-indent"/></div>
        <div className="wrap box-5">
          <div> <img src="images/page3-img1.jpg" alt=""/>
            <p className="text-1 top-2 p3">Consete sadipscing</p>
            <p className="clr-1 p3">Nam liber tepor soluta nobis eleifed option congue nihil imperdiet </p>
            <p>Doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
            <Link to={`/events`} className="button top-3">Read More</Link> </div>
          <div> <img src="images/page3-img2.jpg" alt=""/>
            <p className="text-1 top-2 p3">Elitr sed diam</p>
            <p className="clr-1 p3">Mibh euismod tincidunt ut laoreet dolore agna aliquam erat volutpat. </p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <Link to={`/events`} className="button top-3">Read More</Link> </div>
          <div className="last"> <img src="images/page3-img3.jpg" alt=""/>
            <p className="text-1 top-2 p3">Rirmod tempor</p>
            <p className="clr-1 p3">Duis autem vel eum iriure dolor in hendrerit in vulptate velit esse.</p>
            <p>Consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim quiandit praesent zzril.</p>
            <Link to={`/events`} className="button top-3">Read More</Link> </div>
        </div>
      </div>
    </div>
    <div className="clear"></div>
  </div>
</section>
    )
}