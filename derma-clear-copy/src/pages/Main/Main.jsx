import AlertMessage from "./components/AlertMessage/AlertMessage";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import EliminateSection from "./components/EliminateSection/EliminateSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CompareTable from "./components/CompareTable/CompareTable";
import Ingredients from "./components/Ingredients/Ingredients";
import Footer from "@ui/Footer/Footer";
import MoneyBackGuarantee from "./components/MoneyBackGuarantee/MoneyBackGuarantee";
import AsSeenOn from "./components/AsSeenOn/AsSeenOn";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import ApprovedResult from "./components/ApprovedResult/ApprovedResult";
import FAQ from "./components/FAQ/FAQ";
import References from "./components/References/References";
import Feedbacks2 from "./components/Feedbacks2/Feedbacks2";
import Form from "./components/Form/Form";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import MobileLogo from "./components/MobileLogo/MobileLogo";
import { useEffect } from "react";
import { sendClickService } from "@logic/services";
import { CAMPAING_ID } from "@logic/consts";
import { evaluateFetchPost, sendGAPageView } from "@logic/utils";
import Taboola from "@ui/Taboola/Taboola";

export default function Main() {
	useEffect(() => {
		const noorSessionId = sessionStorage.getItem("noorSessionId");

		evaluateFetchPost(sendClickService, {
			campaignId: CAMPAING_ID,
			pageType: "presellPage",
			requestUri: window.location.href,
			userAgent: window.navigator.userAgent,
			...(noorSessionId && { sessionId: noorSessionId }),
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
			<ScrollToTop />
			<Header />
			<Taboola />
			<main>
				<Container>
					<MobileLogo />
					<AlertMessage />
					<Hero />
					<div id="formMobile">
						<Form isMobileSection={true} />
					</div>
					<Feedbacks />
					<AsSeenOn />
					<Feedbacks2 />
					<MoneyBackGuarantee />
					<ApprovedResult />
					<EliminateSection />
					<HowItWorks />
					<CompareTable />
					<Ingredients />
					<FAQ />
					<References />
				</Container>
			</main>
			<Footer />
		</>
	);
}
