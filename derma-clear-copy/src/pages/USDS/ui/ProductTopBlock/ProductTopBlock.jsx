import styles from "./ProductTopBlock.module.scss";

export default function ProductTopBlock({ children }) {
	return <section className={styles.container}>{children}</section>;
}
