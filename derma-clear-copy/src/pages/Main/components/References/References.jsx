import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import styles from "./References.module.scss";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";

export default function References() {
	return (
		<section className={styles.references}>
			<OrderButton
				outerStyles={styles.orderButton}
				subtext="Get Your Free Bottle Faster!"
			>
				Rush my order
			</OrderButton>

			<SectionHeader outerStyles={styles.header}>REFERENCES</SectionHeader>
			<ul className={styles.refContainer}>
				<li className={styles.refItem}>
					<p>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7766712/</p>
				</li>
				<li className={styles.refItem}>
					<p>https://pubmed.ncbi.nlm.nih.gov/35226791/</p>
				</li>
				<li className={styles.refItem}>
					<p>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3819075/</p>
				</li>
				<li className={styles.refItem}>
					<p>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2763764/</p>
				</li>
			</ul>
		</section>
	);
}
