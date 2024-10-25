import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import styles from "./Feedbacks.module.scss";
import List from "./List/List";
import fbImg1 from "@images/feedback_1.webp";
import fbImg2 from "@images/feedback_2.webp";
import fbImg3 from "@images/feedback_3.webp";

export default function Feedbacks() {
	const feedbacksList = [
		{
			image: fbImg1,
			title: "It works!!!",
			author: "Judith F., 42",
			text: "“I tried using a 'viral' remedy I saw online, but it didn’t do anything for me… But then I found this free serum and it actually worked! My first 2 weeks were incredible, my hair got stronger and more manageable. My edges started getting thicker by the end of the month. I will order more as soon as I can since this serum is better than any other oil I’ve tried! Even my dermatologist asked me what I was using… I won’t stop using Noor. Thanks!”*",
		},
		{
			image: fbImg2,
			title: "Truly Grateful",
			author: "Karen C., 66",
			text: "“I had an annoying bald spot that I have been unable to get rid of for years… until now! I used many other products, with no results. Some even made things worse and they were super expensive… But Noor Hair started working in about two weeks. I thought it was just a wishful thing but here I am 2 months later and the bald spot is mostly covered. I have my mom and two of my sisters using it too. I am delighted with my results. I can't wait to look at my picture in a couple more months to see where my hair is at. Highly recommend it!”*",
		},
		{
			image: fbImg3,
			title: "I Can't Believe It!",
			author: "Marva S., 41",
			text: "“I didn't know how important it was to combat my thinning naturally... I used tons of other products that only gave me temporary solutions… After a month or so I was back to my usual thinning hair. I also tried nasty chemicals but they only made things worse for me, my scalp felt irritated and dry. Thank God I found Noor Hair because it works wonders, and smells amazing. I simply use a few drops on my scalp before bed and I’m done! My hair has never looked better.”*",
		},
	];

	return (
		<section className={styles.feedbacks}>
			<SectionHeader>Over 103,756 Real Women. With Real Results.</SectionHeader>
			<p className={styles.text}>
				Thousands of women worldwide are raving about Noor Love Hair Serum… From fighting hair loss, filling in
				sparse edges, and thickening thin, damaged hair!
			</p>
			<List items={feedbacksList} />
		</section>
	);
}
