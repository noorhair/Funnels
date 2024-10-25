import Image from "../../../ui/Image/Image.jsx";
import image6 from "@images/Advertorial/image_6.webp";
import image7 from "@images/Advertorial/image_7.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";

export default function Section4() {
	return (
		<section>
			<SectionHeader>A New Method of Reactivating Hair Follicles</SectionHeader>
			<p>She decided to apply this newfound knowledge.</p>
			<p>
				Initially, she tried to create the remedy at home by blending various oils and extracts, but without
				specialized equipment, the results were inconsistent.
			</p>
			<p>But she was determined, and this method needed to be developed.</p>
			<Image
				imageDesktop={image6}
				isLazy={true}
			/>
			<p>
				Fortunately, she gained access to the university's state-of-the-art laboratory, allowing her to experiment
				with precision.
			</p>
			<p>After months of trial and error...</p>
			<p>...Dr. Pezad managed to perfect the formula.</p>
			<p>All this was necessary to test this hair rejuvenation method.</p>
			<p>
				She first tested her research on herself. And in 14 days, she noticed significant improvements in her hair's
				thickness and vitality.
			</p>
			<p>
				<b>Then, after 28 days, her hair was fuller and healthier than it had been in years.</b>
			</p>
			<Image
				imageDesktop={image7}
				isLazy={true}
			/>
		</section>
	);
}
