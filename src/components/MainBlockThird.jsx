import React, { useState } from 'react';
import { insertBooking } from '../services/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/main.css';

const MainBlockThird = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertBooking(formData);
      toast.success(`Booking successful for ${formData.name} on ${formData.date} at ${formData.time}`);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="main-block main-block-third">
      <div className="container clearfix">
        <div className="main-block-info-left">
          <h2 className="main-block-title">book a table</h2>
          <form className="main-block-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <select name="people" required value={formData.people} onChange={handleChange}>
              <option value="" hidden>People</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="text" name="date" placeholder="Date (mm/dd)" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} required value={formData.date} onChange={handleChange} />
            <select name="time" required value={formData.time} onChange={handleChange}>
              <option value="" hidden>Time</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
              <option value="22:00">22:00</option>
            </select>
            <button className="btn btn-book" type="submit">book now</button>
          </form>
          <ToastContainer />
        </div>
        <div className="main-block-border-element-right">
          <img className="main-block-img" src="https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/book.png" alt="Book Table" width="575" height="575" />
        </div>
      </div>
    </div>
  );
};

export default MainBlockThird;
