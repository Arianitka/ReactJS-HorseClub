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
    <li className="current"><a href="index.html">Home</a></li>
    <li><a href="breeding.html">Breeding</a></li>
    <li><a href="sale.html">Horse Sale</a></li>
    <li><a href="events.html">Events</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="contacts.html">Contacts</a></li>
  </ul>
  <div className="clear"></div>
</nav>
</header>

    );
}