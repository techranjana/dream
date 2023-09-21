import React, { useEffect, useState } from 'react';
import Productcard from './Productcard'; // Import the ProductCard component
import './ProductList.css'; // Import a custom CSS file

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the URL of the GET API to fetch a list of products
    const apiUrl = 'https://dummyjson.com/products';

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setProducts(responseData.products); // Update the state with the fetched products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;