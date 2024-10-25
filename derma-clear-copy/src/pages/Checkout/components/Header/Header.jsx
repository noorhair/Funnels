import styles from "./Header.module.scss";
import Container from "@ui/Container/Container.jsx";
import checkoutHeaderImg from "@images/checkout_header.webp";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.subheader}>
				<p>People with Noor In Their Cart: 23</p>
			</div>
			<Container outerStyles={styles.outerStyles}>
				<div className={styles.imgContainer}>
					<img
						src={checkoutHeaderImg}
						alt="Noor logo with secure payment icons"
					/>
				</div>
			</Container>
		</header>
	);
}
