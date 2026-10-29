
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">
      <header className="navbar">
        <button
          className="brand"
          onClick={() => setPage('home')}
        >
          🌿 Paradise Nursery
        </button>

        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('plants')}>Plants</button>
          <button onClick={() => setPage('cart')}>
            🛒 Cart ({totalItems})
          </button>
        </nav>
      </header>

      {page === 'home' && (
        <AboutUs onGetStarted={() => setPage('plants')} />
      )}

      {page === 'plants' && <ProductList />}

      {page === 'cart' && (
        <CartItem onContinueShopping={() => setPage('plants')} />
      )}

      <footer>
        <p>© 2026 Paradise Nursery · Grow something beautiful.</p>
      </footer>
    </div>
  );
}

export default App;
