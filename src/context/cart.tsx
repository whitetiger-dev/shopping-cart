import { IProduct, ICart, ICartItem } from "@/types";
import { createContext, useState } from "react";

interface CartProviderProps extends React.PropsWithChildren {
	children: React.JSX.Element;
}

export const CartContext = createContext<ICart>({
	cartItems: [],
	addToCart: () => {},
	updateCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {},
	calcCartTotal: () => 0,
});

export function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState<ICartItem[]>([]);

	const addToCart = (item: IProduct) => {
		const itemInCart = cartItems.find(
			(cartItem) => cartItem.id === item.id
		);
		if (itemInCart) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{ ...item, quantity: 1 },
			]);
		}
	};

	const updateCart = (product_id: number, quantity: number) => {
		if (quantity === 0) {
			removeFromCart(product_id);
		} else {
			const newCartItems = [...cartItems];
			const index = newCartItems.findIndex(
				(cartItem) => cartItem.id === product_id
			);
			if (index !== -1)
				newCartItems[index] = { ...newCartItems[index], quantity };
			setCartItems(newCartItems);
		}
	};

	const removeFromCart = (product_id: number) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((cartItem) => cartItem.id !== product_id)
		);
	};

	const clearCart = () => setCartItems([]);

	const calcCartTotal = () =>
		cartItems.reduce(
			(total, curr) => total + curr.price * curr.quantity,
			0
		);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				updateCart,
				removeFromCart,
				clearCart,
				calcCartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
