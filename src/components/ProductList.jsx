import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsArray = [
  {
    category: 'Easy Care',
    plants: [
      { id: 1, name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Monstera Deliciosa', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Jade Plant', price: 15, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Pothos', price: 17, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80' },
      { id: 5, name: 'ZZ Plant', price: 20, image: 'https://images.unsplash.com/photo-1632207691143-643e2a4a4f9b?auto=format&fit=crop&w=600&q=80' },
      { id: 6, name: 'Rubber Plant', price: 24, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Low Light',
    plants: [
      { id: 7, name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80' },
      { id: 8, name: 'Chinese Evergreen', price: 21, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80' },
      { id: 9, name: 'Parlor Palm', price: 19, image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80' },
      { id: 10, name: 'Cast Iron Plant', price: 23, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=600&q=80' },
      { id: 11, name: 'Heartleaf Philodendron', price: 18, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80' },
      { id: 12, name: 'Dracaena', price: 26, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Air Purifying',
    plants: [
      { id: 13, name: 'Areca Palm', price: 30, image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80' },
      { id: 14, name: 'Spider Plant', price: 16, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c7b5?auto=format&fit=crop&w=600&q=80' },
      { id: 15, name: 'Boston Fern', price: 20, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80' },
      { id: 16, name: 'Bamboo Palm', price: 28, image: 'https://images.unsplash.com/photo-1597055181300-3c8d8f3e8d9a?auto=format&fit=crop&w=600&q=80' },
      { id: 17, name: 'English Ivy', price: 17, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80' },
      { id: 18, name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addedToCart = {};
  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  return (
    <main className="catalog product-list">
      <p className="eyebrow">OUR COLLECTION</p>
      <h1>Find Your Perfect Plant</h1>
      <p className="subtitle">
        Explore our collection and find the perfect green companion.
      </p>

      {plantsArray.map((category) => (
        <section className="category" key={category.category}>
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />

                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>

                  <button
                    className="primary-button"
                    disabled={addedToCart[plant.name]}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {addedToCart[plant.name]
                      ? 'Added to Cart'
                      : 'Add to Cart'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;