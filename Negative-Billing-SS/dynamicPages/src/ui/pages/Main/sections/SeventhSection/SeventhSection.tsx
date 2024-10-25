import styles from "./SeventhSection.styles.module.scss";
import { Section } from "@sharedUI";

import img2 from "@images/section7Img2.webp";

export default function SeventhSection() {
	return (
		<Section className={styles.section_container}>
			<div className={styles.paragraphs_container}>
				<p>
					Now those 4 ingredients we just covered - Ginkgo Biloba, Oleanolic Acid, Apigenin and Castor Oil would be
					MORE than enough to help any woman get back thicker, fuller hair*…
				</p>
				<p>But we didn’t stop there…</p>
				<p>
					Noor Super Serum also includes Cinnamomum Zelyancium Bark, Biotin, Clary Sage, and much more. It would
					take ages to explain each bonus ingredient in detail…
				</p>
				<p>
					But what’s important is you know the formula's 10+ ingredients{" "}
					<b>support thicker, fuller hair regardless of WHAT is causing the hair problems.✓</b>
				</p>
			</div>
			<img
				src={img2}
				alt="Noor products with women"
				className={styles.img}
			/>
		</Section>
	);
}
