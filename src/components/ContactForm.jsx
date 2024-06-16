import React, { useState } from 'react';
import { insertContact } from '../services/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/main.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await insertContact(formData);
      toast.success(`Message sent successfully from ${formData.name}`);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="contact">
      <div className="container clearfix">
        <div className="contact-text">
          <h2 className="main-block-title">contact</h2>
          <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
        </div>
        <form className="contact-form main-block-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
          <div className="contacts">
            <div className="contact-address">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
