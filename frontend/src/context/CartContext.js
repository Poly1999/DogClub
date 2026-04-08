import { createContext, useContext, useEffect, useState } from 'react';
import { getCart } from '../api/api';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = () => {
    getCart()
      .then(response => {
        const items = response.data.items || [];
        const total = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
