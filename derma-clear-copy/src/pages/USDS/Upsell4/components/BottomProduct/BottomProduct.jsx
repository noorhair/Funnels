import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";
import styles from "./BottomProduct.module.scss";
import PriceBlock from "../PriceBlock/PriceBlock";
import BookPosterImg from "@images/USDS/us4_poster.webp";

export default function BottomProduct({ discountPrice, isChecked, onCheck }) {
	return (
		<div className={styles.container}>
			<img
				src={BookPosterImg}
				className={styles.productImg}
				loading="lazy"
				alt="poster of pages of the books"
			/>
			<PriceBlock
				regularPrice="49"
				discountPrice={discountPrice}
			/>

			<ButtonsBlock discountPrice={discountPrice} />
		</div>
	);
}
