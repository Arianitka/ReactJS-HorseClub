import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";


const initialValues = { email: '', name:'', phone: '', message: ''};


export default function Contacts(){
  const clearHandler = () => {
    setValues(initialValues)
}
  const { values, changeHandler, submitHandler, setValues } = useForm(
    initialValues,
 );


useEffect(()=>{
console.log(values)
},[values])


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
        <dd><span>E-mail: </span><Link to={`/login`} className="link">mail@demolink.org</Link></dd>
      </dl>
    </div>
    <div className="grid_8">
      <div className="left-1">
        <h2>Contact Form</h2>
        <form id="form" onSubmit={submitHandler} method="post" action="#">
          <fieldset>
            <label><strong>Name:</strong>
              <input type="text"
              name="name"
               value={values.name}
               onChange={changeHandler}
               />
            </label>
            <label><strong>Email:</strong>
              <input type="text" 
              name="email"
              value={values.email}
              onChange={changeHandler}
              />
            </label>
            <label><strong>Phone:</strong>
              <input type="text"
              name="phone"
               value={values.phone}
               onChange={changeHandler}
               />
            </label>
            <label><strong>Message:</strong>
            <textarea onChange ={changeHandler}  name="message" id="message" value={values.message}></textarea>
            </label>

            <div className="btns"><Link to={``} className="button" onClick={clearHandler}>Clear</Link>
            <Link to={``} className="button">Send</Link></div>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="clear"></div>
  </div>
</section>

    )
}