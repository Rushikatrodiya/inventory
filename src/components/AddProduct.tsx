import { useState } from 'react';
import { useInventoryStore } from '../store';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const addProduct = useInventoryStore((state) => state.addProduct);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert('Please fill all fields');
      return;
    }

    addProduct({
      id: Date.now(),
      name,
      price: Number(price),
      stock: Number(stock),
    });

    // ✅ Force React to update by resetting state
    setName('');
    setPrice('');
    setStock('');

    console.log('Updated Store:', useInventoryStore.getState().products); // Debugging Log
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
