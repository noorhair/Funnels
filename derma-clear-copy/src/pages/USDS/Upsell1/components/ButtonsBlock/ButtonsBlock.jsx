import MoneyBackImg from "@images/money_back_icon.webp";
import PaymentsImg from "@images/payment_methods.webp";
import styles from "./ButtonsBlock.module.scss";
import { US1_PRODUCT_ID, CAMPAING_ID } from "@logic/consts";
import { evaluateFetchPost } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { addUpsaleService } from "@logic/services";

export default function ButtonsBlock({ discountPrice }) {
	const navigate = useNavigate();
	const noorOrderId = sessionStorage.getItem("noorOrderId");

	const handleClick = async (isUpsell) => {
		if (isUpsell && noorOrderId) {
			await evaluateFetchPost(addUpsaleService, {
				orderId: noorOrderId,
				product1_id: US1_PRODUCT_ID,
				campaignId: CAMPAING_ID,
			}).then(() => {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));
				orderData && orderData.items.push({ price: 99, shipping: 0 });
				sessionStorage.setItem("orderData", JSON.stringify(orderData));
				navigate("/love-serum/us2");
			});
		} else {
			navigate("/love-serum/ds1");
		}
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.yesBtn}
				onClick={() => handleClick(true)}
			>
				Send Me 3 Bottles of Noor Healthy Hair Formula For Only ${discountPrice}
			</button>
			<button
				className={styles.yesLnk}
				onClick={() => handleClick(true)}
			>
				Send Me 3 Bottles of Noor Healthy Hair Formula For Only ${discountPrice}
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
				className={`${styles.noBtn} declineUpsellBtn`}
				onClick={() => handleClick()}
			>
				No, I'll pass on this offer
			</button>
			<p
				className={`${styles.noText} declineUpsellBtn`}
				onClick={() => handleClick()}
			>
				No thanks, I don't want to ensure my hair regrowth with these amazing hair-thickening nutrients for only $
				{discountPrice} for 3 months. I'm aware I will never see this offer so low again.
			</p>
		</div>
	);
}
