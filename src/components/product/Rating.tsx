import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface StarProps {
	/** Percentage of star that is filled */
	fillPercentage?: number;
	/** Color of the filled portion of the star. */
	filled?: string;
	/** Color of the unfilled portion of the star. */
	unfilled?: string;
	/** Border color of the star. */
	borderColor?: string;
	/** Border width of the star. */
	borderWidth?: number;
	/** unique gradient id to handle the fill colors of the star */
	gradientId: string;
}

function Star({
	fillPercentage = 0,
	filled = "gold",
	unfilled = "gray",
	borderColor = "hsl(51, 100%, 45%)",
	borderWidth = 0,
	gradientId,
}: StarProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			width="100%"
			height="100%"
		>
			{/* Define the linear gradient */}
			<defs>
				<linearGradient
					id={gradientId}
					x1="0%"
					y1="0%"
					x2="100%"
					y2="0%"
				>
					{/* Fill stops */}
					<stop
						offset={`${fillPercentage}%`}
						style={{ stopColor: filled, stopOpacity: 1 }}
					/>
					<stop
						offset={`${fillPercentage}%`}
						style={{ stopColor: unfilled, stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>

			{/* Star path */}
			<path
				d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
				fill={`url(#${gradientId})`}
				strokeWidth={borderWidth}
				stroke={borderColor}
			/>
		</svg>
	);
}

interface RatingProps {
	rating: number;
	count: number;
}

function Rating({ rating, count }: RatingProps) {
	const [stars, setStars] = useState<React.JSX.Element[]>();

	useEffect(() => {
		const updatedStars: React.JSX.Element[] = [];
		for (let index = 0, difference, fillPercentage; index < 5; index++) {
			difference = rating - index;
			if (difference > 1) fillPercentage = 100;
			else if (difference < 0) fillPercentage = 0;
			else fillPercentage = Math.round(difference * 100);

			const starComponentKey = uuidv4();
			updatedStars[index] = (
				<Star
					key={starComponentKey}
					fillPercentage={fillPercentage}
					gradientId={starComponentKey}
				/>
			);
		}
		setStars(updatedStars);
	}, []);

	return (
		<div className="flex flex-nowrap items-center">
			<span className="flex flex-nowrap items-center h-6">{stars}</span>
			<span className="ml-1">({count})</span>
		</div>
	);
}

export default Rating;
