import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Upsell3.module.scss";
import ProductTopBlock from "../ui/ProductTopBlock/ProductTopBlock";
import ProductImg from "@images/USDS/us3_product.webp";
import IngredientsImg from "@images/USDS/us3_ingredients.webp";
import feedback1Img from "@images/USDS/us3_feedback1.webp";
import feedback2Img from "@images/USDS/us3_feedback2.webp";
import feedback3Img from "@images/USDS/us3_feedback3.webp";
import PriceBlock from "./components/PriceBlock/PriceBlock";
import BottomProduct from "./components/BottomProduct/BottomProduct";
import BottomBrown from "./components/BottomBrown/BottomBrown";
import BottomShipment from "../ui/BottomShipment/BottomShipment";
import TickBox from "./components/TickBox/TickBox";
import { useState, useEffect } from "react";
import { MONTH_LIST } from "@logic/consts";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { sendGAPageView } from "@logic/utils";
import Taboola from "@ui/Taboola/Taboola";

export default function Upsell3() {
	const discountPrice = "0";
	const [isChecked, setIsChecked] = useState(false);

	const [dateAttr, setDateAttr] = useState("");
	const [dateStr, setDateStr] = useState("");
	const [minutes, setMinutes] = useState(null);
	const [seconds, setSeconds] = useState(null);

	useEffect(() => {
		let countDownDate = new Date();
		countDownDate.setMinutes(countDownDate.getMinutes() + 30);
		let x = setInterval(function () {
			let now = new Date().getTime();
			let distance = countDownDate - now;
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / 60000);
			let seconds = Math.floor((distance % 60000) / 1000);

			setMinutes(minutes + " : ");
			setSeconds(seconds);

			if (distance < 0) {
				clearInterval(x);
				setMinutes("EXPIRED");
				setSeconds("");
			}
		}, 1000);

		const date = new Date();
		const day = date.getDate();
		const month = MONTH_LIST[date.getMonth()];
		const year = date.getFullYear();

		setDateAttr(`${year}-${date.getMonth()}-${day}`);
		setDateStr(`${day} of ${month}, ${year}`);

		sendGAPageView();
	}, []);

	return (
		<>
			<ScrollToTop />
			<Header />
			<Taboola />
			<main>
				<Container>
					<p className={styles.redHead}>
						<span className={styles.redText}>Wait!</span> Here’s One More Exclusive Upgrade Offer:
					</p>
					<p className={styles.heading}>
						LAST CHANCE TO Get Your First <span className={styles.underlinedText}>Rosemary Growth Spray</span>{" "}
						<span className={styles.redText}>for FREE</span> (on this page only)
					</p>
					<ProductTopBlock>
						<p className={styles.productBlock}>
							This Unique Opportunity Is Only Available For The Next 30 Minutes…
						</p>

						<div className={styles.timerContainer}>
							<p className={styles.timerHeader}>Your Exclusive Free Trial Is Reserved For</p>
							<span className={styles.timerContent}>
								{minutes}
								{seconds}
							</span>
							<span className={styles.timerText}>Order now, before stock runs out!</span>
						</div>

						<p className={styles.heading}>ANNOUNCING:</p>

						<p className={styles.description}>
							A 'Divine' Rosemary Growth Spray Proven to Help Women of All Ages{" "}
							<b>Kickstart Thicker Hair Growth</b> and{" "}
							<b className={styles.underlinedText}>Reduce Thinning by Up to 47% in Just 90 Days 4*</b>
						</p>

						<img
							src={ProductImg}
							className={styles.productImg}
							alt="bottle of noor product with badges of free shipping and saving money"
						/>
						<h1 className={styles.productName}>Noor Rosemary Growth Spray Trial</h1>
						<PriceBlock
							regularPrice="42"
							discountPrice={discountPrice}
						/>
						<TickBox
							isChecked={isChecked}
							onCheck={() => setIsChecked(!isChecked)}
						/>
						<ButtonsBlock isChecked={isChecked} />
					</ProductTopBlock>
					<div className={styles.brownBackText}>
						<p>
							Hey there - it's Angela from Noor. Since you’ve shown <b>amazing commitment</b> to rejuvenating
							your hair I want to offer you something brand new that is helping many of Noor VIPs{" "}
							<b>fast track thicker, fuller, longer, and stronger hair.</b>
						</p>
						<p>
							This one-time opportunity is limited only to dedicated action takers that already claimed their
							Love Hair Serum trial offer...
						</p>
						<p>By now you have certainly heard of Rosemary Oil for Hair Growth?</p>
						<p>
							<b>Some people even call it “Nature’s Minoxidil”</b>
						</p>
						<p>
							Because according to many dermatologists it targets the leading cause of Hair Loss for most women
							over the age of 30 years old…
						</p>
					</div>
					<p className={styles.text}>
						Most ordinary rosemary doesn’t help your hair because it skimps on quality and doesn’t have enough
						Carnosic acid… But the Noor Rosemary growth Spray is different.
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							It’s extracted in a special way, to make sure it has as much Carnosic Acid as possible✓…
						</b>
					</p>
					<p className={styles.text}>
						<b>To help women of all ages restart hair growth and say goodbye to thinning hair for good.*</b>
					</p>
					<p className={styles.text}>
						Not only that, but it’s infused with a sacred blend of carrier oils like castor oil and peppermint
						oil… These work together like an all-star team to first soothe and prepare the scalp.
					</p>
					<p className={styles.text}>
						<b>
							And then ‘carry’ the powerful rosemary safely into the skin so it can work its magic… To combat
							hair loss and thinning at the scalp, and stimulate new baby hair growth… fast!
						</b>
					</p>
					<p className={styles.text}>
						This new remedy has already helped thousands of women get back their crowning glory… And the proof is
						undeniable, with research published in the Journal of Cosmetic Dermatology.
					</p>
					<p className={styles.text}>
						This powerful formula with Carnosic Acid, Carrier Oils, and more hair-thickening like Biotin and Rice
						Bran ensures results come quickly*...
					</p>
					<p className={styles.text}>
						<b>
							In fact, some clinical trials have seen undeniable results in as fast as 90 days all thanks to Noor
							Rosemary Growth Spray incredible ingredients.
						</b>
					</p>

					<img
						src={IngredientsImg}
						className={styles.ingredientsImg}
						alt="ingredients"
						loading="lazy"
					/>
					<p className={styles.text}>
						<b>
							It’s more important than ever to secure your own supply of high quality Rosemary Oil Growth Spray
							as soon as possible, before another day goes by.
						</b>
					</p>
					<p className={styles.text}>
						<b>
							And what better way than to try Noor’s Rosemary Growth Spray with a{" "}
							<span className={`${styles.underlinedText} ${styles.redText}`}>free bottle?</span>
						</b>
					</p>
					<p className={styles.sectionHead}>
						We shared exclusive access to a select few customers to see what they think:
					</p>
					<div className={styles.feedbacksContainer}>
						<img
							src={feedback1Img}
							alt="positive feedback"
							loading="lazy"
						/>
						<img
							src={feedback2Img}
							alt="positive feedback"
							loading="lazy"
						/>
						<img
							src={feedback3Img}
							alt="positive feedback"
							loading="lazy"
						/>
					</div>
					<p className={styles.redWarningText}>
						WARNING: I only have a limited number of FREE Noor Rosemary Growth Spray bottles to give away. After
						they are gone, I’ll have to start charging over $42 for them. If you decline this offer right now you
						may not be able to come back and claim it later.
					</p>
					<div className={styles.brownBackText}>
						<b className={styles.date}>
							<time dateTime={dateAttr}>{dateStr}</time>
						</b>
						<p>
							Now imagine combining this Rosemary Growth Spray with the Love Hair Serum you just ordered… Your
							results will come in like clockwork!
						</p>
						<p>
							<b>
								By simply spraying this Rosemary Growth Oil on your thin and sparse hair, you could see new,
								thicker and faster hair growth … Boosting the power of your Love Hair Serum and your current
								hair care routine.
							</b>
						</p>
						<p>
							If you want to fully maximize the strength and thickness of your hair, I urge you to take this
							offer and try Noor Rosemary Growth Spray for yourself.
						</p>
						<p>
							Unfortunately, since this is a new product, inventory is extremely limited. We don’t know how long
							this batch of rosemary oil will take to restock once it runs out (and believe me, it will).
						</p>
						<p>
							So if you want to secure your supply and get it at the lowest price possible, it probably makes
							sense to give it a try and get it today, risk free.
						</p>
						<p>
							The choice is yours, but you will not have another chance to come back to this exclusive page, so
							make your decision wisely!
						</p>
					</div>
					<BottomProduct
						discountPrice={discountPrice}
						isChecked={isChecked}
						onCheck={() => setIsChecked(!isChecked)}
					/>
					<BottomBrown />
					<BottomShipment />
				</Container>
			</main>
			<Footer outerStyles={styles.footerStyling} />
		</>
	);
}
