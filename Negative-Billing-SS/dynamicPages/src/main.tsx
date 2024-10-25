import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { BASE_PATH_DYNAMIC } from "@logic/consts";
import { IndexPage, Upsell1Page, Downsell1Page, ThankyouPage, Downsell2Page } from "@pages";
import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900-italic.css";
import "./globals.scss";

setTimeout(() => {
	const GA_MEASUREMENT_ID = "G-XH7Z0EZZYZ";
	ReactGA.initialize(GA_MEASUREMENT_ID);
	ReactGA.send({ hitType: "pageview", page: "/super-serum-trial" });
}, 2000);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path={`${BASE_PATH_DYNAMIC}/`}
					element={<IndexPage />}
				/>
				<Route
					path={`${BASE_PATH_DYNAMIC}/thank-you`}
					element={<ThankyouPage />}
				/>
				<Route
					path={`${BASE_PATH_DYNAMIC}/us1`}
					element={<Upsell1Page />}
				/>
				<Route
					path={`${BASE_PATH_DYNAMIC}/ds1`}
					element={<Downsell1Page />}
				/>
				<Route
					path={`${BASE_PATH_DYNAMIC}/ds2`}
					element={<Downsell2Page />}
				/>
				<Route
					path="*"
					element={<Navigate to={`${BASE_PATH_DYNAMIC}`} />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
