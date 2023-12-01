import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import { ICart } from "@/types";
import userEvent from "@testing-library/user-event";

const mockCart: ICart = {
	cartItems: [
		{
			id: 1,
			title: "Test Product",
			category: "Test Category",
			description: "A description",
			image: "test-image.jpg",
			rating: { rate: 4.5, count: 100 },
			quantity: 2,
			price: 19.99,
		},
	],
	addToCart: vi.fn(),
	updateCart: vi.fn(),
	removeFromCart: vi.fn(),
	clearCart: vi.fn(),
	calcCartTotal: vi.fn(() => 39.98),
};

describe("Header component", () => {
	it("renders correctly with given cart items", () => {
		const { container } = render(
			<MemoryRouter>
				<Header cart={mockCart} />
			</MemoryRouter>
		);

		// Check if site title is rendered
		const titleElement = screen.getByText("COOL PIECES");
		expect(titleElement).toBeInTheDocument();

		// Check if navigation links are rendered
		const homeLink = screen.getByText("Home");
		const shopLink = screen.getByText("Shop");
		expect(homeLink).toBeInTheDocument();
		expect(shopLink).toBeInTheDocument();

		// Check if cart icon is rendered
		const cartIcon = container.querySelector(".open-cart-btn");
		expect(cartIcon).toBeInTheDocument();
	});

	it("opens the shopping cart sheet when the cart icon is clicked", () => {
		const { container } = render(
			<MemoryRouter>
				<Header cart={mockCart} />
			</MemoryRouter>
		);

		const cartIcon = container.querySelector(".open-cart-btn");

		// Click the cart icon
		if (cartIcon) fireEvent.click(cartIcon);

		// Check if the Shopping Cart sheet is opened
		const sheetTitle = screen.getByText("Shopping Cart");
		expect(sheetTitle).toBeInTheDocument();
	});

	it("renders correct information in the shopping cart sheet", async () => {
		const { container } = render(
			<MemoryRouter>
				<Header cart={mockCart} />
			</MemoryRouter>
		);
		const cartIcon = container.querySelector(".open-cart-btn");

		const user = userEvent.setup();
		// Click the cart icon
		if (cartIcon) await user.click(cartIcon);

		// Check if the correct product information is rendered
		const productTitle = screen.getByText("Test Product");
		const productQuantity: HTMLInputElement =
			screen.getByRole("spinbutton");
		const productTotal = screen.getAllByText("$ 39.98")[0];

		expect(productTitle).toBeInTheDocument();
		expect(productQuantity).toBeInTheDocument();
		expect(productTotal).toBeInTheDocument();
		expect(productQuantity.value).toBe("2");
	});

	it("calls updateCart function when quantity is updated in the shopping cart sheet", async () => {
		const { container } = render(
			<MemoryRouter>
				<Header cart={mockCart} />
			</MemoryRouter>
		);
		const cartIcon = container.querySelector(".open-cart-btn");

		const user = userEvent.setup();
		// Click the cart icon
		if (cartIcon) await user.click(cartIcon);

		// Update the quantity in the Quantity component
		const quantityInput = screen.getByRole("spinbutton");
		fireEvent.change(quantityInput, { target: { value: "3" } });

		// Check if updateCart function is called with the correct arguments
		expect(mockCart.updateCart).toHaveBeenCalledWith(1, 3);
	});
});
