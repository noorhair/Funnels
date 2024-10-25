import Container from "../ui/Container/Container";
import Header from "../ui/Header/Header";
import Footer from "@ui/Footer/Footer";
import styles from "./Upsell4.module.scss";
import ProductTopBlock from "../ui/ProductTopBlock/ProductTopBlock";
import ProductImg from "@images/USDS/us4_product.webp";
import BookFirstImg from "@images/USDS/us4_book1.webp";
import BookSecondImg from "@images/USDS/us4_book2.webp";
import PriceBlock from "./components/PriceBlock/PriceBlock";
import BottomProduct from "./components/BottomProduct/BottomProduct";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { sendGAPageView } from "@logic/utils";
import { useEffect } from "react";
import Taboola from "@ui/Taboola/Taboola";

export default function Upsell4() {
	const discountPrice = "9.99";

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
					<p className={styles.redHead}>
						<span className={styles.redText}>Wait!</span> Here’s Your FINAL Exclusive Upgrade Offer:
					</p>
					<p className={styles.head}>
						Discover a Simple 3-Step DIY Hair Loss Remedy You Can Make from Home and Learn the Secrets of
						Hollywood Dermatologists
					</p>
					<ProductTopBlock>
						<p className={styles.productText}>
							Since you’ve shown real commitments towards accelerating your results, we want to offer you
							<b>exclusive access</b> to get our bestselling handbooks on how to create effective hair loss DIY
							remedies from home
						</p>
						<p className={styles.productText}>
							(we know you’ll love them, just like the other Noor VIPs lucky enough to read them)
						</p>

						<p className={styles.productText}>
							You Receive 2 versions of each handbook. <b>4 TOTAL handbooks.</b>
						</p>

						<p className={styles.productText}>
							One Set for Straight, Wavy hair
							<br />
							One set for Curly, Coily, and Kinky hair
						</p>

						<img
							src={ProductImg}
							className={styles.productImg}
							loading="lazy"
							alt="books"
						/>
						<h1 className={styles.productName}>
							Get These 2 Exclusive Handbooks to Help Fast-track Your Hair Growth Journey:
						</h1>

						<p className={styles.productText}>Handbook #1 - A Powerful 3-Step System to Overcome Hair Loss</p>
						<p className={styles.productText}>
							Handbook #2 - 10 Secrets Hollywood Dermatologists Don’t Want You to Know About Growing Thicker Hair
						</p>
						<PriceBlock
							regularPrice="49"
							discountPrice={discountPrice}
						/>
						<ButtonsBlock discountPrice={discountPrice} />
					</ProductTopBlock>

					<div className={styles.booksBlock}>
						<div className={styles.bookContainer}>
							<img
								src={BookFirstImg}
								className={styles.bookImg}
								loading="lazy"
								alt="couple books"
							/>
							<p className={styles.bookTitle}>BONUS #1 A Powerful 3-Step System To Overcome Hair Loss</p>
							<p className={styles.bookDesc}>
								<b>
									This system will potentially save you from spending thousands of dollars on useless products.
								</b>{" "}
								It will also save you hours of boring, nerve-wracking research.{" "}
								<b>And following a step-by-step system will ensure faster and stronger results…</b> Helping you
								look years younger thanks to thicker, stronger, and longer hair.
							</p>
						</div>
						<div className={styles.bookContainer}>
							<img
								src={BookSecondImg}
								className={styles.bookImg}
								loading="lazy"
								alt="couple books"
							/>
							<p className={styles.bookTitle}>
								BONUS #2 10 Secrets Hollywood Dermatologists Don’t Want You To Know About Growing Thicker Hair
							</p>
							<p className={styles.bookDesc}>
								Discover the powerful secrets used by celebrities to enjoy incredible hair for years…{" "}
								<b>Even after they hit 50, 60, or even 70!</b> For example,{" "}
								<b>The Truth About the #1 “Anti-Aging” Vitamin and Why Hollywood uses something different.</b>{" "}
								And Why your Shampoo and Conditioner might be causing more harm rather than good...
							</p>
						</div>
					</div>

					<p className={styles.greenTitle}>
						You will learn effective home remedies from These Handbooks that will Accelerate Your Results!
					</p>

					<BottomProduct discountPrice={discountPrice} />
				</Container>
			</main>
			<Footer outerStyles={styles.footerStyling} />
		</>
	);
}
