import styles from "./Badge.module.scss";

export default function Badge({ img, title, onClick }) {
	return (
		<div className={styles.badge}>
			<h3 className={styles.header}>{title}</h3>
			<img
				src={img}
				loading="lazy"
				alt="result"
			/>
			<button onClick={onClick}>Read More</button>
		</div>
	);
}
