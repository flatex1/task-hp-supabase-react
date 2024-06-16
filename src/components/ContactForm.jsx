import React from 'react';
import '../assets/css/components.css';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container clearfix">
        <div className="contact-text">
          <h2 className="main-block-title">contact</h2>
          <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
        </div>
        <form className="contact-form main-block-form" action="#" method="post">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="tel" placeholder="Phone" />
          <textarea name="message" placeholder="Message"></textarea>
          <div className="contacts">
            <div className="contact-adress">
              <i className="fa fa-map-marker" aria-hidden="true"></i> 5th London Boulevard, U.K.
            </div>
            <div className="contact-phone">
              <i className="fa fa-phone" aria-hidden="true"></i> +40 729 131 637/+40 726 458 782
            </div>
            <div className="contact-email">
              <i className="fa fa-envelope" aria-hidden="true"></i> office@mindblister.com
            </div>
          </div>
          <button className="btn btn-contact" type="submit">send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
