import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import BackToHomeButton from "../../component/common/BackToHomeButton";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0)
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Your cart is empty.
        <BackToHomeButton />
      </h2>
    );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <BackToHomeButton />
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(({ id, title, price, image, quantity }) => (
          <div key={id} className="cart-item">
            <Link to={`/products/${id}`}>
              <img src={image} alt={title} style={{ cursor: "pointer" }} />
            </Link>

            <div className="cart-item-details">
              <Link
                to={`/products/${id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <h4>{title}</h4>
              </Link>
              <p>Price: ₹{price}</p>
              <p>Quantity: {quantity}</p>
              <p>Subtotal: ₹{(price * quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(id)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="total">Total: ₹{totalPrice.toFixed(2)}</h3>
      <button onClick={clearCart} className="clear-btn">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
