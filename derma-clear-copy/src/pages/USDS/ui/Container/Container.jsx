import styles from "./Container.module.scss";

export default function Container({ children, outerStyles }) {
	return <div className={`${styles.container} ${outerStyles}`}>{children}</div>;
}
