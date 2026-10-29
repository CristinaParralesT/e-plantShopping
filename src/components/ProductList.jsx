
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../CartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Easy Care',
    price: 18,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    category: 'Easy Care',
    price: 25,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Jade Plant',
    category: 'Easy Care',
    price: 15,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Pothos',
    category: 'Easy Care',
    price: 17,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'ZZ Plant',
    category: 'Easy Care',
    price: 20,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a4a4f9b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Rubber Plant',
    category: 'Easy Care',
    price: 24,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Peace Lily',
    category: 'Low Light',
    price: 22,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Chinese Evergreen',
    category: 'Low Light',
    price: 21,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Parlor Palm',
    category: 'Low Light',
    price: 19,
    image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Cast Iron Plant',
    category: 'Low Light',
    price: 23,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    name: 'Heartleaf Philodendron',
    category: 'Low Light',
    price: 18,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    name: 'Dracaena',
    category: 'Low Light',
    price: 26,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 13,
    name: 'Areca Palm',
    category: 'Air Purifying',
    price: 30,
    image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 14,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 16,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c7b5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 15,
    name: 'Boston Fern',
    category: 'Air Purifying',
    price: 20,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 16,
    name: 'Bamboo Palm',
    category: 'Air Purifying',
    price: 28,
    image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 17,
    name: 'English Ivy',
    category: 'Air Purifying',
    price: 17,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 18,
    name: 'Aloe Vera',
    category: 'Air Purifying',
    price: 14,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
  },
];

const categories = ['Easy Care', 'Low Light', 'Air Purifying'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className="catalog">
      <p className="eyebrow">OUR COLLECTION</p>
      <h1>Find Your Perfect Plant</h1>
      <p className="subtitle">
        Explore our collection and find the perfect green companion.
      </p>

      {categories.map((category) => (
        <section className="category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <button
                        className="primary-button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
