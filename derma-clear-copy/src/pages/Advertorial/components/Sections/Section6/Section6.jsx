import Image from "../../../ui/Image/Image.jsx";
import image10 from "@images/Advertorial/image_10.webp";
import image11 from "@images/Advertorial/image_11.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";

export default function Section6() {
	return (
		<section>
			<SectionHeader>What to Do If You've Been Struggling with Hair Thinning or Loss</SectionHeader>
			<p>Don't worry.</p>
			<p>Even if you've tried everything else without success.</p>
			<p>Even if you think it's too late.</p>
			<p>This new hair rejuvenation method can help.</p>
			<p>Take, for example, Patricia, a 62-year-old who struggled with hair loss for years.</p>
			<p>After trying Dr. Pezad's method, she saw remarkable improvement in just one month:</p>
			<Image
				imageDesktop={image10}
				isLazy={true}
			/>
			<p>
				<b>Patricia regained her confidence along with her fuller hair.</b>
			</p>
			<p>And then there's Susan, 58, who wanted to improve her hair before her son's wedding.</p>
			<p>In just six weeks, she noticed significant thickening and shine:</p>
			<Image
				imageDesktop={image11}
				isLazy={true}
			/>
			<p>
				<b>Susan felt beautiful and confident on her son's big day.</b>
			</p>
			<p>Imagine being able to style your hair the way you want, without worrying about thinning spots.</p>
			<p>This new hair rejuvenation method can make your hair dreams come true.</p>
		</section>
	);
}
