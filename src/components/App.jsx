import '../assets/css/main.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainBlock from './MainBlock';
import ContactForm from './ContactForm';
import MainBlockSecond from './MainBlockSecond';
import MainBlockThird from './MainBlockThird';
import SchedulePhone from './SchedulePhone';
import MainBlockFourth from './MainBlockFourth';
import Menu from './Menu';
import MainEvents from './MainEvents';
import InteriorPhotos from './InteriorPhotos';
import Footer from './Footer';
import YandexMap from './YandexMap';
import Dashboard from './Dashboard';
import ErrorBoundary from './ErrorBoundary';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <MainBlock />
              <MainBlockSecond />
              <MainBlockThird />
              <SchedulePhone />
              <MainBlockFourth />
              <Menu />
              <MainEvents />
              <InteriorPhotos />
              <ContactForm />
              <YandexMap />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
