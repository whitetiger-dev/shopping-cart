import { Cart } from "@/types";
import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  cart: Cart;
}
function Header({ cart: [cartItems, , ,] }: HeaderProps) {
  return (
    <header className="flex flex-nowrap justify-between border items-center px-4 bg-white">
      <h1 className="text-xl md:text-2xl font-extrabold py-2">Cool Piece</h1>
      <ul className="flex flex-nowrap gap-4 md:gap-8 items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:border-b-4 box-border">
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <button className="flex">
            <ShoppingBag size={24} />
          </button>
        </li>
      </ul>
    </header>
  );
}
export default Header;
