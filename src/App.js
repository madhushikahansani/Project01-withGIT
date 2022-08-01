
import './App.css';
import Home from './pages/Home';
import AboutUS from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <AboutUS/>
      <ContactUs/>
      <Portfolio/>
    </div>
  );
}

export default App;
