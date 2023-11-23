import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

function Shop() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => setProducts(response.data));
	}, []);

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat( auto-fit, minmax(150px, 1fr) )",
			}}
			className="gap-2 p-2 md:p-4"
		>
			{products.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
}

export default Shop;
