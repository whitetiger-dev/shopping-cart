import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantityProps {
	/** The current quantity of the proudct */
	quantity: number;
	/** Callback function when quantity changes by a certain value */
	handeQtyChange: (value: string) => void;
	/** Callback function when quantity increase by 1 */
	handleQtyIncrement: () => void;
	/** Callback function when quantity decrease by 1 */
	handleQtyDecrement: () => void;
}

function Quantity({
	quantity,
	handeQtyChange,
	handleQtyIncrement,
	handleQtyDecrement,
}: QuantityProps) {
	return (
		<div className="flex">
			<Button
				onClick={handleQtyDecrement}
				disabled={quantity < 1}
				className="p-1 h-7"
				variant="ghost"
			>
				<Minus />
			</Button>
			<input
				type="number"
				min={0}
				onChange={(event) => handeQtyChange(event.target.value)}
				value={quantity}
				className="p-0 w-full border focus:outline-none text-center"
			/>
			<Button
				onClick={handleQtyIncrement}
				className="p-1 h-7"
				variant="ghost"
			>
				<Plus />
			</Button>
		</div>
	);
}

export default Quantity;
