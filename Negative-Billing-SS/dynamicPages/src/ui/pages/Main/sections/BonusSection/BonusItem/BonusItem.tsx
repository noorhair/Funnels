import styles from "./BonusItem.styles.module.scss";
import { BonusProps } from "./BonusItem.protypes";

export default function BonusItem({ image, title, children, isFullWidth = false }: BonusProps) {
	return (
		<div className={`${styles.item_container} ${isFullWidth && styles.full_width}`}>
			<img
				className={`${isFullWidth && styles.full_width}`}
				src={image}
				alt="bonus"
				loading="lazy"
			/>
			<div className={styles.text_container}>
				{title ? <h3 className={styles.title}>{title}</h3> : ""}
				<div className={styles.text}>{children}</div>
			</div>
		</div>
	);
}
