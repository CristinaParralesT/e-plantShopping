import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.cost ?? item.price) * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const getBackToShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  return (
    <main className="catalog">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button
            className="primary-button"
            onClick={getBackToShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p className="cart-item-price">
                    Unit Price: ${(item.cost ?? item.price).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => handleIncrement(item)}>
                      +
                    </button>
                  </div>

                  <p className="cart-item-total">
                    Subtotal: $
                    {((item.cost ?? item.price) * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <p>Total items: {totalItems}</p>

            <button
              className="primary-button"
              onClick={() => window.alert('Coming Soon!')}
            >
              Checkout
            </button>

            <button
              className="secondary-button"
              onClick={getBackToShopping}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
