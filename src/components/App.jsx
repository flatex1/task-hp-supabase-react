import React from 'react';
import '../assets/css/main.css';
import Header from '../components/Header';
import MainBlock from '../components/MainBlock';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <MainBlock />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
