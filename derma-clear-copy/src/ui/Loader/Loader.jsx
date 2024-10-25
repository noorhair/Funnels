import styles from "./Loader.module.scss";

export default function Loader({ text }) {
	return (
		<div className={styles.container}>
			<svg viewBox="25 25 50 50">
				<circle
					r="20"
					cy="50"
					cx="50"
				></circle>
			</svg>
			<span>{text}</span>
		</div>
	);
}
