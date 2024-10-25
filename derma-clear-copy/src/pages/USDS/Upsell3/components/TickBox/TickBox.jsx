import { useState } from "react";
import styles from "./TickBox.module.scss";

export default function TickBox({ isChecked, onCheck }) {
	return (
		<>
			<div
				className={`${styles.container} ${isChecked ? styles.checkedContainer : ""}`}
				onClick={onCheck}
			>
				<div className={styles.topBox}>
					<div className={styles.checkboxContainer}>
						<input
							className={`${styles.pulsingCheckbox} ${isChecked ? styles.checked : ""}`}
							type="checkbox"
						/>
					</div>
					<p>
						<b>Yes! Give Me My First Rosemary Growth Spray Bottle For Free!</b>
					</p>
				</div>
				<div className={styles.bottomText}>
					By checking this box you agree to receive a Noor Rosemary Growth Spray Bottle, and pay just $9.99
					shipping fee. If after 30 days you don't cancel your Noor Rosemary membership you will NEVER pay the
					regular rate of $42 and you will receive a discount of just $29.95 + $0 shipping per month for your
					bottle for as long as you desire. If you wish to end your membership at any time, just let me know. Easy
					to cancel…*
				</div>
			</div>
			<p className={`${styles.redText} ${isChecked ? styles.hideRedText : ""}`}>
				Make sure to check the box above to get your free bottle*
			</p>
		</>
	);
}
