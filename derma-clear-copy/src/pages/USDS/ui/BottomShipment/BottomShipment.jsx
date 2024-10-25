import styles from "./BottomShipment.module.scss";
import shipmentsImg from "@images/USDS/shipments.webp";

export default function BottomShipment() {
	return (
		<>
			<h3 className={styles.bottomHeding}>
				<i>Only Available For a Limited Time!</i>
			</h3>
			<img
				src={shipmentsImg}
				className={styles.bottomShipmentImg}
				alt="shpiment, secure payment, support"
			/>
		</>
	);
}
