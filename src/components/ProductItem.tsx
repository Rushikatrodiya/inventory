// import { useInventoryStore } from '../store';

import { useInventoryStore } from "../store";

const ProductItem = ({ product }) => {
  const { updateStock, removeProduct } = useInventoryStore();

  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => updateStock(product.id, 1)}>+1 Stock</button>
      <button onClick={() => updateStock(product.id, -1)} disabled={product.stock <= 0}>
        -1 Stock
      </button>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </li>
  );
};

export default ProductItem;
