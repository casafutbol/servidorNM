import React from 'react';
import Title from '../atoms/Title';
import ProductForm from '../organisms/ProductForm';
import './NewProductTemplate.css';
// import MenuLateral from '../../MenuLateral'; // Descomenta si lo necesitas

const NewProductTemplate: React.FC = () => {
  return (
    <div className="new-product-template">
      {/* <Title>New Product</Title> */}
      <ProductForm />
      {/* <MenuLateral /> */}
    </div>
  );
};

export default NewProductTemplate;