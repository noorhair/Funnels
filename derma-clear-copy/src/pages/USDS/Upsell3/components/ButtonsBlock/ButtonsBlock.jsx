import MoneyBackImg from "@images/money_back_icon.webp";
import PaymentsImg from "@images/payment_methods.webp";
import styles from "./ButtonsBlock.module.scss";
import { evaluateFetchPost } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { addUpsaleService } from "@logic/services";
import { US3_PRODUCT_ID, CAMPAING_ID } from "@logic/consts";

export default function ButtonsBlock({ isChecked }) {
	const navigate = useNavigate();
	const noorOrderId = sessionStorage.getItem("noorOrderId");
	const handleClick = async () => {
		if (noorOrderId) {
			await evaluateFetchPost(addUpsaleService, {
				orderId: noorOrderId,
				product1_id: US3_PRODUCT_ID,
				campaignId: CAMPAING_ID,
			}).then(() => {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));
				orderData && orderData.items.push({ price: 0, shipping: 9.99 });
				sessionStorage.setItem("orderData", JSON.stringify(orderData));
				navigate("/love-serum/us4");
			});
		}
	};

	return (
		<div className={styles.container}>
			<button
				className={`${styles.yesLnk} ${!isChecked ? styles.yesLnkRestricted : ""}`}
				onClick={() => isChecked && handleClick()}
			>
				Add my First Rosemary Growth Spray Bottle to My order!
			</button>
			<button
				className={`${styles.yesBtn} ${!isChecked ? styles.yesBtnRestricted : ""}`}
				onClick={() => isChecked && handleClick()}
			>
				Add my First Rosemary Growth Spray Bottle to My order!
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
		</div>
	);
}
