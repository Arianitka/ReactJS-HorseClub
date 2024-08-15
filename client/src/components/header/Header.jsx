import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import withAuth from "../../api/HOC/withAuth";

function Header({
  auth,
}) {
  // const { isAuthenticated } = useContext(AuthContext)
  const { isAuthenticated } = auth;
  return (
    <header>
      <div className="main">
        <h1><Link to="index.html"><img src="./src/images/logo.png" alt="" /></Link></h1>
        <div className="social-icons"> <span>Follow Us:</span>
          <div> 
          <Link to="https://www.instagram.com" target="_blank" className="icon-3"><img src="/src/images/icon-3.png" alt="" /></Link> 
          <Link to="https://www.facebook.com" target="_blank" className="icon-2"><img src="/src/images/icon-2.png" alt="" /> </Link>
          <Link to="https://www.twitter.com" target="_blank" className="icon-1"><img src="/src/images/icon-1.png" alt="" /></Link> </div>
        </div>
        <div className="clear"></div>
      </div>
      <nav>
        <ul className="menu">
          <li className=""><Link to={`/`}>Home</Link></li>

          {isAuthenticated
            ? (
              <div id="user">
                <li><Link to={`/breeding`}>Breeding</Link></li>
                <li><Link to={`/sale`}>Horse Sale</Link></li>
                {/* <li><Link to={`/edit-game`}>Edit Game</Link></li> */}
                <li><Link to={`/create-game`}>Add Horse</Link></li>
                {/* <li><Link to={`/details`}>Details</Link></li> */}
                {/* <li><Link to={`/events`}>Events</Link></li> */}
                <li><Link to={`/gallery`}>Gallery</Link></li>
                <li><Link to={`/contacts`}>Contacts</Link></li>
                <li><Link to={`/catalog`}>Horses catalog</Link></li>
                <li><Link to={`/logout`}>Logout</Link></li>
                <li><Link to={`/profile`}>Profile</Link></li>

              </div>)
            : (<div id="guest">
    
              <li><Link to={`/gallery`}>Gallery</Link></li>
              <li><Link to={`/contacts`}>Contacts</Link></li>
              <li><Link to={`/catalog`}>Horses catalog</Link></li>
              {/* <li><Link to={`/details`}>Details</Link></li> */}
              <li><Link to={`/login`}>Login</Link></li>
              <li><Link to={`/register`}>Register</Link></li>
            </div>)
          }    
  </ul>
       <div className="clear"></div>
      </nav>
    </header>

  );
}

export default withAuth(Header);