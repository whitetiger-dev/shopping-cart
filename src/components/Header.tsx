import { ICart } from "@/types";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import Quantity from "./Quantity";
import { formatPrice } from "@/lib/helpers";

interface HeaderProps {
	cart: ICart;
}

function Header({
	cart: {
		cartItems,
		addToCart,
		updateCart,
		removeFromCart,
		clearCart,
		calcCartTotal,
	},
}: HeaderProps) {
	const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
		const classNames = [
			"border-y-4",
			"border-transparent",
			"py-2",
			"hover:border-b-blue-800",
		];
		if (isActive) {
			classNames.push("border-b-blue-900");
		}
		return classNames.join(" ");
	};

	return (
		<>
			<header className="flex flex-nowrap justify-between border items-center px-4 bg-white text-blue-950">
				<h1 className="text-xl md:text-2xl font-extrabold py-2">
					COOL PIECES
				</h1>
				<nav className="flex flex-nowrap gap-4 md:gap-8 items-center font-semibold text-lg">
					<NavLink to="/" className={navLinkClassName}>
						Home
					</NavLink>
					<NavLink to="shop" className={navLinkClassName}>
						Shop
					</NavLink>

					<Sheet>
						<SheetTrigger>
							<ShoppingBag size={24} />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Shopping Cart</SheetTitle>
								<SheetDescription>
									{(cartItems.length === 0 &&
										"Your cart is empty.") ||
										`You have ${cartItems.length} products in your cart.`}
								</SheetDescription>
							</SheetHeader>
							<div className="flex flex-col mt-4">
								{cartItems.map((cartItem, index) => (
									<div
										key={cartItem.id}
										className={`flex flex-nowrap gap-4 border-t ${
											index + 1 === cartItems.length
												? "border-y"
												: ""
										} py-4 h-[7.5rem]`}
									>
										<img
											src={cartItem.image}
											alt={cartItem.title}
											className="h-full w-14 object-contain"
										/>
										<div className="flex flex-col gap-2 justify-between flex-grow">
											<p className="text-sm line-clamp-2">
												{cartItem.title}
											</p>
											<div className="flex justify-between items-center">
												<Quantity
													quantity={cartItem.quantity}
													handeQtyChange={(
														value: number
													) =>
														updateCart(
															cartItem.id,
															value
														)
													}
													handleQtyIncrement={() =>
														updateCart(
															cartItem.id,
															cartItem.quantity +
																1
														)
													}
													handleQtyDecrement={() =>
														updateCart(
															cartItem.id,
															cartItem.quantity -
																1
														)
													}
												/>
												<p className="font-semibold ml-auto">
													$&nbsp;
													{formatPrice(
														cartItem.price *
															cartItem.quantity
													)}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</header>
		</>
	);
}
export default Header;
