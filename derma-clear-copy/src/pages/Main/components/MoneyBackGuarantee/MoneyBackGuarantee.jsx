import styles from "./MoneyBackGuarantee.module.scss";
import moneyBackIcon from "@images/money_back_icon.webp";
import moneyBackIcons from "@images/money_back.webp";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";

export default function MoneyBackGuarantee() {
	return (
		<section className={styles.moneyBack}>
			<OrderButton
				outerStyles={styles.outerSubmitBtn}
				isLabel={true}
			>
				Rush My Order
			</OrderButton>
			<img
				src={moneyBackIcon}
				className={styles.topImage}
				loading="lazy"
				alt="money back guarantee badge"
			/>
			<SectionHeader outerStyles={styles.header}>100% Satisfaction, 180 Days Money Back Guarantee</SectionHeader>
			<p className={styles.text}>
				Your order today is protected by our iron-clad 180 day 100% money-back-guarantee. If you are not astonished
				at how quickly Noor works to combat thinning hair and kickstart thicker, fuller hair growth that turns heads
				and stirs up envy, then at any time in the next 180 days let us know and we'll refund every single penny of
				your investment. No questions asked.
			</p>

			<img
				src={moneyBackIcons}
				loading="lazy"
				className={styles.bottomImage}
				alt="money back guarantee row of badges"
			/>
		</section>
	);
}
