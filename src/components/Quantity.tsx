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

	useEffect(() => {
		setQty(quantity);
	}, [quantity]);

	const handleQtyIncrement = () => handleQuantityUpdate(quantity + 1);
	const handleQtyDecrement = () => handleQuantityUpdate(quantity - 1);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.validity.valid) {
			const num = parseInt(event.target.value);
			setQty(num);
			if (!Number.isNaN(num)) {
				handleQuantityUpdate(num);
			}
		}
	};

	const handleInputBlur = () => {
		if (Number.isNaN(qty)) {
			setQty(quantity);
			handleQuantityUpdate(quantity);
		}
	};

	return (
		<div className="flex flex-nowrap">
			<div className="flex w-28 bg-secondary rounded-full p-1 flex-grow">
				<Button
					onClick={handleQtyDecrement}
					disabled={quantity < 1}
					className="p-1 h-7"
					variant="secondary"
				>
					{(quantity !== 1 && <Minus />) || <Trash2 />}
				</Button>
				<input
					type="number"
					min={0}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
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
		</div>
	);
}

export default Quantity;
