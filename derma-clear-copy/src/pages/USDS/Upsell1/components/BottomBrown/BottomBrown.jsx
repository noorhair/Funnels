import styles from "./BottomBrown.module.scss";

export default function BottomBrown() {
	return (
		<article className={styles.container}>
			<h2 className={styles.heading}>Remember, Due to Limited VIP Noor Healthy Hair Formula…</h2>
			<p className={styles.text}>
				Once You Exit This Page You Cannot Come Back Here To Take Advantage Of This Offer!{" "}
				<b>This is only being offered to our existing buyers of Noor. So take advantage now.</b>{" "}
				<span className={styles.underscore}>Click the green button above</span> to accept your VIP Noor Healthy Hair
				Formula bottles.
			</p>
		</article>
	);
}
