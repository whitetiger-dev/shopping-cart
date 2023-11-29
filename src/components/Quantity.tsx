import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface QuantityProps {
	/** The current quantity of the proudct */
	quantity: number;
	/** Callback function when quantity changes */
	handleQuantityUpdate: (value: number) => void;
}

function Quantity({ quantity, handleQuantityUpdate }: QuantityProps) {
	const [qty, setQty] = useState<number>(0);
	const [qtyUpdated, setQtyUpdated] = useState<boolean>(true);

	useEffect(() => {
		setQty(quantity);
	}, [quantity]);

	const handleQtyIncrement = () => setQty((prevQty) => prevQty + 1);
	const handleQtyDecrement = () => setQty((prevQty) => prevQty - 1);

	const handleQtyUpdate = () => {
		handleQuantityUpdate(qty);
		setQtyUpdated(true);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.validity.valid) {
			setQty(parseInt(event.target.value));
			setQtyUpdated(false);
		}
	};

	return (
		<div className="flex flex-nowrap">
			<div className="flex w-28 bg-secondary rounded-full p-1 flex-grow">
				<Button
					onClick={handleQtyDecrement}
					disabled={quantity < 1}
					className="p-1 h-7"
					variant={"secondary"}
				>
					{(quantity !== 1 && <Minus />) || <Trash2 />}
				</Button>
				<input
					type="number"
					min={0}
					onChange={handleInputChange}
					value={qty}
					className="p-0 w-full border focus:outline-none text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
				/>
				<Button
					onClick={handleQtyIncrement}
					className="p-1 h-7"
					variant="secondary"
				>
					<Plus />
				</Button>
			</div>
			{qtyUpdated && (
				<Button onClick={handleQtyUpdate}>Update cart</Button>
			)}
		</div>
	);
}

export default Quantity;
