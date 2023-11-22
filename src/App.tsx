import Rating from "./components/Rating";

function App() {
	return (
		<div>
			<Rating rating={0} count={0} />
			<Rating rating={0.2} count={2} />
			<Rating rating={0.67} count={3} />
			<Rating rating={1.88} count={3} />
			<Rating rating={2.37} count={3} />
			<Rating rating={3.5} count={5} />
			<Rating rating={4} count={3} />
			<Rating rating={5} count={3} />
		</div>
	);
}

export default App;
