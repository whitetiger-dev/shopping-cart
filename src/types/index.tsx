type TRating = {
	rate: number;
	count: number;
};

interface IProduct {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	rating: TRating;
	image: string;
}

interface ICartItem extends IProduct {
	quantity: number;
}

interface ICart {
	cartItems: ICartItem[];
	addToCart: (item: IProduct) => void;
	updateCart: (product_id: number, quantity: number) => void;
	removeFromCart: (product_id: number) => void;
	clearCart: () => void;
	calcCartTotal: () => number;
}

export type { IProduct, ICart, ICartItem, TRating };
