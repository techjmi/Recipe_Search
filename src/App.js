import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Recipe from './pages/Recipe';
import Recipedetails from './component/Recipedetails';
import Footer from './pages/Footer';

function App() {
  return (
   <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recipe' element={<Recipe />} />
    <Route path='/recipe/:recipeId' element={<Recipedetails />} />
  </Routes>
  {/* <Footer /> */}
  
   </BrowserRouter>
  );
}

export default App;
