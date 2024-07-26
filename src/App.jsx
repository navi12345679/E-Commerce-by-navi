import './App.css'
import Navbar  from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './Components/Footer/Footer.css';
import mens_banner from './Components/assets/men_banner.png';
import womens_banner from './Components/assets/women_banner.png';
import kids_banner from './Components/assets/kids_banner1.png';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/> }/>
      <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>    
  )
}

export default App
