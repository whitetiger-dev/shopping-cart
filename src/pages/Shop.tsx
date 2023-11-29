import { ICart, IProduct } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import { useOutletContext } from "react-router-dom";

function Shop() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const { cart } = useOutletContext<{ cart: ICart }>();

	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => setProducts(response.data));
	}, []);

	return (
		<div className="flex flex-nowrap">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(125px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(175px,_1fr))] gap-2 p-2 md:p-4 auto-rows-fr flex-grow">
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
						cart={cart}
					/>
				))}
			</div>
		</div>
	);
}

export default Shop;
