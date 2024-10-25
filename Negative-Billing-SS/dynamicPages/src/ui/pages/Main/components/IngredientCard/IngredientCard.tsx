import { IngredientCardProps } from "./IngredientCard.proptypes";
import styles from "./IngredientCard.styles.module.scss";

export default function IngredientCard({
	numIngredient,
	paragraphs,
	plantName,
	img,
	imgMobile,
	htmlRightContent,
}: IngredientCardProps) {
	return (
		<div className={styles.ingredient_card_container}>
			<div className={styles.top_section}>
				<h1 className={styles.ingredient_text}>Ingredient #{numIngredient}</h1>
				<div className={styles.paragraphs}>
					{paragraphs.map((text, index) => {
						return (
							<p
								className={styles.paragraph}
								key={index}
							>
								{text}
							</p>
						);
					})}
				</div>
				<h2 className={styles.plant_name}>{plantName}</h2>
			</div>
			<div className={styles.content_section}>
				<div className={styles.left_section}>
					<picture>
						<source
							media="(max-width: 550px)"
							srcSet={imgMobile}
						/>
						<source
							media="(min-width: 551px)"
							srcSet={img}
						/>
						<img
							src={img}
							alt={plantName}
						/>
					</picture>
				</div>
				<div className={styles.rigth_section}>{htmlRightContent}</div>
			</div>
		</div>
	);
}
