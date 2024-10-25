import Image from "../../../ui/Image/Image.jsx";
import image16 from "@images/Advertorial/image_16.webp";
import image16_1 from "@images/Advertorial/image_16_1.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section13() {
	return (
		<section>
			<SectionHeader>Is There a Risk of the Hair Thinning Again?</SectionHeader>
			<p>No, there's no risk of reverting to thinning hair.</p>
			<p>Amy had been struggling with hair loss for years. She tried all sorts of treatments and products.</p>
			<p>
				However, when she started using <ProductHyperLink />, she noticed significant improvement in just one month.
			</p>
			<p>And after six months...</p>
			<p>
				<b>Amy has maintained her healthy, full hair without any signs of thinning returning.</b>
			</p>
			<Image
				imageDesktop={image16_1}
				isLazy={false}
			/>
			<p>Diane, another of Dr. Pezad's clients, reported six months after using the serum:</p>
			<p>
				"After I saw such amazing results, I was worried it wouldn't last. But six months later, my hair is still
				full and healthy!"
			</p>
			<p>Here's a picture of Diane's progress:</p>
			<Image
				imageDesktop={image16}
				isLazy={false}
			/>
			<p>You're probably asking...</p>
		</section>
	);
}
