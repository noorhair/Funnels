import Image from "../../../ui/Image/Image.jsx";
import goldenSerumImg from "@images/Advertorial/golden_serum.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import styles from "./Section11.module.scss";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section11() {
	return (
		<section>
			<SectionHeader>What Kind of Serum Is It?</SectionHeader>
			<Image
				imageDesktop={goldenSerumImg}
				outerStyles={styles.image}
				isLazy={true}
			/>
			<p>
				It is called <ProductHyperLink />
			</p>
			<p>And it gives your scalp the boost it needs to reactivate dormant hair follicles.</p>
			<p>It nourishes your scalp, combats oxidative stress, and promotes healthy hair growth.</p>
			<p>
				<ProductHyperLink /> not only rejuvenates your hair but also improves scalp health.
			</p>
			<p>...and what's the best thing?</p>
			<p>
				To achieve these results, you do not need to undergo expensive treatments or change your hair care routine
				dramatically.
			</p>
		</section>
	);
}
