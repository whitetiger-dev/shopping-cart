import { Card, CardContent } from "@/components/ui/card";
import { ICart, IProduct } from "@/types";
import Rating from "./Rating";
import { formatPrice } from "@/lib/helpers";
import { Button } from "./ui/button";

interface ProductCardProps {
	product: IProduct;
	cart: ICart;
}

function ProductCard({ product, cart: { addToCart } }: ProductCardProps) {
	return (
		<Card className="shadow">
			<CardContent className="h-full p-3">
				<div className="h-full flex flex-col">
					<div className="flex items-center justify-center h-[150px] flex-shrink-0">
						<img
							src={product.image}
							alt={product.title}
							className="object-contain h-full"
						/>
					</div>
					<div className="text-sm mt-2 flex flex-col flex-grow gap-1">
						<p className="line-clamp-2 flex-grow ml-1">
							{product.title}
						</p>
						<Rating
							rating={product.rating.rate}
							count={product.rating.count}
						/>
						<p className="font-bold ml-1">
							$ {formatPrice(product.price)}
						</p>
						<div>
							<Button
								className="w-full"
								onClick={() => addToCart(product)}
							>
								Add to cart
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default ProductCard;
