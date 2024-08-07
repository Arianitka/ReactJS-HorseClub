
import { Link } from "react-router-dom"
export default function Breeding(){
    return (
        <section id="content">
  <div className="container_12 top-4">
    <div className="grid_12">
      <h2 className="p2">Breeding Stallions</h2>
      <div className="wrap box-3">
        <div> <img src="./src/images/page2-img1.jpg" alt=""/>
          <p className="text-1 top-2 p3">Lorem ipsum</p>
          <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
          <Link to={`/details`} className="button top-3">Read More</Link> </div>
        <div> <img src="./src/images/page2-img2.jpg" alt=""/>
          <p className="text-1 top-2 p3">Consetetur sadipscing</p>
          <p>Duo dolores et ea rebum stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum. dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          <Link to={`/details`} className="button top-3">Read More</Link> </div>
        <div className="last"> <img src="./src/images/page2-img3.jpg" alt=""/>
          <p className="text-1 top-2 p3">Diam nonumy</p>
          <p>Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          <Link to={`/details`} className="button top-3">Read More</Link> </div>
      </div>
    </div>
    <div className="grid_12">
      <div className="line pad-2"></div>
    </div>
    <div className="grid_4">
      <h2 className="p5">Horse Breeds</h2>
      <p className="p3">Mata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore:</p>
      <ul className="list-2">
        <li><Link to={`/details`}>Magna aliquyam erat sed diam</Link></li>
        <li><Link to={`/details`}>At vero eos et accusam</Link></li>
        <li><Link to={`/details`}>Stet clita kasd gubergren sea takimata</Link></li>
        <li><Link to={`/details`}>Lorem ipsum dolor sit amet</Link></li>
        <li><Link to={`/details`}>Consetetur sadipscing elitr sed</Link></li>
        <li><Link to={`/details`}>Diam nonumy eirmod</Link></li>
      </ul>
    </div>
    <div className="grid_8">
      <div className="left-1">
        <h2 className="p5">Breeding Stallions</h2>
        <div className="wrap"> <img src="./src/images/page2-img4.jpg" alt="" className="img-indent-2"/>
          <p className="clr-1 p3">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          <p className="p3">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          <p>At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    <div className="clear"></div>
  </div>
</section>
    )
}