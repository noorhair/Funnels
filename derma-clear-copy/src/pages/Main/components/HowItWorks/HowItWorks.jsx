import styles from "./HowItWorks.module.scss";
import productImg from "@images/product.webp";
import howItWorks1Img from "@images/howItWorks_1.webp";
import howItWorks2Img from "@images/howItWorks_3.webp";
import howItWorks3Img from "@images/howItWorks_2.webp";
import howItWorks4Img from "@images/howItWorks_4.webp";
import Badge from "./Badge/Badge";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export default function HowItWorks() {
	const [modalIndex, setModalIndex] = useState(null);

	const modalContent = [
		{
			text: (
				<>
					The first week of consistent use twice per day will show incredible results.{" "}
					<b>You’ll start to feel your scalp is at ease. No more itchiness or irritation.</b> You may notice less
					and less hair falling off as days pass…
				</>
			),
		},
		{
			text: (
				<>
					After the first 4 weeks,{" "}
					<b>
						you may begin to notice hair looking denser, mostly at the roots. Many report the hair feeling
						stronger and better “anchored” to the scalp.
					</b>{" "}
					As a bonus, you may your scalp is at east feeling healthier than before.
				</>
			),
		},
		{
			text: (
				<>
					This is when most women start noticing the real difference after 6 weeks. People start commenting on how
					your hair looks fuller, thicker, and younger.{" "}
					<b>This is when the sparse edges start to feel in, and the hair gets noticeably longer.</b>
				</>
			),
		},
		{
			text: (
				<>
					If you stick with it after a consistent couple of months{" "}
					<b>
						“problem areas” may appear partially or completely rejuvenated. Many say their hair feels like it has
						more weight
					</b>
					, is silkier, and has a more luxurious texture.
				</>
			),
		},
	];

	const howItWorksBadgesLeft = [
		{ img: howItWorks1Img, title: "1 Improved Scalp" },
		{ img: howItWorks3Img, title: "2 New Growth" },
	];

	const howItWorksBadgesRIght = [
		{ img: howItWorks2Img, title: "3 Real Difference" },
		{ img: howItWorks4Img, title: "4 Incredible Change" },
	];

	return (
		<section className={styles.howItWorks}>
			<SectionHeader>How Quickly Does Noor Love Hair Serum Work?</SectionHeader>
			<p className={styles.text}>
				Noor Love Hair Serum gives you the power to combat thinning hair, hair loss, damaged hair and sparse edges
				without risking nasty side effects. Plus, noticeable improvements can happen as fast as in the first week!
			</p>
			<div className={styles.content}>
				<div className={styles.badges}>
					{howItWorksBadgesLeft.map((item, index) => {
						return (
							<Badge
								img={item.img}
								key={item.title}
								title={item.title}
								onClick={() => setModalIndex(index === 0 ? 0 : 1)}
							/>
						);
					})}
				</div>
				<img
					src={productImg}
					loading="lazy"
					className={styles.productImg}
					alt="product"
				/>
				<div className={styles.badges}>
					{howItWorksBadgesRIght.map((item, index) => {
						return (
							<Badge
								img={item.img}
								key={item.title}
								title={item.title}
								onClick={() => setModalIndex(index === 0 ? 2 : 3)}
							/>
						);
					})}
				</div>
			</div>

			<p className={styles.preOrder}>
				Join over 103,434 women who are enjoying their rejuvenated hair today. Hurry and claim FREE your bottle now
				while the supply lasts!
			</p>
			<OrderButton
				outerStyles={styles.outerSubmitBtn}
				isLabel={true}
			>
				Rush My Order
			</OrderButton>

			{modalIndex !== null ? (
				<Modal
					index={modalIndex + 1}
					text={modalContent[modalIndex].text}
					onClose={() => setModalIndex(null)}
					onNext={() => setModalIndex(modalIndex + 1)}
				/>
			) : null}
		</section>
	);
}
