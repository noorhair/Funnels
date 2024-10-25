import styles from "./CompareTable.module.scss";
import tableImg from "@images/compare_table.webp";
import tableImgMob from "@images/compare_table_mobile.webp";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export default function CompareTable() {
	return (
		<section className={styles.tableContainer}>
			<SectionHeader outerStyles={styles.header}>
				Noor Hair vs OTHER Solutions vs Medications: Get Back Thick, Natural Hair The Safe Way
			</SectionHeader>
			<picture>
				<source
					media="(max-width: 850px)"
					srcSet={tableImgMob}
				/>
				<img
					src={tableImg}
					loading="lazy"
					alt="Compare table of noor product with competitors"
				/>
			</picture>
		</section>
	);
}
