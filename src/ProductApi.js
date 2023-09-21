import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch product data
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data); // Update the state with the data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductApi;