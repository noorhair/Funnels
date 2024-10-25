import logoImg from "@images/USDS/header_logo.webp";
import stepsImg from "@images/USDS/header_steps.webp";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.background}>
				<img
					src={logoImg}
					className={styles.logo}
					alt="noor logo with USA map icon"
				/>
			</div>
			<img
				src={stepsImg}
				className={styles.steps}
				alt="steps first and second"
			/>
		</header>
	);
}
