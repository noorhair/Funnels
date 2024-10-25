import styles from "./Feedbacks2.module.scss";
import List from "./List/List";
import fbImg4 from "@images/feedback_4.webp";
import fbImg5 from "@images/feedback_5.webp";
import fbImg6 from "@images/feedback_6.webp";

export default function Feedbacks2() {
	const feedbacksList = [
		{
			image: fbImg4,
			title: "My hair Is Growing!",
			author: "Alexa S., 48",
			text: "“I saw an article from Noor talking about how thousands of women used this serum and how it worked in a few days… I didn’t believe it at first but WOW my hair changed so much in the first few weeks. My hair is coming back after years of neglect thinking it would never be the same again. Now my edges are growing in and I feel like my hair is stronger than ever. My sister and my mom told me my hair looks better than last week so I Knew I had to write a review. Thanks so much for finally helping my hair grow!”*",
		},
		{
			image: fbImg5,
			title: "Thicker Than Ever",
			author: "Frida G., 63",
			text: "“Since it was free I decided to test it out… Worse case I stopped using but I never expected it to become my favorite one! My hair is stronger and healthier than before. I think that the natural ingredients are what makes all the difference. I haven't seen any other product that has this many transformations. I just got my 3rd bottle because it’s that good. Plus, it smells amazing and doesn’t leave my hair oily.”*",
		},
		{
			image: fbImg6,
			title: "Works for Me",
			author: "Jasmine C., 71",
			text: "“I usually never write reviews, but Noor really deserves one… My hair was thinning and falling out for years. I don’t know why but all I know is that after 3 weeks with Noor, I don’t clog up the shower anymore… Noor is sooo good. I’m in love with the serum, smells great, not too oily, not watery, perfect mix. Highly recommend it if you are struggling with thin hair or hair loss.”*",
		},
	];

	return (
		<section className={styles.feedbacks}>
			<List items={feedbacksList} />
		</section>
	);
}
