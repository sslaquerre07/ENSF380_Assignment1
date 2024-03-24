import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/products';

const ProductList = ({addToCart}) => {
    return (
        <div className='product-list'>
            {product.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};
export default ProductList;