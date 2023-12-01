import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function Home() {
	const navigate = useNavigate();

	return (
		<div className="fixed -z-10 top-0 px-4 sm:px-10 md:px-40 lg:px-80 h-full flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg flex flex-col gap-6 items-center justify-center">
				<h1 className="text-2xl font-bold">Welcome to Cool Pieces</h1>
				<p className="text-center">
					Discover an Unparalleled Shopping Experience At Cool Pieces,
					we redefine your shopping journey with a curated selection
					of premium products, unbeatable prices, and exceptional
					customer service.
				</p>
				<p className="text-center">
					Explore Our Extensive Selection Browse through our extensive
					range of products, carefully curated to meet your every
					need. From cutting-edge electronics to timeless fashion, we
					have it all.
				</p>
				<Button onClick={() => navigate("/shop")}>Shop Now</Button>
			</div>
		</div>
	);
}

export default Home;
