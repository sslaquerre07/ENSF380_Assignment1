import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    const handleRemove = () => {
        removeFromCart(item);
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
