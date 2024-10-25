import styles from "./Announcing.styles.module.scss";
import { Star } from "@icons";
import { Link } from "react-scroll"; 

export default function Announcing() {
	return (
		<div className={styles.announcing_container}>
			<div className={styles.content}>
				<h1>
					This All-Natural Dropper Uses the <u>Root Rejuvenation Breakthrough</u> to Quickly{" "}
					<span className="red_text">Put an End to Hair Loss</span> and Reactivate Thicker, Fuller Hair Growth In
					as Fast as 7 Weeks*
				</h1>
				<h2>Works for Women of All Ages and Ethnicities… for ALL causes of hair loss ✓</h2>
				<img
					src={window.location.href + "freeTrial.webp"}
					alt="Noor super hair serum"
				/>
				<div className={styles.stars_container}>
					<div>
						<Star /> <Star /> <Star /> <Star /> <Star />
					</div>
					<span>100,000+ Happy Noor Customers</span>
				</div>
				<h1>
					Introducing the Noor Hair Super Serum - The Best Kept Secret of an International Hair Chemist - Yours
					Today <span className="red_text">For FREE</span>!
				</h1>
				<Link className={styles.button} to="sectionToScroll" smooth={true} duration={3500}>CLAIM MY FREE BOTTLE!</Link>
			</div>
		</div>
	);
}
