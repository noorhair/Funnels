import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Downsell2.module.scss";
import ProductImg from "@images/USDS/ds2_product.webp";
import BottomShipment from "../ui/BottomShipment/BottomShipment";
import ProductTopBlock from "../ui/ProductTopBlock/ProductTopBlock";
import PaymentsImg from "@images/payment_methods.webp";
import { evaluateFetchPost, sendGAPageView } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { addUpsaleService } from "@logic/services";
import { DS2_PRODUCT_ID, CAMPAING_ID } from "@logic/consts";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { useEffect, useState } from "react";
import Taboola from "@ui/Taboola/Taboola";
import TickBox from "./components/TickBox/TickBox";

export default function Downsell2() {
	const navigate = useNavigate();
	const [isChecked, setIsChecked] = useState(false);
	const noorOrderId = sessionStorage.getItem("noorOrderId");
	const handleClick = async () => {
		if (noorOrderId) {
			await evaluateFetchPost(addUpsaleService, {
				orderId: noorOrderId,
				product1_id: DS2_PRODUCT_ID,
				campaignId: CAMPAING_ID,
			}).then(() => {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));
				orderData && orderData.items.push({ price: 0, shipping: 9.99 });
				sessionStorage.setItem("orderData", JSON.stringify(orderData));
				navigate("/love-serum/us2");
			});
		}
	};

	useEffect(() => {
		sendGAPageView();
	}, []);

	return (
		<>
			<ScrollToTop />
			<Header />
			<Taboola />
			<main>
				<Container>
					<p className={styles.heading}>
						3 Bottles <span className={styles.underline}>Too Many?</span>
					</p>
					<ProductTopBlock>
						<p className={styles.topText}>
							Instead Grab <b className={styles.underlineBrown}>1 Bottle</b> Of <b>Noor Healthy Hair Formula</b>{" "}
							For <b className={styles.greenText}>FREE TODAY ONLY!</b>
						</p>
						<p className={styles.underHeading}>(Just pay for shipping today and begin your FREE trial!)</p>
						<p className={styles.redText}>
							<i>
								<b>This is our lowest price available!</b>
							</i>
						</p>

						<img
							src={ProductImg}
							className={styles.productImg}
							alt="bottle of noor product with badges of free shipping and saving money"
						/>

						<p className={styles.productName}>
							<b>Noor 1 Bottle New Customer Offer</b>
						</p>

						<p className={styles.oldPrice}>$79.95</p>
						<p className={styles.newPrice}>
							<b className={styles.greenText}>ONLY $9.95 Today</b>
						</p>
						<TickBox
							isChecked={isChecked}
							onCheck={() => setIsChecked(!isChecked)}
						/>
						<button
							className={`${styles.yesBtn} ${!isChecked ? styles.yesBtnRestricted : ""}`}
							onClick={() => isChecked && handleClick()}
						>
							Yes! Add It To My Order!
						</button>
						<button
							className={`${styles.yesLnk} ${!isChecked ? styles.yesLnkRestricted : ""}`}
							onClick={() => isChecked && handleClick()}
						>
							Yes! Add It To My Order Now!
						</button>
						<img
							src={PaymentsImg}
							className={styles.paymentsImg}
							alt="payment methods"
						/>
					</ProductTopBlock>
					<button
						className={styles.noBtn}
						onClick={() => navigate("/love-serum/us2")}
					>
						No, I'll pass on this offer
					</button>
					<p
						className={styles.noText}
						onClick={() => navigate("/love-serum/us2")}
					>
						No thanks, I’m positive that I want to pass my discounted bottle of Noor to the next person. I
						understand that I will never see this offer anywhere else and there will be no more discounts.{" "}
						<span className={styles.underline}>
							<b>I'll pass on this offer.</b>
						</span>
					</p>
					<BottomShipment />
				</Container>
			</main>
			<Footer outerStyles={styles.footerStyling} />
		</>
	);
}
