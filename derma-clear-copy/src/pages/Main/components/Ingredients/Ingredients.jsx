import ingredientImg1 from "@images/ingredient_1.webp";
import ingredientImg2 from "@images/ingredient_2.webp";
import ingredientImg3 from "@images/ingredient_3.webp";
import ProductImg from "@images/product.webp";
import { OrderButton } from "@ui/OrderButton/OrderButton.jsx";
import styles from "./Ingredients.module.scss";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export default function Ingredients() {
	return (
		<section className={styles.ingredients}>
			<SectionHeader>Top Quality Ingredients. Top Results.</SectionHeader>
			<p className={styles.ingredientsHeaderText}>
				Noor Love Hair Serum is made from premium quality all-natural ingredients from around the world. Each one
				proven to combat thinning, sparse edges, kickstart new baby hair growth, or help damaged hair.
			</p>
			<div className={styles.chevron}></div>
			<img
				src={ProductImg}
				loading="lazy"
				alt="couple bottles of the product"
				className={styles.images}
			/>
			<div className={styles.panelsContainer}>
				<div className={styles.panel}>
					<img
						src={ingredientImg1}
						loading="lazy"
						alt="ingredient"
					/>
					<div className={styles.textContainer}>
						<h3 className={styles.header}>Tocopheryl Acetate For Hair Growth</h3>
						<p className={styles.text}>
							In a Korean clinical trial on 30 balding or near balding subjects, one group applied Noor’s sacred
							compound found inside Italian Olives (Tocopheryl Acetate) for 8 weeks.
						</p>
						<p className={styles.text}>
							And when the results came back, the researchers were astonished.{" "}
							<b>
								In as fast as 4 weeks, the subjects who applied this sacred compound saw greater hair growth
								compared to other groups, including minoxidil!
							</b>
							<sup>1</sup> In other words, they saw a big increase in hair thickness AND hair density… fast.
							<sup>1</sup>
						</p>
					</div>
				</div>
				<div className={styles.panel}>
					<img
						src={ingredientImg2}
						loading="lazy"
						alt="ingredient"
					/>
					<div className={styles.textContainer}>
						<h3 className={styles.header}>Argan Oil To Combat Damaged Hair</h3>
						<p className={styles.text}>
							The <i>Journal Of Cosmetic Dermatology</i> ran a trial on 2 different groups by damaging the hair
							with stress, heat, and chemicals… But one group was treated with Argan Oil before. And results?
							Shocking.{" "}
							<b>
								The Argan Oil subjects were not only much more protected against alopecia… But they also
								maintained far more protein in their hair… keeping it thick, bouncy, and full!<sup>2</sup>
							</b>
						</p>
					</div>
				</div>
				<div className={styles.panel}>
					<img
						src={ingredientImg3}
						loading="lazy"
						alt="ingredient"
					/>
					<div className={styles.textContainer}>
						<h3 className={styles.header}>Aloe Vera To Promote Healing</h3>
						<p className={styles.text}>
							Recent research shows it helps support the healing of dead skin cells<sup>4</sup>…{" "}
							<b>
								Which suggests it can directly help support those scarred alopecia areas.<sup>4</sup>
							</b>{" "}
							Incredible, right? Imagine how it would feel to erase the past and start anew?
						</p>
					</div>
				</div>
			</div>
			<div className={styles.chevron}></div>
			<OrderButton
				outerStyles={styles.outerSubmitBtn}
				subtext="Get Your Bottle Faster!"
			>
				Rush My Order
			</OrderButton>
		</section>
	);
}
