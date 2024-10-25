import styles from "./Offer.module.scss";
import tickImg from "@images/Advertorial/offer_tick.webp";
import wheelImg from "@images/Advertorial/wheel.webp";
import wheelCoursorImg from "@images/Advertorial/wheelCoursor.webp";
import orderImg from "@images/product.webp";
import redTickImg from "@images/Advertorial/red_order_tick.webp";
import "./OfferAnimation.scss";
import { useState } from "react";
import { OrderButton } from "../../ui/OrderButton/OrderButton.jsx";

export default function Offer({ dateAttr, dateStr }) {
	const [showModal, setShowModal] = useState(false);
	const [showProduct, setShowProduct] = useState(false);

	const spinClickHandler = () => {
		let wheel = document.querySelector(".wheel img");

		if (!wheel.classList.contains("rotated")) {
			wheel.classList.add("super-rotation");

			setTimeout(() => {
				setShowModal(true);
			}, 7000);

			setTimeout(() => {
				setShowProduct(true);
			}, 8000);

			wheel.classList.add("rotated");
		}
	};

	return (
		<section
			id="wheel"
			className={styles.offer}
		>
			<div className={styles.coupon}>
				<h2>LIMITED TIME OFFER FOR OUR READERS</h2>
			</div>
			<p className={styles.claim}>(CLAIM YOURS NOW BEFORE THEY'RE ALL GONE)</p>
			<p className={styles.note}>
				Note: Dr. Pezad and her clients used Noor Hair Love Serum to achieve remarkable results.
			</p>
			<div className={styles.stockUpdate}>
				<img
					src={tickImg}
					alt="green tick complete mark"
				/>
				<p className={styles.stockMsg}>
					<b>Stock Update:</b> <span>ALMOST GONE.</span> LIMITED Discounted Supply AVAILABLE as of:{" "}
					<b>
						<time dateTime={dateAttr}>{dateStr}</time>
					</b>
				</p>
			</div>

			<div className={styles.featuresWrapper}>
				{!showProduct ? (
					<div className={styles.offerWrapper}>
						<p className={styles.text}>
							<b>NOTE!</b>
							<br /> Just for visitors of our site, the <b>Noor Hair Love Serum</b> will be sold at a discount!
							Click the <b>"CLAIM OFFER"</b> button and secure your bottle! Good luck!
						</p>
						<div
							onClick={spinClickHandler}
							className={`${styles.wheel} wheel`}
						>
							<img
								src={wheelImg}
								alt="wheel with options to win discount"
							/>
							<div className={styles.wheelCoursor}>
								<img
									src={wheelCoursorImg}
									alt="coursor in the center of the wheel"
								/>
								<span className={styles.coursorText}>SPIN</span>
							</div>
						</div>
					</div>
				) : (
					""
				)}

				{showProduct ? (
					<div className={styles.orderOffer}>
						<img
							className={styles.orderImg}
							src={orderImg}
							alt="Noor bottle with the scalp gift"
						/>
						<div className={styles.orderContent}>
							<div className={styles.checkMark}>
								<img
									src={redTickImg}
									alt="red tick"
								/>
								<p className={styles.checkMarkText}>Noor Hair Love Serum</p>
							</div>
							<OrderButton outerStyles={styles.orderButton}>Click here for FREE bottle</OrderButton>
							<p className={styles.boldText}>
								LIMITED Discounted Supply AVAILABLE as of: <time dateTime={dateAttr}>{dateStr}</time>
							</p>
							<p className={styles.yellowText}>
								Secure Your <span>EXCLUSIVE DEAL</span>, Just Pay Shipping!
							</p>
						</div>
					</div>
				) : (
					""
				)}
			</div>

			{showModal ? (
				<div className={styles.offerPopupWrapper}>
					<div className={styles.offerPopup}>
						<h3 className={styles.header}>Congratulations!</h3>
						<p className={styles.message}>
							You get a FREE Bottle of Noor Hair Love Serum
							<br />
							<small>Secure Your EXCLUSIVE DEAL And Only Pay For Shipping!</small>
						</p>
						<button
							onClick={() => setShowModal(false)}
							className={styles.closePopup}
						>
							OK
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</section>
	);
}
