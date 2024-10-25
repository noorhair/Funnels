import styles from "./PriceBlock.module.scss";
import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";

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
				</div>
			</div>
			<ButtonsBlock discountPrice={discountPrice} />
		</div>
	);
}
