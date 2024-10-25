import Image from "../../../ui/Image/Image.jsx";
import image14 from "@images/Advertorial/image_14.webp";
import image15 from "@images/Advertorial/image_15.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section12() {
	return (
		<section>
			<SectionHeader>This Is the Easiest Way to Rejuvenate Your Hair</SectionHeader>
			<p>
				<b>Why is this the easiest way to improve your hair?</b>
			</p>
			<p>You just apply the serum twice a day. And you can also see dramatic results in just 28 days!</p>
			<p>No drastic changes needed!</p>
			<p>No complicated routines.</p>
			<p>Don't you believe it?</p>
			<p>See how Laura transformed her hair in just one month:</p>
			<Image
				imageDesktop={image14}
				isLazy={true}
			/>
			<p>
				<b>She said:</b> "I was skeptical about <ProductHyperLink />
				... but after 30 days, my hair is fuller and healthier than it's been in years. It's so easy to use. Thank
				you, Dr. Pezad!"
			</p>
			<p>And here's Emily's experience after six weeks:</p>
			<Image
				imageDesktop={image15}
				isLazy={true}
			/>
			<p>
				<b>She said:</b> "I've tried everything for my thinning hair. Nothing worked until I tried{" "}
				<ProductHyperLink />. Now, my hair looks amazing, and I feel confident again."
			</p>
		</section>
	);
}
