import ProductImg from "@images/USDS/us2_product.webp";
import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";
import styles from "./BottomProduct.module.scss";
import PriceBlock from "../PriceBlock/PriceBlock";
import TickBox from "../TickBox/TickBox";
import { useNavigate } from "react-router-dom";

export default function BottomProduct({ discountPrice, isChecked, onCheck }) {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Only $9.99 today For Noor VIPs (you!)</p>
			<img
				src={ProductImg}
				className={styles.productImg}
				loading="lazy"
				alt="three bottles of noor product with badges of free shipping and saving money"
			/>
			<p className={styles.productName}>Noor Hydrolyzed Collagen Peptides Powder Trial</p>

			<PriceBlock
				regularPrice="49"
				discountPrice={discountPrice}
			/>
			<TickBox
				isChecked={isChecked}
				onCheck={onCheck}
			/>
			<ButtonsBlock isChecked={isChecked} />
			<p
				className={`${styles.noText} declineUpsellBtn`}
				onClick={() => navigate("/love-serum/us3")}
			>
				<span>No thanks Angela.</span> I understand I can’t get Noor Hydrolyzed Collagen Peptides anywhere else for
				the VIP price. I like to do things the hard, slow way and figure out on my own… I’m happy to pass up this
				exclusive opportunity knowing that if I want to try out the Noor Hydrolyzed Collagen Peptides in the future,
				I will have to pay the full $49 price. I’ll pass on this trial Noor Hydrolyzed Collagen bottle
			</p>
		</div>
	);
}
