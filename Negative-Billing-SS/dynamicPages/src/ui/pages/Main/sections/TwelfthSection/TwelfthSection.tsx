import styles from "./TwelfthSection.styles.module.scss";

import { Section } from "@sharedUI";

import img1 from "@images/section12Img1.webp";
import img2 from "@images/section12Img2.webp";
import img2Mobile from "@images/mobile/section12Img2Mobile.webp";

export default function TwelfthSection() {
	return (
		<Section className={styles.section_container}>
			<h1 className={styles.title}>What Will Happen If You Don't Take This Special Offer Today?</h1>

			<div className={styles.paragraphs_container}>
				<p>
					After helping thousands of women and men around the world achieve their hair goals, we've come to realize
					that there are two groups of people...
				</p>
				<p>
					The first type are the ones who take action. When they see an opportunity to transform their hair, live
					their best life and regain their confidence… they jump at the chance.
				</p>
				<p>
					These smart people know a great deal when they see one, and they usually lock in their auto-ship at the
					lowest price possible. But most important, they are consistent.
				</p>
				<p>They follow their routine and the results speak for themselves.</p>
				<p>
					<b>
						<mark>They get back the hair they love, and their friends and family are often amazed.*</mark>
					</b>
				</p>
			</div>

			<div className={styles.image_container}>
				<img
					src={img1}
					className={styles.img1}
					alt="feedbacks"
					loading="lazy"
				/>
			</div>

			<div className={styles.paragraphs_container}>
				<p>
					Then there is the other group. The "slackers". These people keep putting off their problems and think
					they will be solved alone. But what will really happen to these people?
				</p>
				<p>
					<b>Well, the people who don't buy Noor today will continue to experience thinning, hair loss, or hair that
					simply won't grow.✓</b>
				</p>
				<p>
					People in this group will continue to try cheap, ordinary solutions in the hope that they will work. But
					since these ordinary solutions don't target multiple causes of thin or brittle hair? They won't get
					results.
				</p>
				<p>
					There is nothing wrong with this. It's your choice. But it personally saddens us to know that these
					people will continue to struggle for years to come. 
				</p>
				<p>
					It's even worse to know that if they simply took
					action and invested in Noor, they wouldn't have to worry anymore!
				</p>
			</div>

			<div className={styles.image_container}>
				<picture>
					<source
						media="(max-width: 550px)"
						srcSet={img2Mobile}
					/>
					<source
						media="(min-width: 551px)"
						srcSet={img2}
					/>
					<img
						src={img2}
						className={styles.img2}
						alt="three women with buetiful hair"
						loading="lazy"
					/>
				</picture>
			</div>

			<div className={styles.paragraphs_container}>
				<p>It's a choice for any person to be an action taker or a procrastinator.</p>
				<p>
					But for people who are dedicated to their hair goals and are ready to take the first step to regain the
					thick, full hair of their dreams... we encourage you to go ahead and click the big green “YES” button
					today.
				</p>
			</div>
		</Section>
	);
}
