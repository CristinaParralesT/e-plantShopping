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
    (total, item) => total + item.price * item.quantity,
    0
  );

  const changeQuantity = (item, quantity) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <main className="catalog">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Your plants are waiting!</p>
          <button
            className="primary-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name}`}
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        changeQuantity(item, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name}`}
                      onClick={() =>
                        changeQuantity(item, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <p>{totalItems} plant(s) in your cart</p>

            <button
              className="primary-button"
              onClick={() => window.alert('Coming Soon!')}
            >
              Checkout
            </button>

            <button
              className="secondary-button"
              onClick={onContinueShopping}
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
