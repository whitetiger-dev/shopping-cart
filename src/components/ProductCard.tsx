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
        <div className="h-full">
          <div className="flex-grow flex items-center justify-center h-[150px] flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-full"
            />
          </div>
          <div className="text-sm mt-2 flex flex-col">
            <p className="line-clamp-3">{product.title}</p>
            <Rating rating={product.rating.rate} count={product.rating.count} />
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
