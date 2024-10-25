import seenonImg1 from "@images/seenon_1.webp";
import seenonImg2 from "@images/seenon_2.webp";
import seenonImg3 from "@images/seenon_3.webp";
import seenonImg4 from "@images/seenon_4.webp";
import seenonImg5 from "@images/seenon_5.webp";
import seenonImg6 from "@images/seenon_6.webp";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import styles from "./AsSeenOn.module.scss";

export default function AsSeenOn() {
	return (
		<section className={styles.seenon}>
			<SectionHeader outerStyles={styles.header}>As Seen On:</SectionHeader>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<img
						src={seenonImg1}
						loading="lazy"
						alt="nbc"
					/>
				</li>
				<li className={styles.listItem}>
					<img
						src={seenonImg2}
						loading="lazy"
						alt="cbc"
					/>
				</li>
				<li className={styles.listItem}>
					<img
						src={seenonImg3}
						loading="lazy"
						alt="fox news"
					/>
				</li>
				<li className={styles.listItem}>
					<img
						src={seenonImg4}
						loading="lazy"
						alt="aol"
					/>
				</li>{" "}
				<li className={styles.listItem}>
					<img
						src={seenonImg5}
						loading="lazy"
						alt="usa today"
					/>
				</li>{" "}
				<li className={styles.listItem}>
					<img
						src={seenonImg6}
						loading="lazy"
						alt="yahoo news"
					/>
				</li>
			</ul>
		</section>
	);
}
