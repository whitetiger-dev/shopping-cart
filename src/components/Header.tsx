import { ICart } from "@/types";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import Quantity from "./Quantity";
import { formatPrice } from "@/lib/helpers";
import { Button } from "./ui/button";

interface HeaderProps {
	cart: ICart;
}

function Header({
	cart: { cartItems, updateCart, calcCartTotal },
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
			<header className="flex flex-nowrap justify-between border items-center px-4 bg-white text-blue-950 z-10">
				<h1 className="text-xl md:text-2xl font-extrabold py-2">
					COOL PIECES
				</h1>
				<nav className="flex flex-nowrap gap-4 md:gap-8 items-center font-semibold text-lg">
					<NavLink to="/" className={navLinkClassName}>
						Home
					</NavLink>
					<NavLink to="/shop" className={navLinkClassName}>
						Shop
					</NavLink>

					<Sheet>
						<SheetTrigger>
							<ShoppingBag className="open-cart-btn" size={24} />
						</SheetTrigger>
						<SheetContent className="py-6 px-0 grid grid-rows-[auto_1fr_auto] focus:outline-none">
							<SheetHeader className="px-4">
								<SheetTitle>Shopping Cart</SheetTitle>
								<SheetDescription>
									{(cartItems.length === 0 &&
										"Your cart is empty.") ||
										`You have ${cartItems.length} products in your cart.`}
								</SheetDescription>
							</SheetHeader>
							<ScrollArea className="px-4 relative h-full">
								<div className="flex flex-col">
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
														quantity={
															cartItem.quantity
														}
														handleQuantityUpdate={(
															quantity: number
														) =>
															updateCart(
																cartItem.id,
																quantity
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

								<ScrollBar />
							</ScrollArea>
							<div className="mx-6 h-20 flex flex-col justify-center items-center p-4 bg-secondary rounded-lg">
								<p className="flex justify-between w-full font-semibold">
									<span>Total</span>
									<span>
										$&nbsp;
										{formatPrice(calcCartTotal())}
									</span>
								</p>
								<Button className="w-full">Checkout</Button>
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</header>
		</>
	);
}
export default Header;
