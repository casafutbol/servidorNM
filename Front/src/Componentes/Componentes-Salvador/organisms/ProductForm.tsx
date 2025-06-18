import React, { useState } from 'react';
import InputGroup from '../molecules/InputGroup';
import ImageUploader from '../molecules/ImageUploader';
import Button from '../atoms/Button';
import './ProductForm.css';
import MenuLateral from '../../MenuLateral';
import { endpoints, urlServidorPCTraballadores } from '../../../DATOS/datos';

interface ProductFormData {
  nome: string;
  codigo: string;
  stock: string;
  tipo: string;
  peso: string;
  precio: string;
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    nome: '',
    codigo: '',
    stock: '',
    tipo: '',
    peso: '',
    precio: '',
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append('nome', formData.nome);
    data.append('codigo', formData.codigo);
    data.append('stock', formData.stock);
    data.append('tipo', formData.tipo);
    data.append('peso', formData.peso);
    data.append('precio', formData.precio);

    if (selectedImage) {
      data.append('image', selectedImage);
    }

    try {
      const response = await fetch(`${urlServidorPCTraballadores}/${endpoints.products}`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Producto creado exitosamente');
        setFormData({
          nome: '',
          codigo: '',
          stock: '',
          tipo: '',
          peso: '',
          precio: '',
        });
        setSelectedImage(null);
      } else {
        alert('Error al crear producto');
      }
    } catch (error: any) {
      console.error('Error enviando formulario:', error);
      alert(`Error al enviar: ${error.message || error}`);
    }
  };

  return (
    <div className="proba-centrado-NewProduct">
      <div className="centrando-NewProducto-Salvador">
        <form className="product-form" onSubmit={handleSubmit}>
          <InputGroup id="nome" label="Nome" value={formData.nome} onChange={handleChange} required />
          <InputGroup id="codigo" label="Codigo" value={formData.codigo} onChange={handleChange} required />
          <InputGroup id="stock" label="Stock" type="number" value={formData.stock} onChange={handleChange} required />
          <InputGroup id="tipo" label="Tipo" value={formData.tipo} onChange={handleChange} required />
          <InputGroup id="peso" label="Peso" type="number" value={formData.peso} onChange={handleChange} required />
          <InputGroup id="precio" label="Precio" type="number" value={formData.precio} onChange={handleChange} required />
          <ImageUploader onImageChange={handleImageChange} />
          <Button type="submit" variant="primary" className="guardar-boton">
            Guardar
          </Button>
        </form>
      </div>
      <MenuLateral url={0} />
    </div>
  );
};

export default ProductForm;