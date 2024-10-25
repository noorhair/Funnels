import { useNavigate } from "react-router-dom";
import styles from "./OrderButton.module.scss";

export const OrderButton = ({ children, outerStyles }) => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/love-serum/main")}
			className={`${outerStyles} ${styles.button}`}
		>
			{children}
		</button>
	);
};
