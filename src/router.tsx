import { createBrowserRouter } from "react-router-dom";
import App from "./pages";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "shop",
				element: <Shop />,
			},
		],
	},
]);

export default router;
