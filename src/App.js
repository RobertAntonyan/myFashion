import './App.css';
import Arrivals from './components/Arrivals/Arrivals';
import Brends from './components/Brends/Brends';
import Favorite from './components/Favorite/Favorite';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Join from './components/Join/Join';
import Promo from './components/Promo/Promo';
import Sale from './components/Sale/Sale';
import Vauchers from './components/Vauchers/Vauchers';

function App() {
  return (
    <div className="App">
       <Header />
       <Promo />
       <Brends />
       <Arrivals />
       <Sale />
       <Favorite />
       <Vauchers />
       <Join />
       <Footer />
    </div>
  );
}

export default App;
