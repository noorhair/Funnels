import Image from "../../../ui/Image/Image.jsx";
import image19 from "@images/Advertorial/image_19.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import styles from "./Section15.module.scss";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section15() {
	return (
		<section>
			<SectionHeader>
				How to Get <ProductHyperLink />?
			</SectionHeader>
			<p>Well, today is your lucky day!</p>
			<p>
				Dr. Pezad has finally received approval from her team and partners to release this <ProductHyperLink /> to
				the general public…
			</p>
			<Image
				imageDesktop={image19}
				isLazy={false}
				outerStyles={styles.outerImg}
			/>
			<p>
				Each bottle of <ProductHyperLink /> comes packed with the potent Italian olive extract rich in{" "}
				<b>tocopheryl acetate</b>.
			</p>
			<p>
				Dr. Pezad's team has invested significant resources into producing and distributing <ProductHyperLink />.
			</p>
			<p>
				Normally, a bottle of this high-quality hair rejuvenation solution would cost around <b>$100</b> a bottle.
			</p>
			<p>
				But... that's not what you'll be paying today for a bottle of <ProductHyperLink />.
			</p>
			<p>We’ll get to the real price in a second, but first...</p>
		</section>
	);
}
