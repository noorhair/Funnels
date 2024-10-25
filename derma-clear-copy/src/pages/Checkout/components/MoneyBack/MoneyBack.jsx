import styles from "./MoneyBack.module.scss";
import moneyBackIcon from "@images/money_back_icon.webp";
import moneyBackIcons from "@images/money_back.webp";
export default function MoneyBack() {
	return (
		<section className={styles.moneyBack}>
			<div className={styles.top}>
				<img
					src={moneyBackIcon}
					loading="lazy"
					className={styles.leftSection}
					alt="money back guarantee badge"
				/>
				<div className={styles.rightSection}>
					<h2 className={styles.header}>180 DAY MONEY BACK GUARANTEE:</h2>
					<p className={styles.text}>
						Your order today is protected by our iron-clad 180 day <b>100% money-back-guarantee.</b> If in 6
						months you aren't happy and friends aren't loving your hair, you can get a quick, hassle-free refund,
						and still keep the bottles. That's how absolutely certain Noor is that you'll see incredible results
						with the Noor Love Hair Serum. That's <b>6 whole months</b> to witness the magic of{" "}
						<b>Noor-risk free.</b> We're that confident you'll adore what Noor does for you. In short, you ONLY
						pay if you're entirely satisfied.
					</p>
				</div>
			</div>

			<img
				src={moneyBackIcons}
				loading="lazy"
				className={styles.bottomImage}
				alt="money back guarantee row of badges"
			/>
		</section>
	);
}
