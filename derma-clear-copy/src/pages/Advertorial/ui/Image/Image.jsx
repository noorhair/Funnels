import styles from "./Image.module.scss";

export default function Image({ imageDesktop, imageMobile, outerStyles, isLazy = true }) {
	return (
		<picture>
			<source
				media="(max-width: 460px)"
				srcSet={imageMobile}
			/>
			<img
				src={imageDesktop}
				loading={isLazy ? "lazy" : "eager"}
				className={`${outerStyles} ${styles.image}`}
				alt=""
			/>
		</picture>
	);
}
