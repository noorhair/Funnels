import MoneyBackImg from "@images/money_back_icon.webp";
import PaymentsImg from "@images/payment_methods.webp";
import styles from "./ButtonsBlock.module.scss";

export default function ButtonsBlock({ discountPrice }) {
	return (
		<div className={styles.container}>
			<button className={styles.yesBtn}>
				Send Me 3 Bottles of Noor Healthy Hair Formula For Only ${discountPrice}
			</button>
			<button className={styles.yesLnk}>
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
			<button className={styles.noBtn}>No, I'll pass on this offer</button>
			<p className={styles.noText}>
				No thanks, I don't want to ensure my hair regrowth with these amazing hair-thickening nutrients for only $
				{discountPrice} for 3 months. I'm aware I will never see this offer so low again.
			</p>
		</div>
	);
}
