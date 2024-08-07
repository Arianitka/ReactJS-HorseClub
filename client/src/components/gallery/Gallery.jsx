import { Link } from "react-router-dom"

export default function Gallery(){
    return (
        <section id="content">
        <div className="container_12 top-1">
          <div className="grid_12">
            <div className="pag">
              <div className="img-pags">
                <ul>
                  <li><Link to={`/galle`}><span><img src="./src/images/gallery-1.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-2.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-3.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-4.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-5.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-6.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-7.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-8.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-9.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-10.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-11.jpg" alt=""/></span></Link></li>
                  <li><Link to={`/gallery`}><span><img src="./src/images/gallery-12.jpg" alt=""/></span></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>  
    )
}