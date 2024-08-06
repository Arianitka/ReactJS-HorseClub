import { Link } from "react-router-dom"

export default function Footer(){

    return (
        <footer>
        <div className="footer-col-1">
          <h3>Why Us</h3>
          <ul className="list-1">
            <li><Link to="/details">Nam liber tepor cum</Link></li>
            <li><Link to="/details">Soluta nobeleifend option</Link></li>
            <li><Link to="/details">Congue ni imperdietng</Link></li>
          </ul>
        </div>
        <div className="footer-col-2">
          <h3>Address</h3>
          <dl className="adress">
            <dd><span>Country:</span>USA</dd>
            <dd><span>City:</span>San Diego</dd>
            <dd><span>Email:</span><a to="#" className="link">lcenter@mail.com</a></dd>
          </dl>
        </div>
        <div className="footer-col-3">
          <h3>Newsletter</h3>
          <form id="form-search" method="post" action="#">
            <input type="text" value="" onBlur="if(this.value=='') this.value=''" onFocus="if(this.value =='' ) this.value=''"/>
            <Link to="/contacts"></Link>
          </form>
        </div>
        <div className="footer-col-4">
          <p>© 2012 Horse Club<br/>
            Website Template by <Link target="_blank" to="http://www.templatemonster.com/" className="link">TemplateMonster.com</Link></p>
        </div>
      </footer>
    )
}