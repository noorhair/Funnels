import { useState } from "react";
import styles from "./AlertMessage.module.scss";
import sprite from "@sprites";
import { MONTH_LIST } from "@logic/consts";

export default function AlertMessage() {
	const [isMessageVisible, SetIsMessageVisible] = useState(true);

	const getCurrentDate = () => {
		const date = new Date();
		const day = date.getDate();
		const month = MONTH_LIST[date.getMonth()];
		const year = date.getFullYear();
		return `${month} ${day}, ${year}`;
	};

	return (
		<div className={`${styles.alertBox} ${isMessageVisible ? "" : styles.notVisible}`}>
			<svg className={styles.iconExclaim}>
				<use href={`${sprite}#red_exclaim`} />
			</svg>
			<p className={styles.alertText}>
				Due to increased demand for our offers with free bottles we have a limited supply. As of{" "}
				<b>{getCurrentDate()}</b> we currently have the product <b>IN STOCK</b> and are ready to ship within 24
				hours of purchase.
			</p>
			<svg
				className={styles.iconClose}
				onClick={() => SetIsMessageVisible(false)}
			>
				<use href={`${sprite}#red_close`} />
			</svg>
		</div>
	);
}
