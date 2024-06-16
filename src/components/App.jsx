import '../assets/css/main.css';
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

const App = () => {
  return (
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
  );
};

export default App;
