import styles from "./List.module.scss";
import sprite from "@sprites";

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
							src={item.image}
							className={styles.image}
							loading="lazy"
							alt="woman before and after hair results"
						/>
						<div className={styles.itemText}>
							<div className={styles.itemInfo}>
								<h3>{item.title}</h3>
								<span>
									<svg>
										<use href={`${sprite}#fb_icon`} />
									</svg>
									{item.author}
								</span>
							</div>
							<p className={styles.text}>{item.text}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
