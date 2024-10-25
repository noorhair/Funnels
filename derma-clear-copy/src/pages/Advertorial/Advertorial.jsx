import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Comments from "./components/Comments/Comments.jsx";
import Container from "@ui/Container/Container.jsx";
import Section1 from "./components/Sections/Section1/Section1.jsx";
import Section2 from "./components/Sections/Section2/Section2.jsx";
import Section3 from "./components/Sections/Section3/Section3.jsx";
import Section4 from "./components/Sections/Section4/Section4.jsx";
import Section5 from "./components/Sections/Section5/Section5.jsx";
import Section6 from "./components/Sections/Section6/Section6.jsx";
import Section7 from "./components/Sections/Section7/Section7.jsx";
import Section8 from "./components/Sections/Section8/Section8.jsx";
import Section9 from "./components/Sections/Section9/Section9.jsx";
import Section10 from "./components/Sections/Section10/Section10.jsx";
import Section11 from "./components/Sections/Section11/Section11.jsx";
import Section12 from "./components/Sections/Section12/Section12.jsx";
import Section13 from "./components/Sections/Section13/Section13.jsx";
import Section14 from "./components/Sections/Section14/Section14.jsx";
import Section15 from "./components/Sections/Section15/Section15.jsx";
import Section16 from "./components/Sections/Section16/Section16.jsx";
import Section17 from "./components/Sections/Section17/Section17.jsx";
import Section18 from "./components/Sections/Section18/Section18.jsx";
import styles from "./Advertorial.module.scss";
import { useEffect, useState } from "react";
import { MONTH_LIST, WEEKDAYS_LIST } from "@logic/consts";
import Offer from "./components/Offer/Offer.jsx";
import { Link } from "react-scroll";
import { CAMPAING_ID } from "@logic/consts";
import { sendClickService } from "@logic/services";
import { evaluateFetchPost, sendGAPageView } from "@logic/utils";
export default function Advertorial() {
	const [dateAttr, setDateAttr] = useState("");
	const [dateStr, setDateStr] = useState("");

	useEffect(() => {
		// Set current date for the page
		const date = new Date();
		const day = date.getDate();
		const month = MONTH_LIST[date.getMonth()];
		const year = date.getFullYear();
		const dayOfTheWeek = WEEKDAYS_LIST[date.getDay()];
		setDateAttr(`${year}-${date.getMonth()}-${day}`);
		setDateStr(`${dayOfTheWeek}, ${month} ${day}, ${year}`);

		// Get session ID from the CC API
		evaluateFetchPost(sendClickService, {
			campaignId: CAMPAING_ID,
			pageType: "presellPage",
			requestUri: window.location.href,
			userAgent: window.navigator.userAgent,
		}).then((data) => {
			if (data?.sessionId) {
				sessionStorage.setItem("noorSessionId", data.sessionId);
			} else {
				console.warn("Konnektive session id is not generated");
			}
		});

		sendGAPageView();
	}, []);

	return (
		<>
			<Header />
			<main className={`${styles.advertorial} advertorial`}>
				<Container>
					<Section1
						dateAttr={dateAttr}
						dateStr={dateStr}
					/>
					<Section2 />
					<Section3 />
					<Section4 />
					<Section5 />
					<Section6 />
					<Section7 />
					<Section8 />
					<Section9
						dateAttr={dateAttr}
						dateStr={dateStr}
					/>
					<Section10 />
					<Section11 />
					<Section12 />
					<Section13 />
					<Section14 />
					<Section15 />
					<Section16 />
					<Section17 />
					<Section18 />
					<Offer
						dateAttr={dateAttr}
						dateStr={dateStr}
					/>
					<Comments />
					<Link
						to="wheel"
						duration={1000}
						smooth={true}
						className={styles.orderButton}
					>
						Click here for FREE bottle
					</Link>
				</Container>
			</main>
			<Footer />
		</>
	);
}
