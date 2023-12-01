import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { ICart, IProduct } from "@/types";

const mockProduct: IProduct = {
	id: 1,
	title: "Test Product",
	description: "A description",
	category: "Test Category",
	image: "test-image.jpg",
	rating: { rate: 4.5, count: 100 },
	price: 29.99,
};

const mockCart: ICart = {
	cartItems: [],
	addToCart: vi.fn(),
	updateCart: vi.fn(),
	removeFromCart: vi.fn(),
	clearCart: vi.fn(),
	calcCartTotal: vi.fn(),
};

describe("ProductCard component", () => {
	it("renders correctly with given product", () => {
		const { container } = render(
			<ProductCard product={mockProduct} cart={mockCart} />
		);

		// Check if product title is rendered
		const titleElement = screen.getByText(mockProduct.title);
		expect(titleElement).toBeInTheDocument();

		// Check if rating component is rendered
		const ratingElement = container.querySelector(".rating");
		expect(ratingElement).toBeInTheDocument();

		// Check if price is rendered
		const priceElement = screen.getByText(
			`$ ${mockProduct.price.toFixed(2)}`
		);
		expect(priceElement).toBeInTheDocument();

		// Check if "Add to cart" button is rendered
		const addToCartButton = screen.getByText("Add to cart");
		expect(addToCartButton).toBeInTheDocument();
	});

	it("calls addToCart function when 'Add to cart' button is clicked", async () => {
		render(<ProductCard product={mockProduct} cart={mockCart} />);
		const user = userEvent.setup();
		// Click the "Add to cart" button
		await user.click(screen.getByText("Add to cart"));

		// Check if addToCart function is called with the correct product
		expect(mockCart.addToCart).toHaveBeenCalledWith(mockProduct);
	});
});
