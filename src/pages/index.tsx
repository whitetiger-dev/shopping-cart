import Header from "@/components/Header";
import { CartContext } from "@/context/cart";
import { ICart } from "@/types";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
function App() {
	const cart = useContext<ICart>(CartContext);
	return (
		<div className="h-full">
			<Header cart={cart} />
			<Outlet context={{ cart }} />
		</div>
	);
}

export default App;
