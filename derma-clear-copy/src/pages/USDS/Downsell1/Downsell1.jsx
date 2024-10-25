import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Downsell1.module.scss";
import ProductImg from "@images/USDS/product_us1.webp";
import BottomShipment from "../ui/BottomShipment/BottomShipment";
import ProductBlock from "./components/ProductBlock/ProductBlock";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { sendGAPageView } from "@logic/utils";
import { useEffect } from "react";
import Taboola from "@ui/Taboola/Taboola";

export default function Downsell1() {
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
					<p className={styles.redHead}>Hold On A Moment!</p>
					<div className={styles.topProductDesc}>
						<div className={styles.left}>
							<p className={styles.topText}>
								<b>
									I couldn’t live with myself if you left without upgrading and ensuring your{" "}
									<span className={styles.underscoreProductBlock}>100%</span> success and hair of your dreams…
								</b>
							</p>
							<p className={styles.bottomText}>
								<b>
									So I’m going to discount this amazing 3{" "}
									<span className={styles.underline}>more bottles</span> of Noor bundle at ana even{" "}
									<span className={styles.underlineRed}>BIGGER discount</span>{" "}
									<i>(do not share this page with anyone!)</i>
								</b>
							</p>
						</div>
						<div className={styles.right}>
							<img
								src={ProductImg}
								alt="three bottles of noor product with badges of free shipping and saving money"
							/>
						</div>
					</div>

					<ProductBlock />

					<p className={styles.text}>
						The <b className={styles.underline}>purest sources</b> of our 9 powerful hair growth targeting and
						thickening ingredients are found from remote locations and countries around the world such as the
						harsh{" "}
						<i>
							Arabian Desert and steep rocky Zagros Mountains, the Mediterranean incipient agriculture, The arid
							Nile valley and more…
						</i>
					</p>
					<p className={styles.text}>
						You’ve seen the news… Relations are getting more and more tense. There are active wars and there is
						constant talk of trade relations falling apart and prices rising even higher.
					</p>
					<p className={styles.text}>
						To be honest, <b>it has us a little worried…</b> We are committed to only using the purest, most
						concentrated strands of our proprietary blend of 9 POTENT ingredients found in Noor we can find and if
						the region of the Fertile Crescent suddenly cuts us off…
					</p>
					<p className={styles.text}>
						That means our entire product might be on pause until our leaders can figure things out again.
					</p>
					<p className={styles.text}>
						I’m being as transparent as possible and letting you know ahead of time, because I don’t want you to
						assume you can order it later, and by then we have completely run out…
					</p>
					<p className={styles.text}>
						So I’m also giving you <b className={styles.underline}>one last chance </b>to grab the best price
						possible on an additional 3-bottle Package at an <b>Incredible 80% Discount!</b>
					</p>
					<p className={styles.text}>
						You’re getting all the <b>incredible benefits of Noor</b> in your life, filling you with the essential
						nutrients, growing new thicker, stronger, and shiner hair all for pennies a day…
					</p>
					<p className={styles.text}>
						You know <b>you can do it</b>, so don’t wait any longer to claim your discount and set yourself up for
						success.
					</p>
					<p className={styles.text}>
						Click the button below to add the 32-bottle “New Customer” Package to your order <b>now</b> while
						stocks last!
					</p>

					<ProductBlock />

					<BottomShipment />
				</Container>
			</main>
			<Footer outerStyles={styles.footerStyling} />
		</>
	);
}
