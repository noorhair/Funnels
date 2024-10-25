import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main.jsx";
import Advertorial from "./pages/Advertorial/Advertorial.jsx";
import "./App.scss";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Upsell1 from "./pages/USDS/Upsell1/Upsell1.jsx";
import Upsell2 from "./pages/USDS/Upsell2/Upsell2.jsx";
import Upsell3 from "./pages/USDS/Upsell3/Upsell3.jsx";
import Upsell4 from "./pages/USDS/Upsell4/Upsell4.jsx";
import Downsell1 from "./pages/USDS/Downsell1/Downsell1.jsx";
import Downsell2 from "./pages/USDS/Downsell2/Downsell2.jsx";
import ThankYou from "./pages/ThankYou/ThankYou.jsx";

const router = createBrowserRouter([
	{
		path: "/love-serum",
		element: <Advertorial />,
	},

	{
		path: "/love-serum/main",
		element: <Main />,
	},
	{
		path: "/love-serum/checkout",
		element: <Checkout />,
	},
	{
		path: "/love-serum/us1",
		element: <Upsell1 />,
	},
	{
		path: "/love-serum/us2",
		element: <Upsell2 />,
	},
	{
		path: "/love-serum/us3",
		element: <Upsell3 />,
	},
	{
		path: "/love-serum/us4",
		element: <Upsell4 />,
	},
	{
		path: "/love-serum/ds1",
		element: <Downsell1 />,
	},
	{
		path: "/love-serum/ds2",
		element: <Downsell2 />,
	},
	{
		path: "/love-serum/thank-you",
		element: <ThankYou />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
