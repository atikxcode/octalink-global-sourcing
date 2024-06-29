import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {

  const location = useLocation();
  const collection = location.state.collection;

  console.log(collection);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Product;