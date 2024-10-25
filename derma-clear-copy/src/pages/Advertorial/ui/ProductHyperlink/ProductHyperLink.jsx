import { Link } from "react-scroll";
import styles from "./ProductHyperLink.module.scss";

export default function ProductHyperLink() {
	return (
		<b className={styles.productHyperlink}>
			<Link
				to="wheel"
				duration={1700}
				smooth={true}
			>
				Noor Hair Love Serum
			</Link>
		</b>
	);
}
