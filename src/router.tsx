import { createBrowserRouter } from "react-router-dom";
import App from "./pages";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
