import { Link } from "react-router-dom";

export default function Header(){
    return (
    <header>
  <div className="main">
  <h1><Link to="index.html"><img src="./src/images/logo.png" alt=""/></Link></h1>
    <div className="social-icons"> <span>Follow Us:</span>
      <div> <Link to={``} className="icon-3"></Link> <Link to={``} className="icon-2"></Link> <Link to={``} className="icon-1"></Link> </div>
    </div>
    <div className="clear"></div>
  </div>
  <nav>
  <ul className="menu">
    <li className="current"><Link to={`/`}>Home</Link></li>
    <li><Link to={`/breeding`}>Breeding</Link></li>
    <li><Link to={`/sale`}>Horse Sale</Link></li>
    <li><Link to={`/events`}>Events</Link></li>
    <li><Link to={`/gallery`}>Gallery</Link></li>
    <li><Link to={`/contacts`}>Contacts</Link></li>
    <li><Link to={`/details`}>Details</Link></li>
    <li><Link to={`/edit-game`}>Edit Game</Link></li>
    <li><Link to={`/create-game`}>Create Game</Link></li>
    <li><Link to={`/login`}>Login</Link></li>
    <li><Link to={`/register`}>Register</Link></li>
    <li><Link to={`/catalog`}>Catalog</Link></li>
    
  </ul>
  <div className="clear"></div>
</nav>
</header>

    );
}