import styles from "./EliminateSection.module.scss";
import eliminate1Img from "@images/eliminate_1.webp";
import eliminate2Img from "@images/eliminate_2.webp";
import eliminate3Img from "@images/eliminate_3.webp";
import eliminate4Img from "@images/eliminate_4.webp";
import eliminate5Img from "@images/eliminate_5.webp";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export default function EliminateSection() {
	return (
		<section className={styles.eliminate}>
			<SectionHeader outerStyles={styles.header}>Noor Love Hair Serum Works to Combat...</SectionHeader>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<img
						src={eliminate1Img}
						loading="lazy"
						alt="sking tags"
					/>
					<p>Thinning Hair</p>
				</li>
				<li className={styles.listItem}>
					<img
						src={eliminate2Img}
						loading="lazy"
						alt="sking tags"
					/>
					<p>Hair Loss</p>
				</li>
				<li className={styles.listItem}>
					<img
						src={eliminate3Img}
						loading="lazy"
						alt="sking tags"
					/>
					<p>Damaged Hair</p>
				</li>
				<li className={styles.listItem}>
					<img
						src={eliminate4Img}
						loading="lazy"
						alt="sking tags"
					/>
					<p>Sparse Edges</p>
				</li>
				<li className={styles.listItem}>
					<img
						src={eliminate5Img}
						loading="lazy"
						alt="sking tags"
					/>
					<p>Dry Scalp</p>
				</li>
			</ul>
		</section>
	);
}
