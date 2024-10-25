import ProductImg from "@images/USDS/us3_product.webp";
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
				alt="Noor Rosemary Growth Spray Trial bottle"
			/>
			<p className={styles.productName}>Noor Rosemary Growth Spray Trial</p>

			<PriceBlock
				regularPrice="42"
				discountPrice={discountPrice}
			/>
			<TickBox
				isChecked={isChecked}
				onCheck={onCheck}
			/>
			<ButtonsBlock isChecked={isChecked} />
			<p
				className={`${styles.noText} declineUpsellBtn`}
				onClick={() => navigate("/love-serum/us4")}
			>
				<span>No thanks Angela.</span> I understand I can’t get Noor Rosemary Growth Spray anywhere else for the VIP
				price. I like to do things the hard, slow way and figure out on my own… I’m happy to pass up on this
				exclusive opportunity knowing that if I want to try out the Noor Rosemary Growth Spray in the future, I will
				have to pay the full $42 price. I’ll pass on this trial Noor Rosemary Growth Spray bottle.
			</p>
		</div>
	);
}
