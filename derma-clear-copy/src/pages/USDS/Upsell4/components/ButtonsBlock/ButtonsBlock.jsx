import MoneyBackImg from "@images/money_back_icon.webp";
import PaymentsImg from "@images/payment_methods.webp";
import styles from "./ButtonsBlock.module.scss";
import { evaluateFetchPost } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { addUpsaleService } from "@logic/services";
import { US4_PRODUCT_ID, CAMPAING_ID } from "@logic/consts";

export default function ButtonsBlock({ discountPrice }) {
	const navigate = useNavigate();
	const noorOrderId = sessionStorage.getItem("noorOrderId");
	const handleClick = async () => {
		if (noorOrderId) {
			await evaluateFetchPost(addUpsaleService, {
				orderId: noorOrderId,
				product1_id: US4_PRODUCT_ID,
				campaignId: CAMPAING_ID,
			}).then(() => {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));
				orderData && orderData.items.push({ price: 9.95, shipping: 0 });
				sessionStorage.setItem("orderData", JSON.stringify(orderData));
				navigate("/love-serum/thank-you");
			});
		}
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.yesBtn}
				onClick={() => handleClick()}
			>
				Yes! Send Me Both Handbooks for Only $9.95!
			</button>

			<button
				className={styles.yesLnk}
				onClick={() => handleClick()}
			>
				Yes! Send Me Both Handbooks for Only $9.95!
			</button>

			<img
				src={PaymentsImg}
				className={styles.paymentsImg}
				alt="payment methods"
			/>
			<img
				src={MoneyBackImg}
				className={styles.moneyBackImg}
				alt="money back quarantee badge"
			/>
			<button
				className={styles.noBtn}
				onClick={() => navigate("/love-serum/thank-you")}
			>
				No, I'll pass on this offer
			</button>
			<p
				className={styles.noText}
				onClick={() => navigate("/love-serum/thank-you")}
			>
				No, I don't want to unlock these simply, easy DIY remedies and secrets for thicker hair. I don't want to
				ensure my maximum hair regrowth with this sacred information that will accelerate my results. I understand
				the price is only ${discountPrice} which is 80% OFF. I'm also aware I will never see these two handbooks
				priced this low ever again.
			</p>
		</div>
	);
}
