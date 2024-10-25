import Image from "../../../ui/Image/Image.jsx";
import image12 from "@images/Advertorial/image_12.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import styles from "./Section7.module.scss";

export default function Section7() {
	return (
		<section>
			<SectionHeader>Hair Problems Are Not Your Fault</SectionHeader>
			<p>Dr. Pezad often wondered why traditional treatments were so ineffective.</p>
			<p>
				When she delved deeper into her research, she discovered that many products on the market are designed to
				offer temporary fixes, not long-term solutions.
			</p>
			<Image
				outerStyles={styles.image}
				imageDesktop={image12}
				isLazy={true}
			/>
			<p>But now…</p>
		</section>
	);
}
