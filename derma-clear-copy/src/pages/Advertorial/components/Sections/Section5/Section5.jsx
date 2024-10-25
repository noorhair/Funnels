import Image from "../../../ui/Image/Image.jsx";
import image8 from "@images/Advertorial/image_8.gif";
import image9 from "@images/Advertorial/image_9.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";

export default function Section5() {
	return (
		<section>
			<SectionHeader>What Is the Essence of This Hair Rejuvenation Method?</SectionHeader>
			<p>Our hair follicles can become dormant due to stress, hormonal imbalances, and environmental factors.</p>
			<p>
				Unfortunately, modern life has increased our exposure to these stressors, leading to thinning hair and loss.
			</p>
			<p>
				Dr. Pezad's method revitalizes these dormant follicles by delivering potent antioxidants directly to the
				scalp, reactivating hair growth at the root.
			</p>
			<Image
				imageDesktop={image8}
				isLazy={true}
			/>
			<p>
				The secret lies in a rare form of Italian olive oil rich in <b>tocopheryl acetate</b> — a powerful
				antioxidant known to combat oxidative stress in the scalp.
			</p>
			<p>
				She found references to this in ancient texts, noting that women in Tuscany had used this extract for
				centuries to maintain their lush, thick hair.
			</p>
			<p>But over time, this knowledge was forgotten.</p>
			<p>Now, you can also benefit from this ancient remedy to rejuvenate your hair.</p>
			<Image
				imageDesktop={image9}
				isLazy={true}
			/>
		</section>
	);
}
