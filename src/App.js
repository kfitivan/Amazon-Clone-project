import './App.css';
import Header from './Components/Header';
import HomeSlider from './Components/HomeSlider';
import Navbar from './Components/Navbar';
import ShopCard from './Components/ShopCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <HomeSlider />
      <ShopCard />
    </div>
  );
}

export default App;
