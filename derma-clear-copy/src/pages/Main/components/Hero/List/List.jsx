import styles from "./List.module.scss";

export default function List({ items }) {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => {
				return (
					<li
						className={styles.listItem}
						key={index}
					>
						<img
							src={item.img}
							className={styles.listIcon}
							alt="icon"
						/>
						<div className={styles.listText}>{item.title}</div>
					</li>
				);
			})}
		</ul>
	);
}
