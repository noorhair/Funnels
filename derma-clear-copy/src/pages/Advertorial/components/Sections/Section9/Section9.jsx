import Image from "../../../ui/Image/Image.jsx";
import image13 from "@images/Advertorial/image_13.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import styles from "./Section9.module.scss";

export default function Section9({ dateAttr, dateStr }) {
	return (
		<section>
			<SectionHeader>This Time of Year Is the Best Time to Try This</SectionHeader>
			<p>Dr. Pezad and her team have just produced the first batches of this serum.</p>
			<p>And when it's fresh, the active ingredients are most potent.</p>
			<p>Faster... STRONGER... hair rejuvenation.</p>
			<p>
				But you better hurry up, because this new stock is running out <b>FAST</b>:
			</p>
			<Image
				imageDesktop={image13}
				outerStyles={styles.image}
				isLazy={true}
			/>
			<p className={styles.yellowText}>
				<i>
					Stock Update: ALMOST GONE. LIMITED Discounted Supply AVAILABLE as of:{" "}
					<time dateTime={dateAttr}>{dateStr}</time>
				</i>
			</p>
			<p>Imagine if you could get this serum before the current batch ends?</p>
			<p>You could style your hair the way you've always wanted.</p>
			<p>And you'll feel happier, more confident!</p>
			<p>But why does Dr. Pezad want to produce this serum?</p>
		</section>
	);
}
