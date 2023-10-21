import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Product from './Customer/Components/Product/Product';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
