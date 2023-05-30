import './App.css';
import Header from './Components/Header';
import HomeSlider from './Components/HomeSlider';
import Navbar from './Components/Navbar';
import ShopCard from './Components/ShopCard';
import data from "./Components/Data"
import Shops from "./Components/Shops";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const {productItems} = data;
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <HomeSlider />
      <Router>
      <Shops productItems={productItems}/>
      </Router>
    </div>
  );
}

export default App;
