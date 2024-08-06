export default function Header(){
    return (
    <header>
  <div className="main">
    <h1>Happy Horse</h1>
    <div className="social-icons"> <span>Follow Us:</span>
      <div> <a href="#" className="icon-3"></a> <a href="#" className="icon-2"></a> <a href="#" className="icon-1"></a> </div>
    </div>
    <div className="clear"></div>
  </div>
  <nav>
  <ul className="menu">
    <li className="current"><a href="/">Home</a></li>
    <li><a href="/breeding">Breeding</a></li>
    <li><a href="/sale">Horse Sale</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/contacts">Contacts</a></li>
    <li><a href="/details">Details</a></li>
    <li><a href="/edit-game">Edit Game</a></li>
    <li><a href="/create-game">Create Game</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    
  </ul>
  <div className="clear"></div>
</nav>
</header>

    );
}