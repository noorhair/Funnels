import { CAMPAING_ID } from "@logic/consts";
import styles from "./Checkout.module.scss";
import Form from "./components/Form/Form.jsx";
import { useEffect, useRef } from "react";
import { evaluateFetchPost, sendGAAddToCart, sendGAPageView } from "@logic/utils";
import { sendClickService } from "@logic/services";
import TopContent from "./components/TopContent/TopContent.jsx";
import Header from "./components/Header/Header.jsx";
import ContinueCheckout from "./components/ContinueCheckout/ContinueCheckout.jsx";
import BottomContent from "./components/BottomContent/BottomContent.jsx";
import MoneyBack from "./components/MoneyBack/MoneyBack.jsx";
import checkoutCardsImg from "@images/checkout_cards.webp";
import giftImg from "@images/gift_icon.webp";
import Container from "@ui/Container/Container.jsx";
import Stamped from "./components/Stamped/Stamped.jsx";
import Footer from "@ui/Footer/Footer.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import Taboola from "@ui/Taboola/Taboola";

export default function Checkout() {
	const product = {
		price: "0",
		productName: "Love Hair Serum | 1 Month Subscription + FREE Scalp Massager (Free Trial)",
		shippingPrice: "12.95",
		newCustomerDiscount: "71.00",
		productId: 1672,
		clientProductId: null,
		productCategoryId: "1",
	};

	const topRef = useRef(null);
	const billingFormRef = useRef(null);
	const strCampaignId = String(CAMPAING_ID);
	const checkoutGA = {
		value: Number(product.price),
		currency: "USD",
		items: [
			{
				item_id: String(product.productId),
				item_name: product.productName,
				quantity: 1,
			},
		],
	};

	useEffect(() => {
		evaluateFetchPost(sendClickService, {
			campaignId: strCampaignId,
			pageType: "checkoutPage",
			requestUri: window.location.href,
			userAgent: window.navigator.userAgent,
		}).then((data) => {
			if (data?.sessionId) {
				sessionStorage.setItem("noorSessionId", data.sessionId);
			} else {
				console.warn("Konnektive session id is not generated");
			}
		});

		sendGAAddToCart(checkoutGA);
		sendGAPageView();
	}, []);

	const handleExpirationChange = (event) => {
		if (event) {
			const valor = event.target.value;
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 4) {
				soloNumeros = soloNumeros.slice(0, 4);
			}
			const numerosFormateados = soloNumeros.replace(/\s/g, "").match(/.{1,2}/g);
			const numerosFormateadosFinal = numerosFormateados ? numerosFormateados.join(" / ") : "";
			billingFormRef.current?.setFieldValue("cardExpiration", numerosFormateadosFinal);
		}
	};

	const handleCVVChange = (event) => {
		if (event) {
			const valor = event.target.value;
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 4) {
				soloNumeros = soloNumeros.slice(0, 4);
			}
			billingFormRef.current?.setFieldValue("cardSecurityCode", soloNumeros);
		}
	};

	const handleCardNumberChange = (event) => {
		if (event) {
			const valor = event.target.value;
			let soloNumeros = valor.replace(/\D/g, "");
			const longitud = soloNumeros.length;
			if (longitud > 16) {
				soloNumeros = soloNumeros.slice(0, 16);
			}
			const numerosFormateados = soloNumeros.replace(/\s/g, "").match(/.{1,4}/g);
			const numerosFormateadosFinal = numerosFormateados ? numerosFormateados.join(" ") : "";
			billingFormRef.current?.setFieldValue("cardNumber", numerosFormateadosFinal);
		}
	};

	return (
		<>
			<ScrollToTop />
			<Header />
			<Taboola />
			<main>
				<Container>
					<TopContent />
					<div className={styles.topHeader}>
						<p>Order Today and get 3 FREE GIFTS!</p>
						<img
							src={giftImg}
							alt="gift box"
						/>
					</div>
					<div
						className={styles.container}
						ref={topRef}
					>
						<div className={styles.right_section}>
							<div
								id="billingForm"
								className={styles.form_container}
							>
								<h1 className={styles.title}>BILLING INFORMATION</h1>
								<div className={styles.billings_forms_container}>
									<div className={styles.checkout_form_container}>
										<div className={styles.header}>
											<p>Credit/Debit Card</p>
											<div className={styles.card_icons}>
												<img
													src={checkoutCardsImg}
													alt="visa mastercard amex cards"
												/>
											</div>
										</div>
										<Form
											ref={billingFormRef}
											product={product}
											formConfig={[
												{
													type: "input",
													identifier: "cardNumber",
													topText: "Card number",
													onInputChange: handleCardNumberChange,
												},
												{
													type: "input",
													identifier: "cardExpiration",
													topText: "MM/YY",
													onInputChange: handleExpirationChange,
												},
												{
													type: "input",
													identifier: "cardSecurityCode",
													topText: "CVV",
													onInputChange: handleCVVChange,
												},
											]}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<MoneyBack />
					<Stamped />
					<ContinueCheckout />
					<FAQ />
					<BottomContent />
				</Container>
			</main>
			<Footer />
		</>
	);
}
