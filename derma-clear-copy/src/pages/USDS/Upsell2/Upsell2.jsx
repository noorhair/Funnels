import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Upsell2.module.scss";
import ProductTopBlock from "../ui/ProductTopBlock/ProductTopBlock";
import ProductImg from "@images/USDS/us2_product.webp";
import ChartImg from "@images/USDS/us2_chart.webp";
import GraphicImg from "@images/USDS/us2_graphic.webp";
import PriceBlock from "./components/PriceBlock/PriceBlock";
import BottomProduct from "./components/BottomProduct/BottomProduct";
import BottomBrown from "./components/BottomBrown/BottomBrown";
import BottomShipment from "../ui/BottomShipment/BottomShipment";
import TickBox from "./components/TickBox/TickBox";
import { useState, useEffect } from "react";
import { sendGAPageView } from "@logic/utils";
import { MONTH_LIST } from "@logic/consts";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import Taboola from "@ui/Taboola/Taboola";

export default function Upsell2() {
	const discountPrice = "0";
	const [isChecked, setIsChecked] = useState(false);
	const [dateAttr, setDateAttr] = useState("");
	const [dateStr, setDateStr] = useState("");

	useEffect(() => {
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
					<p className={styles.redHead}>DON’T QUIT THIS PAGE! EXCLUSIVE FREE OFFER</p>
					<ProductTopBlock>
						<p className={styles.productBlock}>
							To help you ENSURE maximum hair growth and thickness… We are offering you <b>exclusive</b> access
							to try our newest breakthrough product… <b>for FREE!</b>
						</p>
						<p className={styles.underProductBlock}>
							(we know you’ll love it, just like the other Noor VIPs lucky enough to get try it)
						</p>
						<p className={styles.heading}>ANNOUNCING:</p>
						<p className={styles.description}>
							Fast Track Your <b>Hair’s Regrowth</b> With{" "}
							<b>
								<i>Bioavailable</i>
							</b>{" "}
							Collagen Made{" "}
							<span className={styles.underlinedText}>
								<b>To Thicken, Strengthen, And Fortify…</b>
							</span>{" "}
							<b>Made Specifically For Hair!</b>
						</p>

						<p className={styles.todayBlock}>Only $9.95 today For Noor VIPs (you!)</p>
						<img
							src={ProductImg}
							className={styles.productImg}
							alt="bottle of noor product with badges of free shipping and saving money"
						/>
						<h1 className={styles.productName}>Noor Hydrolyzed Collagen Peptides Powder Trial</h1>
						<PriceBlock
							regularPrice="49"
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
							Lova Hair Serum trial offer...
						</p>
						<p>
							Scientists have known for years now that{" "}
							<b>
								collagen helps thicken, strengthen, and even regrow new baby hairs in as fast as a few weeks.
							</b>
						</p>
						<p>
							This is ESPECIALLY true for men over 30, since the more we age, the lower our collagen supplies get
							every day… Leading to weaker hair and hair loss.
						</p>
					</div>
					<img
						src={ChartImg}
						className={styles.ChartImg}
						loading="lazy"
						alt="chart of age and amount of collagen comparison"
					/>

					<p className={styles.text}>
						The solution is of course to take collagen each day to “refill” your body’s declining levels…
					</p>
					<p className={styles.text}>
						But the results of recent studies are challenging if that approach even works.
					</p>
					<p className={styles.text}>
						Because according to the latest research, most of the mass-produced collagen you see everywhere fails
						to do anything to replenish your body’s declining levels…
					</p>
					<p className={styles.text}>
						While a little-known type of collagen called{" "}
						<span className={styles.underlinedText}>Marine Collagen</span> not only helps to support your body’s
						natural collagen levels…
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							But also works to more effectively support the strengthening and fortification of thicker, fuller
							hair.
						</b>
					</p>
					<p className={styles.text}>
						The reason it works so well is because Marine Collagen is one of the most bioavailable collagen types
						in the world.
					</p>
					<p className={styles.text}>
						In other words,{" "}
						<b className={styles.underlinedText}>it’s very close to what already exists in nature.</b>
					</p>
					<p className={styles.text}>Yet most brands don’t use Marine Collagen.</p>
					<p className={styles.text}>
						No, see most brands rely on bovine collagen, which is mass-produced and comes from cows.
					</p>
					<p className={styles.text}>
						But the founders of Noor dedicated not to rely on this, and instead secured their own supply of Marine
						Collagen (the best collagen possible).
					</p>
					<p className={styles.text}>
						This means you can feel confident knowing your hair has the{" "}
						<span className={styles.underlinedText}>best possible collagen type</span> to support thicker,
						stronger hair growth as fast as possible.
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							This unique Noor collagen blend can be absorbed 1.5 times more efficiently than other competing
							blends.<sup className={styles.sup}>1</sup>
						</b>
					</p>
					<p className={styles.text}>
						It was proven by a study published by a group of Canadian researchers at the University of Toronto,
						just last year!
					</p>
					<p className={styles.text}>
						They found that thanks to this collagen’s smaller molecular size, it can give you better benefits than
						ordinary, mass-produced collagen blends.<sup className={styles.sup}>1</sup>
					</p>
					<p className={styles.text}>
						Plus, while most other collagen on the market is made for the skin and nails… We focused on adding the
						unique compounds that go directly to your scalp and hair follicles.
					</p>
					<p className={styles.text}>
						To create a <b>unique, complex blend of collagen</b> types to{" "}
						<b>support thicker hair follicles, rejuvenate existing hair strands</b>, and kickstart the{" "}
						<b>growth of new baby hairs</b> in problem areas!
					</p>
					<p className={styles.text}>
						Noor’s unique blend of collagen includes Marine collagen (the most bioavailable collagen in the
						world), chicken cartilage (with essential micronutrients for hair growth) and bovine collagen (proven
						to help support hair growth).
					</p>
					<p className={styles.text}>
						<b className={styles.yellowText}>
							This perfect combination will ensure your body has enough collagen to fully assist in the
							rejuvenation of your hair.
						</b>
					</p>
					<p className={styles.text}>
						This fast acting collagen goes directly to the scalp, surrounds the locks of hair and strengthens it
						from the root to help fortify it and <b>kickstart thicker, fuller hair growth.</b>
					</p>
					<p className={styles.text}>
						In fact, a recent study in the <i>Open Access Impact Journal on Aging</i> discovered that the young,
						healthy hair follicles use collagen to maintain their strengthened and vibrant appearance.
						<sup className={styles.sup}>2</sup>
					</p>

					<p className={styles.text}>
						While in older hair follicles, the declining collagen levels could lead to a higher hair loss over
						time, causing hair to get thinner and thinner<sup className={styles.sup}>2</sup>…
					</p>
					<img
						src={GraphicImg}
						className={styles.GraphicImg}
						loading="lazy"
						alt="chart of age and amount of collagen comparison"
					/>

					<p className={styles.text}>
						This means it’s more important than ever to secure your own supply of high quality, bioavailable
						Collagen as soon as possible, before another day goes by.
					</p>
					<p className={styles.text}>
						And what better way than to try Noor’s Hydrolyzed Collagen Peptides with a free bottle?
					</p>
					<div className={styles.grayBox}>
						<b>
							<time dateTime={dateAttr}>{dateStr}</time>
						</b>
						<p className={styles.text}>
							Now imagine combining this powerful collagen with the Love Hair Serum you just ordered… Your
							results will come in like clockwork!
						</p>
						<p className={styles.text}>
							By simply adding this tasteless collagen to your morning cup of coffee or juice, your body will
							begin to recover its collagen supply… Boosting the power of your Noor products and your current
							hair care routine.
						</p>
						<p className={styles.text}>
							If you want to fully maximize the strength and thickness of your hair, I urge you to take this
							offer and try Noor Hydrolyzed Collagen for yourself.
						</p>
						<p className={styles.text}>
							Unfortunately, since this is a new product, inventory is extremely limited. We don’t know how long
							this batch of collagen will take to restock once it runs out (and believe me, it will).
						</p>
						<p className={styles.text}>
							So if you want to secure your supply and get it at the lowest price possible, it probably makes
							sense to give it a try and get it today, risk free.
						</p>
						<p className={styles.text}>
							The choice is yours, but you will not have another chance to come back to this exclusive page, so
							make your decision wisely!
						</p>
					</div>
					<BottomProduct
						discountPrice={discountPrice}
						isChecked={isChecked}
						handleButtonClick={(isAccepted) => handleClick(isAccepted)}
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
