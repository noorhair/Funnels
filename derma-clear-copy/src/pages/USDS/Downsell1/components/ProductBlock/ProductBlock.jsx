import ProductTopBlock from "../../../ui/ProductTopBlock/ProductTopBlock";
import styles from "./ProductBlock.module.scss";
import ProductImg from "@images/USDS/product_us1.webp";
import PaymentsImg from "@images/payment_methods.webp";
import { evaluateFetchPost } from "@logic/utils";
import { useNavigate } from "react-router-dom";
import { addUpsaleService } from "@logic/services";
import { DS1_PRODUCT_ID, CAMPAING_ID } from "@logic/consts";

export default function ProductBlock({ discountPrice }) {
	const navigate = useNavigate();
	const noorOrderId = sessionStorage.getItem("noorOrderId");
	const handleClick = async () => {
		if (noorOrderId) {
			await evaluateFetchPost(addUpsaleService, {
				orderId: noorOrderId,
				product1_id: DS1_PRODUCT_ID,
				campaignId: CAMPAING_ID,
			}).then(() => {
				const orderData = JSON.parse(sessionStorage.getItem("orderData"));
				orderData && orderData.items.push({ price: 48, shipping: 0 });
				sessionStorage.setItem("orderData", JSON.stringify(orderData));
				navigate("/love-serum/ds2");
			});
		}
	};

	return (
		<ProductTopBlock>
			<section className={styles.productBlock}>
				<div className={styles.productImg}>
					<img
						src={ProductImg}
						alt="three bottles of noor product with badges of free shipping and saving money"
					/>
				</div>
				<div className={styles.productContent}>
					<p className={styles.redText}>
						<b>** huge discount applied **</b>
					</p>
					<h2 className={styles.heading}>Noor 3 Bottles Package</h2>
					<p className={styles.redLineThrough}>$299 $99</p>
					<p className={styles.price}>
						<b>ONLY $48</b>
					</p>
					<p className={styles.redText}>
						<b>$16 Per Bottle</b>
					</p>
					<p className={styles.message}>
						ONE TIME FEE - NO SUBSCRIPTION - <span className={styles.greenText}>FREE SHIPPING</span>
					</p>
					<button
						className={styles.yesBtn}
						onClick={() => handleClick()}
					>
						Yes! Upgrade My Order!
					</button>
					<button
						className={styles.yesLnk}
						onClick={() => handleClick()}
					>
						Yes! Upgrade My Order!
					</button>
					<img
						src={PaymentsImg}
						className={styles.paymentsImg}
						alt="payment methods"
					/>

					<button
						className={styles.noBtn}
						onClick={() => navigate("/love-serum/ds2")}
					>
						No, I'll pass on this offer
					</button>
				</div>
			</section>
			<p className={styles.noText}>
				No thanks, I don't want to ensure my hair regrowth with these amazing hair-thickening nutrients for only $
				{discountPrice} for 3 months. I'm aware I will never see this offer so low again.
			</p>
		</ProductTopBlock>
	);
}
