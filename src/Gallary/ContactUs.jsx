import React from 'react';

const ContactUs = () => {
  return (
    <div>
    
 <section id="Contact_wrapper">
        
    <div className="Contact_details">
        <hr/>
        <br />
        <h1>Contact Us </h1>
        <br /><br />
        <p>500 , Terny Colony </p>
        <p>India IA998</p>
        <br />
        <p>Telephone: 93484</p>
        <p>Fax : 39399</p>
        <br /><br />
        <p>Gak3k32@gmail.com</p>
        <br /><br />
        <div className="Socila_meadia_link">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-Twitter"></i>
        <i className="fa fa-Youtube"></i>
        </div>
       <br /><br/>
        <p>&copf; 2021 Product of Medai.xom</p>
    </div>
    <div className="contac_form_box">
        <form >
            <p>Enter Your Name </p>
            <input type="text" />
            <p>Enter Your Email </p>
            <input type="email" />
            <p>Enter Your Subject </p>
            <input type="text" />
            <p> Message </p>
            <textarea cols="30" rows="10"></textarea>
         </form>
        <button>Send Us</button>
       </div>
</section>

    </div>
  )
}

export default ContactUs;
