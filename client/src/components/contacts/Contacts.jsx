export default function Contacts(){
    return (
<section id="content">
  <div className="container_12 top-4">
    <div className="grid_4">
      <h2>Contact Us</h2>
      <div className="map">
        <iframe src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
      </div>
      <dl className="adr">
        <dt>8901 Marmora Road, <br/>
          Glasgow, D04 89GR.</dt>
        <dd><span>Telephone: </span>+1 800 603 6035
          <div className=""></div>
        </dd>
        <dd><span>E-mail: </span><a href="#" className="link">mail@demolink.org</a></dd>
      </dl>
    </div>
    <div className="grid_8">
      <div className="left-1">
        <h2>Contact Form</h2>
        <form id="form" method="post" action="#">
          <fieldset>
            <label><strong>Name:</strong>
              <input type="text" value=""/>
            </label>
            <label><strong>Email:</strong>
              <input type="text" value=""/>
            </label>
            <label><strong>Phone:</strong>
              <input type="text" value=""/>
            </label>
            <label><strong>Message:</strong>
              <textarea></textarea>
            </label>
            <div className="btns"><a href="#" className="button">Clear</a><a href="#" className="button">Send</a></div>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="clear"></div>
  </div>
</section>

    )
}