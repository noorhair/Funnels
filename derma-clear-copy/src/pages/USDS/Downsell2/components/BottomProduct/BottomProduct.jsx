import ProductImg from "@images/USDS/product_us1.webp";
import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";
import styles from "./BottomProduct.module.scss";

export default function BottomProduct({ discountPrice }) {
	return (
		<div className={styles.container}>
			<img
				src={ProductImg}
				className={styles.productImg}
				loading="lazy"
				alt="three bottles of noor product with badges of free shipping and saving money"
			/>
			<ButtonsBlock discountPrice={discountPrice} />
		</div>
	);
}
