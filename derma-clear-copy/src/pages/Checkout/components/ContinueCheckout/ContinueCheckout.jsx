import styles from "./ContinueCheckout.module.scss";
import continueCheckoutImg from "@images/continue_checkout.webp";
import { Link } from "react-scroll";

export default function ContinueCheckout() {
	return (
		<section className={styles.continueCheckout}>
			<Link
				to={"billingForm"}
				className={styles.button}
				duration={1200}
				smooth={true}
			>
				Continue Checkout
			</Link>

			<img
				src={continueCheckoutImg}
				alt="checkout providers"
			/>
		</section>
	);
}
