import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import Rating from "./Rating";
import Quantity from "./Quantity";

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<Card className="shadow">
			<CardContent className="h-full p-3">
				<div className="flex flex-col h-full gap-2">
					<div className="flex-grow flex items-center justify-center">
						<img
							src={product.image}
							alt={product.title}
							className="h-[150px] object-contain"
						/>
					</div>
					<div>
						<Rating
							rating={product.rating.rate}
							count={product.rating.count}
						/>
						<Quantity
							quantity={0}
							handeQtyChange={(value: string) => {}}
							handleQtyIncrement={() => {}}
							handleQtyDecrement={() => {}}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default ProductCard;
