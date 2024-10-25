import Image from "../../../ui/Image/Image.jsx";
import image4 from "@images/Advertorial/image_4.webp";
import image5 from "@images/Advertorial/image_5.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";

export default function Section3() {
	return (
		<section>
			<SectionHeader>How Dr. Pezad Made This Discovery</SectionHeader>
			<p>Dr. Sanober Pezad discovered this revolutionary solution during her time in medical school.</p>
			<p>
				Due to the stress of her demanding studies, she noticed her own hair becoming thin and lifeless. As a future
				dermatologist, she felt compelled to find a solution—not just for herself but for countless women facing the
				same issue.
			</p>
			<Image
				imageDesktop={image4}
				isLazy={true}
			/>
			<p>
				One day, while studying ancient botanical texts in the university library, she came across an old manuscript
				describing a rare extract from olives grown in a unique orchard in Tuscany, Italy.
			</p>
			<Image
				imageDesktop={image5}
				isLazy={true}
			/>
			<p>Looking at herself in the mirror, Dr. Pezad knew she needed to do something about it.</p>
		</section>
	);
}
