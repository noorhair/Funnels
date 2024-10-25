import styles from "./SectionHeader.module.scss";

export const SectionHeader = ({ children, outerStyles }) => {
	return <h2 className={`${styles.header} ${outerStyles}`}>{children}</h2>;
};
