import Image from "../../../ui/Image/Image.jsx";
import chart1 from "@images/Advertorial/chart_1.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";

export default function Section8() {
	return (
		<section>
			<SectionHeader>This Is the Last Hair Care Solution You'll Ever Need</SectionHeader>
			<p>You'll never need other hair loss treatments, invasive procedures, or expensive shampoos again.</p>
			<p>
				<b>Why?</b>
			</p>
			<p>When Dr. Pezad discovered this new method, she wanted to make it accessible for everyone.</p>
			<p>Her research led her to create a serum containing the secret Italian olive extract.</p>
			<p>This makes the hair rejuvenation method available to the general public.</p>
			<p>And it can help you see dramatic improvements in just 28 days!</p>
			<Image
				imageDesktop={chart1}
				isLazy={true}
			/>
			<p>You won’t get only short-term results</p>
			<p>And if you're wondering...</p>
			<p>
				...you won't find this serum in stores, as Dr. Pezad has just finished developing this formula. That's why
				your stylist or dermatologist has most likely never mentioned this remedy before.
			</p>
			<p>From now on, you can look forward to healthier, fuller hair.</p>
		</section>
	);
}
