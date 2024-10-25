import styles from "./References.module.scss";

export default function References({ regularPrice, discountPrice }) {
	return (
		<div className={styles.container}>
			<p>
				<b>References:</b>
			</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>1.https://www.nature.com/articles/s41586-021-03417-2</li>
				<li className={styles.listItem}>2.https://altmedrev.com/wp-content/uploads/2019/02/v4-4-249.pdf</li>
				<li className={styles.listItem}>3.https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5463555/</li>
				<li className={styles.listItem}>4.https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4938278/</li>
				<li className={styles.listItem}>
					5.The Green Pharmacy: the Ultimate Compendium of Natural Remedies from the World's Foremost Authority on
					Healing Herbs, by Marshall P. Duke, St. Martin's Press, 1998, p. 80.{" "}
				</li>
				<li className={styles.listItem}>
					6.Shin OGATA, Masayo TAKEUCHI, Shin TERADAIRA, Naokuni YAMAMOTO, Keiko IWATA, Katsuzumi OKUMURA & Hiroshi
					TAGUCHI (2002) Radical Scavenging Activities of Niacin-Related Compounds, Bioscience, Biotechnology, and
					Biochemistry, 66:3, 641-645, DOI: 10.1271/bbb.66.641
				</li>
			</ul>
		</div>
	);
}
