import styles from "./OrderButton.module.scss";
import { Link } from "react-scroll";

export const OrderButton = ({ children, outerStyles, clickHandler, subtext, isLabel, linkTo }) => {
	return !clickHandler ? (
		<Link
			to={`${linkTo ? linkTo : "formDesktop"}`}
			className={`${styles.orderButton} ${outerStyles} ${isLabel ? styles.label : ""}`}
			duration={1200}
			smooth={true}
		>
			{children}
			{subtext ? <span>{subtext}</span> : ""}
		</Link>
	) : (
		<button
			className={`${styles.orderButton} ${outerStyles} ${isLabel ? styles.label : ""}`}
			onClick={clickHandler}
		>
			{children}
			{subtext ? <span>{subtext}</span> : ""}
		</button>
	);
};
