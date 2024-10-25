import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Upsell1.module.scss";
import ProductTopBlock from "../ui/ProductTopBlock/ProductTopBlock";
import ProductImg from "@images/USDS/product_us1.webp";
import pantAcidImg from "@images/USDS/pant_acid.webp";
import PriceBlock from "./components/PriceBlock/PriceBlock";
import BottomProduct from "./components/BottomProduct/BottomProduct";
import BottomBrown from "./components/BottomBrown/BottomBrown";
import BottomShipment from "../ui/BottomShipment/BottomShipment";
import References from "./components/References/References";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { sendGAPageView } from "@logic/utils";
import { useEffect } from "react";
import Taboola from "@ui/Taboola/Taboola";

export default function Upsell1() {
	const discountPrice = "99";

	useEffect(() => {
		sendGAPageView();
	}, []);

	return (
		<>
			<ScrollToTop />
			<Header />
			<Taboola />
			<main>
				<Container>
					<p className={styles.redHead}>Do NOT Close Or Quit This Page!</p>
					<p className={styles.head}>
						Don't click "Back" or "Exit" or it may cause multiple charges on your card.
					</p>
					<ProductTopBlock>
						<p className={styles.italicProductBlock}>
							<i>CONGRATULATIONS ON SECURING YOUR FREE BOTTLE OF LOVE HAIR SERUM!</i>
						</p>
						<p className={styles.italicProductBlock}>
							<i>
								Since you’ve shown real commitment towards accelerating your results, we want to offer you{" "}
								<span className={styles.underscoreProductBlock}>exclusive access</span> to add to 10 more
								hair-thickening ingredients... for{" "}
								<span className={styles.underscoreProductBlock}>an incredibly LOW price!</span>
							</i>
						</p>
						<p className={styles.topProductBlock}>
							Boost Your <b>Hair’s Regrowth</b> With <b>Noor's Healthy Hair Formula</b> Made To Support{" "}
							<span className={styles.underscoreProductBlock}>Fuller, Stronger, Thicker Hair Growth!</span>
						</p>
						<p className={styles.todayBlock}>
							<span className={styles.onlyToday}>Only ${discountPrice} Today</span> For Noor VIPs (you!)
						</p>
						<img
							src={ProductImg}
							className={styles.productImg}
							alt="three bottles of noor product with badges of free shipping and saving money"
						/>
						<h1 className={styles.productName}>3 Months Noor Healthy Hair Formula</h1>
						<PriceBlock
							regularPrice="300"
							discountPrice={discountPrice}
						/>
					</ProductTopBlock>
					<p className={styles.text}>
						<b>Dear Friend…</b>
					</p>
					<p className={styles.text}>One more thing:</p>
					<p className={styles.text}>
						Even though your Noor Love Hair Serum is more than enough to undo years of damage and quickly
						rejuvenate your sparse edges or thin hair from the OUTSIDE…
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							Many women want to make sure they give their hair the best compounds and nutrients from the INSIDE
							as well...
						</b>
					</p>
					<p className={styles.text}>
						So that it grows as thick, long and strong as possible...and has what it needs to reach its{" "}
						<b>full voluminous potential… as quickly as possible!</b>
					</p>
					<p className={styles.text}>
						Because remember, the #1 thing holding you back from growing thicker, fuller, longer hair in 2024 is
						“Dormant Follicles.”
					</p>
					<p className={styles.text}>
						And while the Italian Olive antioxidant in your Noor Hair Love Serum does an amazing job at fighting
						the effects of Dormant Follicles topically…
					</p>
					<p className={styles.text}>
						Many women want peace of mind knowing their body has everything it could possibly need to{" "}
						<b>combat dormant follicles internally as well…</b>
					</p>
					<p className={styles.text}>
						So you can be fully assured the thinning will slow and your part, edges, and crown will quickly be
						filled in with new baby hairs.
					</p>
					<p className={styles.text}>
						Unfortunately, no <i>supplement</i> on the market targets Dormant Follicles and works from the inside
						to reactivate hair growth FAST.
					</p>
					<p className={styles.text}>
						That’s why, after hundreds of customer requests, we decided to create our now famous{" "}
						<b>Noor Healthy Hair Formula…</b>
					</p>
					<p className={styles.text}>
						The only hair growth solution created to combat Stressed Follicles internally and kickstart speedy
						thicker hair growth with a mix of “Golden Rosemary” and other hair-loving nutrients.✓
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							It’s the perfect complement to the Noor Hair Love Serum you just purchased…
						</b>
					</p>
					<p className={styles.text}>
						And with thousands of 5 star reviews, it’s no wonder we are often low on stock.
					</p>
					<p className={styles.text}>Martha S., from Missouri, says said her hair is finally filling in:</p>
					<p className={styles.text}>
						<b>
							<i>
								“My thinning spots are filling in slowly and my hair is looking fuller. People are noticing
								something is different but can't really pinpoint it. Compliments are plentiful, giving me a
								boost in confidence.”
							</i>
						</b>
					</p>
					<p className={styles.text}>And that’s just one review of the many thousand happy customers.</p>
					<p className={styles.text}>
						What makes the Noor Healthy Hair Formula so effective at regrowing hair? Well…
					</p>
					<p className={styles.text}>
						They are based on something called Pantothenic Acid, one of the best-kept secrets of the beauty
						industry. It’s found in certain strains of Rosemary…
					</p>
					<p className={styles.text}>
						Rosemary hair growth routines have exploded in popularity this past year… without anyone knowing WHY
						it works so well…
					</p>
					<p className={styles.text}>Well, the Pantothenic Acid in rosemary may have something to do with it!</p>
					<p className={styles.text}>
						The <i>Alternative Medicine Review</i> cited multiple Japanese studies that suggest high amounts of
						<b>
							Pantothenic Acid support balanced adrenal glands²… which are responsible for dormant follicles!✓
						</b>
					</p>
					<p className={styles.text}>And as if that wasn’t enough…</p>
					<p className={styles.text}>
						A group of Mediterranean researchers recently proved that{" "}
						<b>Pantothenic Acid helps grow thick, new baby hairs even better than minoxidil!³</b>
					</p>
					<img
						src={pantAcidImg}
						className={styles.pantAcid}
						loading="lazy"
						alt="pantothenic acid with woman and book near the plant"
					/>
					<p className={styles.text}>
						Unfortunately, the amount of Pantothenic Acid in ordinary Rosemary isn’t enough to make a big
						difference, so we loaded up our Noor Healthy Hair Formula with as much as possible…
					</p>
					<p className={styles.text}>But that’s not all.</p>
					<p className={styles.text}>We also added our proprietary blend of HorseTail Extract and Silicon.</p>
					<p className={styles.text}>
						These two ingredients not only repair the fragility of your hair and decrease breakage⁴…
					</p>
					<p className={styles.text}>But also help promote blood circulation to the scalp⁵…</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>Which complements your Noor Hair Love Serum perfectly!</b>
					</p>
					<p className={styles.text}>
						We couldn’t forget Niacin either, which helps repair fragile hair, split-ends, and existing
						follicles.⁶
					</p>
					<p className={styles.text}>
						Yup it’s included too. Alongside 6 MORE bonus hair loving ingredients...a total of 10 crucial
						ingredients…
					</p>
					<p className={styles.text}>
						That will put your mind at ease knowing that your hair has EVERYTHING it needs to reach its full hair
						growth potential.
					</p>
					<p className={styles.text}>
						All you need to do is take two capsules with a glass of water once a day, along with your Noor Hair
						Love Serum™, and you'll be well on your way to getting back the hair you love.
					</p>
					<p className={styles.text}>
						Demand for this formula has been high and <b>it has been selling fast.</b>
					</p>
					<p className={styles.text}>
						Because many women prefer to know that their hair has ALL the nutrients it needs.
					</p>
					<p className={styles.text}>
						It would cost over $100 to buy all the ingredients in this formula separately, but since we have been
						in business for over 4 years, we were able to get the price down to a level that any woman can afford.
					</p>
					<p className={styles.text}>And while we usually charge a retail price of $40…</p>
					<p className={styles.text}>
						Since you are a special first time Noor customer, you have the opportunity to get 6 months of our
						formula at <b>60% off its normal price, at $19.{discountPrice} per bottle...</b>{" "}
						<b className={styles.greenText}>or only $0.33 per capsule!</b>
					</p>
					<p className={styles.text}>
						This is the best value you'll find for a hair growth formula of this strength and quality, and you'll
						have enough to last you a full 3 months....
					</p>
					<p className={styles.text}>
						So, if you want even more peace of mind as you start your journey with Noor,{" "}
						<b>click the button below to add it to your order now.</b>
					</p>
					<p className={styles.text}>Plus, the shipping price is on us. Yes, it's FREE.</p>
					<p className={styles.text}>
						Take advantage of this limited time offer by clicking the button below. It's the lowest price you'll
						ever see Noor Healthy Hair Formula.
					</p>
					<p className={styles.text}>
						But this is the only time you'll see it available. It's covered by our 180 Day 100% Money Back
						Guarantee, so you have nothing to lose.
					</p>

					<BottomProduct discountPrice={discountPrice} />

					<p className={styles.text}>
						Noor Healthy Hair Formula come with a 180 Days Money Back Guarantee. That means if you change your
						mind about this decision anytime in the next 6 months - all you need to do is send us an email, and we
						will refund your purchase amount. All you have to do is send us the bottles, whether they are full or
						empty!!
					</p>
					<p className={styles.text}>If I am not happy with my experience with Noor I pay NOTHING!</p>
					<p className={styles.text}>
						My decision to invest in Noor is totally risk-free. If I change my mind, I just call or email customer
						service and get a full refund.
					</p>
					<p className={styles.text}>No hassle. No risk. Only results. All guaranteed for 6 months.</p>
					<p className={styles.head}>
						Try out 3{" "}
						<b>
							Months of Noor Noor Healthy Hair Formula{" "}
							<span className={styles.greenText}>for ONLY ${discountPrice}!</span> Sounds fair?
						</b>
					</p>
					<BottomProduct discountPrice={discountPrice} />
					<BottomBrown />
					<BottomShipment />
					<References />
				</Container>
			</main>
			<Footer outerStyles={styles.footerStyling} />
		</>
	);
}
