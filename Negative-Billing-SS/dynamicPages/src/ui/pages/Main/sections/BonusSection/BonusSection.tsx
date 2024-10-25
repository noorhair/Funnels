import styles from "./BonusSection.styles.module.scss";
import { Section } from "@sharedUI";
import BonusItem from "./BonusItem/BonusItem";
import bonusImg1 from "@images/bonus_1.webp";
import bonusImg2 from "@images/bonus_2.webp";
import bonusImg3 from "@images/bonus_3.webp";

export default function BonusSection() {
	return (
		<Section
			className={styles.section_container}
			isBeige={false}
		>
			<h1 className={styles.title}>
				Plus, if You Secure Your Free Bottle Today You Will Get Instant Access To 3 Bonuses For FREE!
			</h1>

			<div className={styles.content}>
				<div className={styles.columns_container}>
					<BonusItem
						title="BONUS #1 A Powerful 3-Step System To Overcome Hair Loss"
						image={bonusImg1}
						isFullWidth={false}
					>
						<h4>
							Retail: <span>($19.95 Value)</span> <b>Today: FREE</b>
						</h4>
						<p>
							<b>
								This system will potentially save you from spending thousands of dollars on useless products.
							</b>{" "}
							It will also save you hours of boring, nerve-wracking research.{" "}
							<b>And following a step-by-step system will ensure faster and stronger results…</b> Helping you
							look years younger thanks to thicker, stronger, and longer hair.
						</p>
					</BonusItem>
					<BonusItem
						title="BONUS #2 10 Secrets Hollywood Dermatologists Don’t Want You To Know About Growing Thicker Hair"
						image={bonusImg2}
						isFullWidth={false}
					>
						<h4>
							Retail: <span>($19.95 Value)</span> <b>Today: FREE</b>
						</h4>
						<p>
							Discover the powerful secrets used by celebrities to enjoy incredible hair for years…{" "}
							<b>Even after they hit 50, 60, or even 70!</b> For example,{" "}
							<b>The Truth About the #1 “Anti-Aging” Vitamin and Why Hollywood uses something different.</b> And
							Why your Shampoo and Conditioner might be causing more harm rather than good...
						</p>
					</BonusItem>
				</div>
				<div className={styles.vip_container}>
				<BonusItem
						title=""
						image={bonusImg3}
						isFullWidth={true}
					>
						<h3>BONUS #3 VIP Private Email And Phone Support <span>(Worth $299)</span> <b>FREE</b></h3>
						<p>
							If you have any questions about Noor and your vibrant hair goals, you’ll have unlimited access to
							get them all answered directly by me and my hair expert via a{" "}
							<b>personal one-on-one email or phone call support,</b> for life! This is easily the{" "}
							<span>most valuable</span> bonus I could ever offer, so I’ve decided to include it in this package{" "}
							<b>ONLY</b>.
						</p>
					</BonusItem>
					{/* <h3 className={styles.vip_title}>
							BONUS #3 VIP Private Email And Phone Support <span>(Worth $299)</span> <b>FREE</b>
					</h3>
					<div className={styles.vip_description}>
							<img
								src={bonusImg3}
								alt="bonus"
							/>
						<p>
							If you have any questions about Noor and your vibrant hair goals, you’ll have unlimited access to
							get them all answered directly by me and my hair expert via a{" "}
							<b>personal one-on-one email or phone call support,</b> for life! This is easily the{" "}
							<span>most valuable</span> bonus I could ever offer, so I’ve decided to include it in this package{" "}
							<b>ONLY</b>.
						</p>
					</div> */}
				</div>
			</div>
		</Section>
	);
}
