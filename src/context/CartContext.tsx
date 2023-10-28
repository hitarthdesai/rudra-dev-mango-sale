import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type CartItems = {
  [key: number]: number;
};

type CartContextValue = {
  items: CartItems;
  addItem: (itemId: number) => void;
  removeItem: (itemId: number) => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addItem = useCallback((itemId: number) => {
    setCartItems((prevItems: CartItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId] += 1;
      } else {
        newItems[itemId] = 1;
      }
      return newItems;
    });
  }, []);

  const removeItem = useCallback((itemId: number) => {
    setCartItems((prevItems: CartItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId] -= 1;
        if (newItems[itemId] === 0) {
          delete newItems[itemId];
        }
      }
      return newItems;
    });
  }, []);

  const cartContextValue: CartContextValue = {
    items: cartItems,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
