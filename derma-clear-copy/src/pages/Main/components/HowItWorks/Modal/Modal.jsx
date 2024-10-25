import styles from "./Modal.module.scss";

export default function Modal({ index, text, onNext, onClose }) {
	return (
		<div className={styles.modal}>
			<h4 className={styles.header}>Step {index}</h4>
			<p className={styles.text}>{text}</p>

			{index !== 4 ? (
				<button
					onClick={onNext}
					className={styles.buttonNext}
				>
					Next Step
				</button>
			) : null}

			<button
				onClick={onClose}
				className={styles.buttonClose}
			>
				Close
			</button>
		</div>
	);
}
