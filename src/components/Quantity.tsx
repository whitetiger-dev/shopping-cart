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
		<div>
			<Button onClick={handleQtyDecrement} disabled={quantity < 1}>
				<Minus />
			</Button>
			<Input
				type="number"
				min={0}
				onChange={(event) => handeQtyChange(event.target.value)}
				value={quantity}
			/>
			<Button onClick={handleQtyIncrement}>
				<Plus />
			</Button>
		</div>
	);
}
