// import { useInventoryStore } from '../store';
import { useInventoryStore } from '../store';

const ProductList = () => {
  const products = useInventoryStore((state) => state.products); // ✅ Ensure reactivity
  const totalValue = useInventoryStore((state) => state.totalValue);

  return (
    <div>
      <h2>Inventory List</h2>
      {products.length === 0 ? <p>No products in inventory.</p> : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} | Stock: {product.stock}
            </li>
          ))}
        </ul>
      )}
      <h3>Total Inventory Value: ${totalValue()}</h3>
    </div>
  );
};

export default ProductList;
