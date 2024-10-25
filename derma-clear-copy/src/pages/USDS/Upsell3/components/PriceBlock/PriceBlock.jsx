import styles from "./PriceBlock.module.scss";

export default function PriceBlock({ regularPrice, discountPrice }) {
	return (
		<div>
			<div className={styles.price}>
				<div className={styles.left}>
					<p className={styles.title}>REGULARLY</p>
					<p className={styles.value}>${regularPrice}</p>
				</div>
				<div className={styles.right}>
					<p className={styles.title}>
						YOUR <b>VIP RATE</b>
					</p>
					<p className={styles.value}>${discountPrice}</p>
					<p className={styles.shipping}>+$9.99 Shipping</p>
				</div>
			</div>
		</div>
	);
}
