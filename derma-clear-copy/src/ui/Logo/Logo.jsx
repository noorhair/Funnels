import styles from "./Logo.module.scss";
import sprite from "@sprites";

export const Logo = ({ outerStyles }) => {
	return (
		<div className={`${styles.logo} ${outerStyles}`}>
			<svg>
				<use href={`${sprite}#logo`} />
			</svg>
			<svg>
				<use href={`${sprite}#made_usa`} />
			</svg>
		</div>
	);
};
