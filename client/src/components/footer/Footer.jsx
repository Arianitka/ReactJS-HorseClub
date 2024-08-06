export default function Footer(){

    return (
        <footer>
        <div className="footer-col-1">
          <h3>Why Us</h3>
          <ul className="list-1">
            <li><a href="#">Nam liber tepor cum</a></li>
            <li><a href="#">Soluta nobeleifend option</a></li>
            <li><a href="#">Congue ni imperdietng</a></li>
          </ul>
        </div>
        <div className="footer-col-2">
          <h3>Address</h3>
          <dl className="adress">
            <dd><span>Country:</span>USA</dd>
            <dd><span>City:</span>San Diego</dd>
            <dd><span>Email:</span><a href="#" className="link">lcenter@mail.com</a></dd>
          </dl>
        </div>
        <div className="footer-col-3">
          <h3>Newsletter</h3>
          <form id="form-search" method="post" action="#">
            <input type="text" value="" onBlur="if(this.value=='') this.value=''" onFocus="if(this.value =='' ) this.value=''"/>
            <a href="#"></a>
          </form>
        </div>
        <div className="footer-col-4">
          <p>© 2012 Horse Club<br/>
            Website Template by <a target="_blank" href="http://www.templatemonster.com/" className="link">TemplateMonster.com</a></p>
        </div>
      </footer>
    )
}