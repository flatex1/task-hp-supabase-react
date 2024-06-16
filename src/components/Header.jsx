import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import supabase, { signUpUser, signInUser, signOutUser } from '../services/supabaseClient';
import { toast } from 'react-toastify';
import '../assets/css/components.css';
import '../assets/css/modal.css';

Modal.setAppElement('#root');

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [session, setSession] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        console.log('Session:', data.session);
        setSession(data.session);
      } catch (error) {
        console.error('Error getting session:', error);
        toast.error(`Error getting session: ${error.message}`);
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state change:', session);
      setSession(session);
    });

    return () => {
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(formData.email, formData.password);
      toast.success('Registration successful! Check your email for the confirmation link.');
      setIsRegistered(true);
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { session, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log('Sign in session:', session);
      setSession(session);
      toast.success('Login successful!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setSession(null);
      toast.success('Logout successful!');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="nav-first">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">team</a>
            <a href="#">booking</a>
          </div>
          <img className="header-logo" src="src/assets/img/header/header-logo.png" alt="logo" width="150" height="150" />
          <div className="nav-second">
            <a href="#">menu</a>
            <a href="#">events</a>
            <a href="#">contact</a>
            {session ? (
              <a href="#" id="logout-link" onClick={handleSignOut}>Logout</a>
            ) : (
              <a href="#" id="login-link" onClick={() => setIsModalOpen(true)}>Login</a>
            )}
          </div>
        </div>
        <div className="header-main">
          <div className="work-schedule">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
          <div className="header-middle">
            <span className="pre-title">restaurant</span>
            <h1 className="title">hungry people</h1>
            <button className="btn btn-book" type="button">book table</button>
            <button className="btn btn-explore" type="button">explore</button>
          </div>
          <div className="social">
            <div className="social-icon fb-icon"></div>
            <div className="social-icon tw-icon"></div>
            <div className="social-icon in-icon"></div>
          </div>
        </div>
        <div className="outline-btn">
          <div className="scroll-down-btn"></div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Login Modal"
      >
        <h2>{isRegistered ? 'Login' : 'Register'}</h2>
        <form onSubmit={isRegistered ? handleSignIn : handleSignUp}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="btn-modal">{isRegistered ? 'Login' : 'Register'}</button>
        </form>
        <button onClick={() => setIsRegistered(!isRegistered)} className="btn-toggle">
          {isRegistered ? 'Need to register?' : 'Already registered?'}
        </button>
        <button onClick={() => setIsModalOpen(false)} className="btn-close">Close</button>
      </Modal>
    </header>
  );
};

export default Header;
