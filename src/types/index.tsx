type Rating = {
  rate: number;
  count: number;
};

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: Rating;
  image: string;
}

interface CartItem {
  product_id: number;
  quantity: number;
}

type Cart = [
  cartItems: CartItem[],
  addToCart: (product_id: number, quantity: number) => void,
  updateCart: (product_id: number, quantity: number) => void,
  cartHasProduct: (product_id: number) => boolean
];

export type { Product, CartItem, Cart };
