import styles from "./ProductImg.module.scss";
import productImg from "@images/product.webp";

export const ProductImg = ({ outerStyles }) => {
	return (
		<div className={`${styles.images} ${outerStyles}`}>
			<img
				src={productImg}
				className={styles.productImg}
				loading="lazy"
				alt="product"
			/>
			<img
				src={productImg}
				className={styles.productImg2}
				loading="lazy"
				alt="product"
			/>
		</div>
	);
};
