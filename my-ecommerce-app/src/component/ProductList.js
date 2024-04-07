
import { React, useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({addToCart}) => {

    // const { products, setProducts } = useProductsContext();
    const [ products, setProducts ] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/Products");
            // if (!response.ok) {
            //     throw new Error('Failed to fetch products');
            // }
            const data = await response.json(); // Parse response body as JSON
            return data.products; // Assuming 'products' is the key containing your product data
        } catch (error) {
            throw error; // Rethrow to allow caller to handle
        }
    };
    
    const handleProducts = (p) => {
        setProducts(p);
    }

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            handleProducts(data);
        };
        getProducts();
      }, [setProducts]);

    return (
        <div className='product-list'>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};
export default ProductList;