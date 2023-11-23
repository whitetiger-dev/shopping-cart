import { CartItem } from "@/types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product_id: number, quantity: number): void => {
    const updatedItems: CartItem[] = cartItems.slice();

    let cartItem: CartItem | undefined, currentCartItem: CartItem;
    const n = updatedItems.length;

    for (let i = 0; i < n; i++) {
      currentCartItem = updatedItems[i];
      if (currentCartItem.product_id === product_id) {
        cartItem = {
          ...currentCartItem,
          quantity: currentCartItem.quantity + quantity,
        };
        updatedItems[i] = cartItem;
      }
    }

    if (cartItem === undefined)
      updatedItems.push({ product_id: product_id, quantity });

    setCartItems(updatedItems.filter((item) => item.quantity > 0));
  };

  const updateCart = (product_id: number, quantity: number) => {
    const updatedItems: CartItem[] = cartItems.slice();
    const n = updatedItems.length;
    for (let i = 0; i < n; i++) {
      if (product_id === updatedItems[i].product_id)
        updatedItems[i] = { ...updatedItems[i], quantity };
    }
    setCartItems(updatedItems.filter((item) => item.quantity > 0));
  };

  return (
    <div>
      <Outlet context={[cartItems, addToCart, updateCart]} />
    </div>
  );
}

export default App;
