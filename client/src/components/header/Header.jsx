import { Link } from "react-router-dom";

export default function Header(){
    return (
    <header>
  <div className="main">
    <h1>Happy Horse</h1>
    <div className="social-icons"> <span>Follow Us:</span>
      <div> <Link href="#" className="icon-3"></Link> <Link href="#" className="icon-2"></Link> <Link href="#" className="icon-1"></Link> </div>
    </div>
    <div className="clear"></div>
  </div>
  <nav>
  <ul className="menu">
    <li className="current"><Link href="/">Home</Link></li>
    <li><Link href="/breeding">Breeding</Link></li>
    <li><Link href="/sale">Horse Sale</Link></li>
    <li><Link href="/events">Events</Link></li>
    <li><Link href="/gallery">Gallery</Link></li>
    <li><Link ref="/contacts">Contacts</Link></li>
    <li><Link href="/details">Details</Link></li>
    <li><Link href="/edit-game">Edit Game</Link></li>
    <li><Link href="/create-game">Create Game</Link></li>
    <li><Link href="/login">Login</Link></li>
    <li><Link href="/register">Register</Link></li>
    <li><Link href="/catalog">Catalog</Link></li>
    
  </ul>
  <div className="clear"></div>
</nav>
</header>

    );
}