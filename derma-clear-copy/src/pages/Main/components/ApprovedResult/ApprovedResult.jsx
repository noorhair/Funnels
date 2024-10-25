import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import styles from "./ApprovedResult.module.scss";
import approvedSectionImg from "@images/approvedSection.webp";

export default function ApprovedResult() {
	return (
		<section className={styles.approvedResult}>
			<SectionHeader outerStyles={styles.header}>Dermatology Approved Results In 30 Days*</SectionHeader>
			<p className={styles.text}>
				To prove how effective Noor’s products are they are working with a leading dermatologist in the United
				States, Dr. Sanober Pezad to conduct a quick test…
			</p>
			<p className={styles.text}>And what she found is incredible!</p>
			<p className={styles.text}>
				<b>In the first 30 days of using Noor, every single woman saw remarkable results in their hair health!*</b>
			</p>
			<p className={styles.text}>
				From thicker, stronger hair to noticing new baby hair growth in areas that were previously thinning.
			</p>
			<img
				src={approvedSectionImg}
				loading="lazy"
				alt="woman doctor with the approved badges"
			/>
			<p className={styles.text}>
				After seeing incredible success with her patients, Dr. Sanober Pezad approves and recommends Noor for women
				of all ages and hair types...
			</p>
			<p className={styles.text}>
				<b>To help them combat thinning, sparse edges and lackluster hair growth as quickly as possible.*</b>
			</p>
		</section>
	);
}
