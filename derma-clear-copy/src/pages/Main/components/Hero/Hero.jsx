import styles from "./Hero.module.scss";
import List from "./List/List";
import Form from "../Form/Form";
import hero_icon1 from "@images/hero_icon1.webp";
import hero_icon2 from "@images/hero_icon2.webp";
import hero_icon3 from "@images/hero_icon3.webp";
import hero_icon4 from "@images/hero_icon4.webp";
import ProductImg from "@images/product.webp";
import logoMobile from "@images/logoMobile.webp";
import womanImg from "@images/woman.webp";
import { OrderButton } from "@ui/OrderButton/OrderButton";

export default function Hero() {
	const listItems = [
		{ title: <p>Dermatology Approved Formula</p>, img: hero_icon1 },
		{ title: <p>Works For All Hair Types At Any Age*</p>, img: hero_icon2 },
		{
			title: (
				<p>
					Faster Hair Growth Than Minoxidil in 30 Days<sup>1</sup>
				</p>
			),
			img: hero_icon3,
		},
		{ title: <p>Strengthens & Repairs Damaged Hair</p>, img: hero_icon4 },
	];
	return (
		<>
			<div className={styles.textMobile}>
				<h1>Combat Thinning, Sparse Edges & Hair Loss In 90 Days*</h1>
			</div>
			<OrderButton
				outerStyles={styles.orderButtonMobile}
				linkTo={"formMobile"}
			>
				Rush my order
			</OrderButton>
			<section
				className={styles.hero}
				id="formDesktop"
			>
				<div className={styles.leftSection}>
					<img
						src={logoMobile}
						className={styles.logoTablet}
						alt=""
					/>
					<div className={styles.text}>
						<h1>Combat Thinning, Sparse Edges & Hair Loss In 90 Days*</h1>
						<p>Secure your FREE Bottle Today and get a FREE Scalp Massager With Your First Bottle!</p>
					</div>
					<div className={styles.info}>
						<img
							src={ProductImg}
							alt="doubled product bottles"
							className={styles.images}
						/>

						<List
							items={listItems}
							className={styles.list}
						/>
					</div>
				</div>
				<div className={styles.rightSection}>
					<img
						src={womanImg}
						className={styles.image}
						alt="woman"
					/>
					<img
						src={ProductImg}
						alt="doubled product bottles"
						className={styles.imagesTablet}
					/>
				</div>
				<Form containerClassName={styles.formContainer} />
			</section>
		</>
	);
}
