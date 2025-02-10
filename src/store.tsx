import { create } from 'zustand';

export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

type StoreState = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateStock: (id: number, quantity: number) => void;
  totalValue: () => number;
};

export const useInventoryStore = create<StoreState>((set, get) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
    console.log('Product Added:', product); // Debugging Log
  },
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  updateStock: (id, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, stock: Number(product.stock) + Number(quantity) } : product
      ),
    })),
  totalValue: () =>
    get().products.reduce((acc, product) => acc + product.price * product.stock, 0),
}));
