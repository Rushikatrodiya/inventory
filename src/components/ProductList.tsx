// import { useInventoryStore } from "../store/inventoryStore";
import { useInventoryStore } from "../store";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useInventoryStore((state) => state.products);
  const { totalValue} = useInventoryStore()

  return (
    <>
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
          <h3>Total Inventory Value: ${totalValue()}</h3>
          </>
  );
};

export default ProductList;
