import styles from "./TopContent.module.scss";
import doctorImg from "@images/approvedSection.webp";
import factsImg from "@images/checkout_facts.webp";
import moneyBackImg from "@images/money_back_icon.webp";
import { useEffect, useState } from "react";

export default function TopContent() {
	const [minutes, setMinutes] = useState(null);
	const [seconds, setSeconds] = useState(null);

	useEffect(() => {
		let countDownDate = new Date();
		countDownDate.setMinutes(countDownDate.getMinutes() + 15);
		let x = setInterval(function () {
			let now = new Date().getTime();
			let distance = countDownDate - now;
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / 60000);
			let seconds = Math.floor((distance % 60000) / 1000);

			setMinutes(minutes + " : ");
			setSeconds(seconds);

			if (distance < 0) {
				clearInterval(x);
				setMinutes("EXPIRED");
				setSeconds("");
			}
		}, 1000);
	}, []);

	return (
		<section className={styles.topContent}>
			<div className={styles.leftSection}>
				<h2 className={styles.topHeader}>Proven Ingredients.✓</h2>
				<div>
					<h2 className={styles.textHeader}>The Only Solution.</h2>
					<p className={styles.text}>
						It's a fact! <b>Noor is the key to thicker, longer hair growth!</b> ✓ More than 100,000 women have
						used Noor to get back the hair they love. Finally, get that long, strong, thick, beautiful hair you
						deserve.✓
					</p>
				</div>
				<div>
					<h2 className={styles.textHeader}>The Solution You MUST Have.</h2>
					<p className={styles.text}>
						<b>Noor tackles a real problem for real women.</b> Sad and suffering from the bad appearance of your
						hair? Start fighting the signs of sparse hair or hair loss today with Noor!✓
					</p>
				</div>
				<div className={styles.moneybackContainer}>
					<img
						src={moneyBackImg}
						alt="moneyback guarantee badge"
					/>
					<p className={styles.text}>
						<b>
							Try Noor today 100% risk free. Noor comes with a 180 day money back guarantee - You’re guaranteed
							to kickstart new hair growth - or you won’t pay a cent!*
						</b>
					</p>
				</div>
				<div className={styles.timerContainer}>
					<p className={styles.timerHeader}>Your Exclusive Free Trial Is Reserved For</p>
					<span className={styles.timerContent}>
						{minutes}
						{seconds}
					</span>
					<span className={styles.timerText}>Order now, before stock runs out!</span>
				</div>
			</div>
			<div className={styles.rightSection}>
				<img
					src={doctorImg}
					alt="Dr. Sanober Pezad"
				/>
				<img
					src={factsImg}
					alt="3 facts about the results of Noor"
				/>
			</div>
			<div className={styles.mobileContent}>
				<div className={styles.moneybackContainer}>
					<img
						src={moneyBackImg}
						alt="moneyback guarantee badge"
					/>
					<p className={styles.text}>
						<b>
							Try Noor today 100% risk free. Noor comes with a 180 day money back guarantee - You’re guaranteed
							to kickstart new hair growth - or you won’t pay a cent!*
						</b>
					</p>
				</div>
				<div className={styles.timerContainer}>
					<p className={styles.timerHeader}>Your Exclusive Free Trial Is Reserved For</p>
					<span className={styles.timerContent}>
						{minutes}
						{seconds}
					</span>
					<span className={styles.timerText}>Order now, before stock runs out!</span>
				</div>
			</div>
		</section>
	);
}
