import styles from "./Section.styles.module.scss";
import { SectionProps } from "./Section.protypes";

export default function Section({ children, className, isBeige = false }: SectionProps) {
	return (
		<section className={`${styles.section_container} ${isBeige && styles.beige}`}>
			<div className={`${className} ${styles.section_content}`}>{children}</div>
		</section>
	);
}
