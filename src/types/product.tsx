type Rating = {
	rate: number;
	count: number;
};

interface Product {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	rating: Rating;
	image: string;
}

export type { Product };
