import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";
import { Logo } from "@ui/Logo/Logo.jsx";
import Container from "../Container/Container.jsx";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<Container outerStyles={styles.outerStyles}>
				<Logo outerStyles={styles.leftSection} />
				<div className={styles.rightSection}>
					<div className={styles.rightSectionText}>
						<p className={styles.topText}>Get My Free Bottle!</p>
						<p className={styles.bottomText}>
							<span>Voted #1</span> Hair Loss Product in USA
						</p>
					</div>

					<OrderButton outerStyles={styles.outerSubmitBtn}>ORDER NOW</OrderButton>
				</div>
			</Container>
		</header>
	);
}
