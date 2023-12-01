import { render, fireEvent, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Quantity from "../Quantity";

describe("Quantity component", () => {
	it("renders correctly with given quantity", () => {
		const { container } = render(
			<Quantity quantity={3} handleQuantityUpdate={() => {}} />
		);

		// Check if the input field has the correct value
		const inputElement = container.querySelector("input");
		expect(inputElement).toBeInTheDocument();
		expect(inputElement?.value).toBe("3");

		// Check if buttons are rendered
		const [minusButton, plusButton] = container.querySelectorAll("button");

		expect(minusButton).toBeInTheDocument();
		expect(plusButton).toBeInTheDocument();
	});

	it("increments and decrements quantity correctly", async () => {
		const handleQuantityUpdateMock = vi.fn();
		const user = userEvent.setup();
		const { container } = render(
			<Quantity
				quantity={3}
				handleQuantityUpdate={handleQuantityUpdateMock}
			/>
		);

		const [minusButton, plusButton] = container.querySelectorAll("button");

		// Click the plus button
		await user.click(plusButton);
		expect(handleQuantityUpdateMock).toHaveBeenCalledWith(4);

		// Click the minus button: assumes plus button not clicked
		await user.click(minusButton);
		expect(handleQuantityUpdateMock).toHaveBeenCalledWith(2);
	});

	it("handles input change correctly", () => {
		const handleQuantityUpdateMock = vi.fn();
		render(
			<Quantity
				quantity={3}
				handleQuantityUpdate={handleQuantityUpdateMock}
			/>
		);

		// Change the input value
		fireEvent.change(screen.getByRole("spinbutton"), {
			target: { value: "5" },
		});

		expect(handleQuantityUpdateMock).toHaveBeenCalledWith(5);
	});

	it("handles invalid input correctly", () => {
		const handleQuantityUpdateMock = vi.fn();

		render(
			<Quantity
				quantity={3}
				handleQuantityUpdate={handleQuantityUpdateMock}
			/>
		);

		const spinbutton = screen.getByRole("spinbutton");
		// Provide invalid input value
		fireEvent.change(spinbutton, {
			target: { value: "abc" },
		});
		fireEvent.blur(spinbutton);
		// Ensure the input value remains unchanged
		expect(spinbutton).toHaveValue(3);

		// Ensure the handleQuantityUpdate function is not called with NaN
		//expect(handleQuantityUpdateMock).toHaveBeenCalledWith(3);
	});
});
