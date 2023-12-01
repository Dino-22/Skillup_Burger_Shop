// Write all the code here
import React from "react";
import Popup from 'reactjs-popup';
import burger2 from "../../assets/burger2.png";

function Contact() {
    return (
    <section className="contact">
        
        <form>       
            <h2>Contact Us</h2>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <input type="email" placeholder="Email Address" required />

            <textarea placeholder="Message" rows="10" required/>
  
            <Popup trigger={<button> Send</button>} position="middle center">
                <div style={{color:"red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Thank you for contacting us! We will get back to you shortly.</div>
            </Popup>
        </form>
        <div className="formBorder">
        <div>
            <img src={burger2} alt="Burger" />
        </div>
                
        </div>
    </section>
    );
}

export default Contact;