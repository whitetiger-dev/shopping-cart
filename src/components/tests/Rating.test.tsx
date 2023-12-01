import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Rating from "../Rating";

describe("Rating", () => {
	it("renders correctly with given rating and count", () => {
		const { container, getByText } = render(
			<Rating rating={4.5} count={100} />
		);

		// Check if the stars are rendered
		const stars = container.querySelectorAll("svg");
		expect(stars.length).toBe(5);

		// Check if the count is rendered
		const countElement = getByText("(100)");
		expect(countElement).toBeInTheDocument();
	});
	it("renders stars with correct fill percentages", () => {
		const { container } = render(<Rating rating={3.75} count={50} />);

		// Check if the stars have the correct fill percentages
		const starElements = container.querySelectorAll("svg");
		const fillPercentages = ["100%", "100%", "100%", "75%", "0%"]; // Expected fill percentages for a rating of 3.75

		starElements.forEach((star, index) => {
			const fillPercentage =
				star.getElementsByTagName("stop")[0].getAttribute("offset") ||
				"0%";
			expect(fillPercentage).toBe(fillPercentages[index]);
		});
	});
});
