import styles from "./Quote.module.scss";

export const Quote = ({ children, author }) => {
	return (
		<figure className={styles.container}>
			<blockquote className={styles.quote}>"{children}"</blockquote>
			<figcaption className={styles.author}>— {author}</figcaption>
		</figure>
	);
};
