import { useEffect, useState } from "react";
import styles from "./FirstSection.styles.module.scss";

import { Section } from "@sharedUI";
import { TestimonialCard } from "@pagesUI/Main/components";

import doctorIMG from "@images/doctor.webp";
import checkImg from "@images/checkImg.webp";
import img1 from "@images/section1Img1.webp";
import img1Mobile from "@images/mobile/section1Img1Mobile.webp";
import img2 from "@images/section1Img2.webp";
import img2Mobile from "@images/mobile/section1Img2Mobile.webp";
import img3 from "@images/section1Img3.webp";
import img3Mobile from "@images/mobile/section1Img3Mobile.webp";

export default function FirstSection() {
	const [currentDate, setCurrentDate] = useState("");

	useEffect(() => {
		const date = new Date();
		const options = { year: "numeric", month: "long", day: "2-digit" };
		//@ts-ignore
		const formattedDate = date.toLocaleDateString("en-US", options);
		setCurrentDate(formattedDate);
	}, []);

	return (
		<Section className={styles.section_container}>
			<div className={styles.doctor_container}>
				<img
					src={doctorIMG}
					alt="Doctor img"
				/>
				<div className={styles.doctor_texts_container}>
					<p className={styles.doctor_name}>{currentDate}</p>
					<p className={styles.doctor_text}>From the desk of Medical Researcher Henry Lock</p>
				</div>
			</div>

			<div className={styles.paragraphs_container}>
				<p>Hi there,</p>
				<p>
					Today I want to tell you about a new product that could very well <b>change your life.</b>
				</p>
				<p>
					A product that will make you smile when you look in the mirror (instead of inspecting your edges in
					fear).*
				</p>
				<p>A product that is helping thousands of women recover their crowning glory… naturally.</p>
				<p>A product so strong it has even helped chemotherapy patients get back their hair.</p>
			</div>

			<div className={styles.testimonal_card_container}>
				<TestimonialCard
					img={img1}
					imgMobile={img1Mobile}
					nameAndAge="Blanche W., 64"
					title="“Miraculous“"
					date="03/24/2024"
					lastParagraph="“Recovering from hair loss due to chemotherapy. This product delivers what it promises. Thank God I am going back to the barbershop.”*"
				/>
			</div>

			<div className={styles.paragraphs_container}>
				<p>If it can work for even the most hopeless hair loss cases, I promise it can work for you too.*</p>
				<p>
					<b>
						<mark>It doesn't matter how old you are or what your hair goals are…</mark>
					</b>
				</p>
				<p>Because this product has helped:</p>
				<p className={styles.paragraph_with_image}>
					<img
						src={checkImg}
						alt="check img"
					/>
					Women who just started noticing a bit of thinning.
				</p>
				<p className={styles.paragraph_with_image}>
					<img
						src={checkImg}
						alt="check img"
					/>
					Women who have been losing clumps for a few years now.
				</p>
				<p className={styles.paragraph_with_image}>
					<img
						src={checkImg}
						alt="check img"
					/>
					Even women who were on the brink of baldness.
				</p>
				<p>It’s called the Noor Hair Super Serum…</p>
				<p>
					And I'm so confident <u>it will transform your hair</u> that if you agree to read my little post here…
				</p>
			</div>

			<h1 className={styles.section_title}>I’m going to let you try it today for FREE.</h1>

			<div className={styles.paragraphs_container}>
				<p>If you’re skeptical or think this is all a bunch of BS… trust me, I totally understand.</p>
				<p>You may have heard these promises before, and they went unfulfilled. I get it.</p>
				<p>Maybe you tried a prescription medication that made your hair fall out at first.</p>
				<p>Maybe you fell for those gimmicky electric scalp massagers or red light helmets.</p>
				<p>Maybe you tried a top selling vitamin or supplement that you saw online.</p>
				<p>And while these solutions work for some lucky people…</p>
				<p>They definitely don’t work for everyone… which is probably why you’re here.</p>
				<p>
					<b>
						<mark>
							Well let me be the first to say: <u>this time is different.</u>
						</mark>
					</b>
				</p>
				<p>
					You’re about to discover why minoxidil companies HATE this all-natural, root rejuvenation dropper. And
					more importantly…
				</p>
			</div>

			<h1 className={styles.section_title_2}>
				How Anyone, Regardless Of Age, Ethnicity, And Genes, Can Use It To Win The Battle Against Hair Loss,
				Shedding, Or Lackluster Growth.✓
			</h1>

			<div className={styles.paragraphs_container}>
				<p>My friend, if you have hope in regrowing your hair naturally… you’re in the right place.</p>
				<p>Just hear what some people had to say that were lucky enough to try it*:</p>
			</div>

			<div className={styles.testimonal_card_container}>
				<TestimonialCard
					img={img2}
					imgMobile={img2Mobile}
					nameAndAge="Sabine M., 61"
					title="“This is the best product on the market today”"
					date="05/18/2024"
					lastParagraph="“I’ve been going through menopause for 6 years. And my hair just started falling out. And it got dry. It wouldn’t hold any style. And in the time I’ve used this product, it’s gotten much thicker. I had been wearing a hat for 6 years because I was so embarrassed to go out in public. My hair was so thin you could just see my scalp right through my hair. And now, you can’t see it. The Super Serum made my hair thicker. It’s made my hair stronger. I have less fall out. I have new hair all around my edges and hairline. I am very, very happy with it. It is the best thing on the planet right now for growing new hair. Thank you so much Noor. I love this product.”*"
				/>

				<TestimonialCard
					img={img3}
					imgMobile={img3Mobile}
					nameAndAge="Verla M., 51"
					title="“Completely filled my part”"
					date="03/06/2024"
					lastParagraph="“I started using Noor in January 2024. And the results were so amazing that I started ordering more of it. I spent decades trying to find something to grow my hair. And after a serious relapse, most of my hair came out. I had an area that was completely bald, but the Super Serum grew it back. And it’s still growing right now. In April I went to my dermatologist and she was shocked at all the growth. Thank God for Noor for creating great hair products”*"
				/>
			</div>

			<div className={styles.paragraphs_container}>
				<p>I’m not lying when I say this product could be the answer to your thick hair prayers.</p>
				<p>
					The Super Serum works unlike anything else you may have tried - <b>It uses a new hair growth method called{" "}
					<i>Root Rejuvenation</i></b>.
				</p>
				<p>More on what that is exactly in just a moment. But first…</p>
			</div>
		</Section>
	);
}
