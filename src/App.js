import './App.css';
import Header from './components/header';
import Welcome from './components/welocme';
import Carousel from './components/carousel';
import AboutSection from './components/aboutsection';
import ServiceSection from './components/servicesection';
import Cardcontainer from './components/cardcontainer';
import Recentwork from './components/recentwork';
import Imagesection from './components/imagesection';




function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Carousel/>
      <AboutSection/>
      <ServiceSection/>
      <Cardcontainer/>
      <Recentwork/>
      <Imagesection/>

    </div>
  );
}

export default App;
