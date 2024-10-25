import styles from "./BottomContent.module.scss";
import postUsaImg from "@images/postal_usa.webp";

export default function BottomContent() {
	return (
		<section className={styles.bottomContent}>
			<h2 className={styles.headaer}>
				<span>SURPRISE!</span> Here are some extras to help your hair survive any situation!
			</h2>
			<p className={styles.listTitle}>Buy Today and Get these BONUS Gifts...</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					A Powerful 3-Step System To Overcome Hair Loss <span className={styles.redCrossed}>($19.95 Value)</span>{" "}
					<span className={styles.darkGreen}>FREE (Save $19.95)</span>
				</li>
				<li className={styles.listItem}>
					10 Secrets Hollywood Dermatologists Don’t Want You To Know About Growing Thicker Hair{" "}
					<span className={styles.redCrossed}>($19.95 Value)</span>{" "}
					<span className={styles.darkGreen}>FREE (Save $19.95)</span>
				</li>
				<li className={styles.listItem}>
					Insured Fast Shipping <span className={styles.redCrossed}>($10 Value)</span>{" "}
					<span className={styles.darkGreen}>FREE (Save $10)</span>
				</li>
			</ul>
			<p className={`${styles.redCrossed} ${styles.bold}`}>Total Value: $50</p>
			<p className={styles.bold}>
				Place Your Order <span className={styles.darkGreen}>TODAY</span> and SAVE{" "}
				<span className={styles.darkGreen}>$50!</span>
			</p>
			<div className={styles.postal}>
				<h3 className={styles.postalHeader}>How fast will I receive my order?</h3>
				<div className={styles.content}>
					<p className={styles.text}>
						All orders taken Monday through Friday ship within 1 business day. Weekend orders ship first thing
						Monday. Standard shipping in the United States is 2-5 business days. International shipping is 7 to 12
						business days. All products ship from Florida.
					</p>
					<img
						src={postUsaImg}
						loading="lazy"
						alt="USA postal service"
					/>
				</div>
			</div>
		</section>
	);
}
