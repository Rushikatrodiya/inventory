import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div>
      <h1>Inventory Management System</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
