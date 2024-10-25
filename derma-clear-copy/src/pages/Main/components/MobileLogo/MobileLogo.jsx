import styles from "./MobileLogo.module.scss";
import logoMobile from "@images/logoMobile.webp";

export default function MobileLogo() {
	return (
		<div className={styles.logoContainer}>
			<img
				src={logoMobile}
				className={styles.logoMobile}
				alt="logo with USA map"
			/>
		</div>
	);
}
