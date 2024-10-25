import { useState } from "react";
import styles from "./Accordion.module.scss";

export default function Accordion({ title, content }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<details className={styles.item}>
			<summary
				className={styles.title}
				onClick={() => setIsActive(!isActive)}
			>
				<h3>{title}</h3>
				<div className={styles.mark}>{isActive ? "-" : "+"}</div>
			</summary>
			{isActive && <div className={styles.content}>{content}</div>}
		</details>
	);
}
