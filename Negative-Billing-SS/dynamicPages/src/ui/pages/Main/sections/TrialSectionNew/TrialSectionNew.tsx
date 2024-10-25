import styles from "./TrialSectionNew.styles.module.scss";
import { Section } from "@sharedUI";
import { sendGAClickEvent, sendMetaClickEvent, sendMetaAddToCarEvent, /*sendMetaEvent*/ } from "@logic/utils";
import freeTrialImg from "@images/freeTrial.webp";
import ratingImg from "@images/raiting_offer.webp";
import sslmoneyBack from "@images/SSL-MoneyBack.webp";
import massagerImg from "@images/massager.webp";

import { BASE_PATH_DYNAMIC_CHECKOUT, FIRS_PAGE_PRODUCT_ID } from "@logic/consts";

export default function TrialSectionNew() {

	// let ipAddress = "";
	// fetch('https://api.ipify.org?format=json')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		ipAddress = data.ip;
	// 	})
	// 	.catch(error => {
	// 		console.error('Error fetching IP:', error);
	// 	});


	const clickEventHandler = async () => {
		sendGAClickEvent();
		sendMetaClickEvent();
		sendMetaAddToCarEvent();

		// await sendMetaEvent("AddToCart", {
		// 	value: 12.95,
		// 	currency: "USD",
		// 	client_ip_address: ipAddress,
		// 	client_user_agent: window?.navigator?.userAgent,
		// 	products: [{
		// 		product_id: "1134",
		// 		quantity: 1,
		// 	}],
		// });

		location.href = location.origin + BASE_PATH_DYNAMIC_CHECKOUT + "/checkout?productId=" + String(FIRS_PAGE_PRODUCT_ID);
	};

	return (
		<Section
			className={styles.section_container}
			isBeige
		>
			<div className={`${styles.content_trial} trialSection`}>
				<div className={styles.section_left}>
					<div className={styles.image}>
						<img
							src={freeTrialImg}
							alt="Noor super hair serum"
							loading="lazy"
						/>
					</div>
					<div className={styles.reviews}>
						<img
							className={styles.rating_img}
							src={ratingImg}
							alt="rating"
							loading="lazy"
						/>
						<div className={styles.massager}>
						<div className={styles.massager_image}><img src={massagerImg} alt="massager" /></div>
						<div className={styles.massager_info}><p><span>Order Now and Receive Special Gift</span></p> <p>Free Noor Scalp Massager!</p></div>
						<div>
							<p>$0.00</p>
							<p className={styles.massager_info_discount}>$17.95</p>
						</div>
					</div>
					</div>
					
				</div>
				<div className={styles.section_right}>
					<h2 className={styles.title}>
						Claim Your <span>FREE Bottle</span> Of Noor Super Serum Today{" "}And Kickstart Thicker, Fuller Hair In A Few
						Weeks!
					</h2>
					<div className={styles.mobile_img}>
						<div className={styles.image}>
							<img
								src={freeTrialImg}
								alt="Noor super hair serum"
								loading="lazy"
							/>
						</div>
						<div className={styles.massager}>
							<div className={styles.massager_image}><img src={massagerImg} alt="massager" /></div>
							<div className={styles.massager_info}><p><span>Order Now and Receive Special Gift</span></p> <p>Free Noor Scalp Massager!</p></div>
							<div>
								<p>$0.00</p>
								<p className={styles.massager_info_discount}>$17.95</p>
							</div>
						</div>
						<div className={styles.reviews}>
							<img
								className={styles.rating_img}
								src={ratingImg}
								alt="rating"
							/>
						</div>
					</div>
					<div className={styles.pricing_section}>
						<div className={styles.prices}>
							<p>REGULARLY</p>
							<p>
								<s>$67</s>
							</p>
						</div>
						<div className={styles.prices}>
							<p>YOUR RATE TODAY</p>
							<p>$0</p>
							<span>+$12.95 Shipping</span>
						</div>
					</div>
					<div
						onClick={clickEventHandler}
						className={styles.button}
					>
						Yes Send Me My First Super Serum For Free!
					</div>
					<img
						className={styles.moneyback_img}
						src={sslmoneyBack}
						alt="ssl money back"
						loading="lazy"
					/>
					<p className={styles.text}>
						On the next page after you place your order you agree to receive a{" "}
						<b>
							Noor Super Serum bottle for FREE, and pay just $12.95 shipping fee to ensure you get PRIORITY
							SHIPPING.
						</b>
					</p>
					<p className={styles.small_text}>
						If after 30 days you don't cancel your Super Serum autoship you will NEVER pay the regular rate of $67
						and will receive a discount of just $49.95 + $0 shipping per month for your bottle for as long as you
						desire. If you wish to end your priority autoship at any time, just let me know…
					</p>
					<p className={styles.text}>
						<b>And you are covered by our 180 Days - 100% Money Back Guarantee!</b>
					</p>
				</div>
			</div>
		</Section>
	);
}
