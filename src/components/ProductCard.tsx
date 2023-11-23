import { Card, CardContent } from "@/components/ui/card";
import { Cart, Product } from "@/types";
import Rating from "./Rating";
import { formatPrice } from "@/lib/helpers";
import { Button } from "./ui/button";
import { useOutletContext } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [, addToCart, updateCart, cartHasProduct] = useOutletContext<Cart>();

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
            <p className="line-clamp-2 flex-grow ml-1">{product.title}</p>
            <Rating rating={product.rating.rate} count={product.rating.count} />
            <p className="font-bold ml-1">$ {formatPrice(product.price)}</p>
            <div>
              <Button
                className="w-full"
                onClick={() =>
                  cartHasProduct(product.id)
                    ? addToCart(product.id, 1)
                    : updateCart(product.id, 1)
                }
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
