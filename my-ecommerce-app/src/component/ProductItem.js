import React, {useState} from 'react';
// import product from '../data/products.js';

function ProductItem({product, addToCart}) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className='product-item'>
            <img src={product.image} alt={product.name} />
            <h3 onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
                {product.name}
            </h3>
            <p>Price; ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {showDescription && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem;