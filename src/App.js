import './App.css';
import Header from './components/header';
import Welcome from './components/welocme';
import Carousel from './components/carousel';
import AboutSection from './components/aboutsection';
import ServiceSection from './components/servicesection';




function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Carousel/>
      <AboutSection/>
      <ServiceSection/>

    </div>
  );
}

export default App;
