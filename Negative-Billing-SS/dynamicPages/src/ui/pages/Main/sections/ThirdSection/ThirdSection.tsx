import styles from "./ThirdSection.styles.module.scss";

import { Section } from "@sharedUI";

import harvard from "@images/harvard.webp";
import mit from "@images/mit.webp";
import tufts from "@images/tufts.webp";

import img1 from "@images/section3Img1.webp";
import img2 from "@images/section3Img2.webp";

export default function ThirdSection() {
	return (
		<Section className={styles.section_container}>
			<h1 className={styles.title}>
				The Root Rejuvenation Breakthrough Comes From An International Hair Chemist Named Jacob Jones.
			</h1>

			<div className={styles.paragraphs_container}>
				<p>Jacob comes from a small town north of Boston, a city famous for its medical sciences.</p>
			</div>

			<div className={styles.imgs_container}>
				<img
					src={harvard}
					alt="harvard logo"
				/>
				<img
					src={mit}
					alt="mit logo"
				/>
				<img
					src={tufts}
					alt="tufts logo"
				/>
			</div>

			<div className={styles.paragraphs_container}>
				<p>A hair stylist turned chemist, he spent nearly his whole life studying WHY people lose hair.</p>
				<p>Some of his clients were women with thinning or shedding from menopause.</p>
				<p>Others had receding hairlines due to stress or their busy lifestyles.</p>
				<p>And of course, many of his clients had a family history of hair loss.</p>
				<p>Jacob tried his hardest to diagnose the correct cause of his clients’ hair loss…</p>
				<p>
					<b>But secretly he felt like he was throwing spaghetti at the wall to see what stuck.</b>
				</p>
				<p>
					I bet you can relate to that, right? One day you think the thinning is because of stress… the next day
					maybe hormones or diet.
				</p>
				<p>The truth is, even the best doctors have a hard time boiling it down to a single cause…</p>
				<p>
					<b>
						<mark>
							Hair loss is complex, and you won’t see results unless the solution is holistic (fights multiple
							causes at once).✓
						</mark>
					</b>
				</p>
				<p>Well, Jacob decided enough was enough. It was time to take matters into his own hands…</p>
				<p>He decided to make his own product he could actually feel confident recommending.</p>
				<p>
					<b>A product that could effectively cover ALL causes of hair loss, not just one or two.</b>
				</p>
				<p>It wasn’t easy. It took years of painstaking research. Years of frustrating trial and error…</p>
				<p>But finally Jacob developed a breakthrough formula that changed everything.</p>
			</div>

			<img
				src={img1}
				alt="scientist"
			/>

			<div className={styles.paragraphs_container}>
				<p>The Super Serum was an instant hit. This is what he told me:</p>
				<p>
					<i>
						“Listen to me. I’ve been a hair stylist for 20 years, and this is the first product I’ve created that
						I keep selling, month after month.”
					</i>
				</p>
				<p>He said at first he gave it to his wife and other family members…</p>
				<p>
					And the results were unbelievable. <b>They quickly noticed less hair fall and even new baby hairs.*</b>
				</p>
				<p>
					Soon after, word got out. That’s when the elites of Boston started seeing Jacob in hopes of getting their
					hands on his formula.
				</p>
				<p>
					It became the secret weapon of high society women.{" "}
					<b>They used it to look 25 ‘forever’ by maintaining their thick, luscious hair.*</b>
				</p>
			</div>

			<img
				src={img2}
				alt="women with a lot of hair"
			/>

			<div className={styles.paragraphs_container}>
				<p>
					<i>
						“I can’t keep up with the demand. These women are going crazy for this… because it WORKS! AND it’s
						natural!”
					</i>
				</p>
				<p>Trust me, as someone with a background in medical research, I’m skeptical of just about everything…</p>
				<p>But Jacob was persistent:</p>
				<p>
					<i>“It’s not fair. ALL women deserve access to this wonder formula, not just the elites I work with.”</i>
				</p>
				<p>His dream was to get the Super Serum into the hands of every woman in America with thin hair…</p>
				<p>But unfortunately he didn’t have the means to do so himself.</p>
				<p>He begged and begged to work with our brand, Noor Hair…</p>
				<p>
					<b>
						<mark>
							He said this formula was a “gift from God” and that it NEEDED to go mainstream. He even said he
							would give it away for free.
						</mark>
					</b>
				</p>
				<p>That’s how much he believed in his mission.</p>
				<p>So to make sure Jacob wasn’t full of rubbish, this is what we did:</p>
			</div>
		</Section>
	);
}
