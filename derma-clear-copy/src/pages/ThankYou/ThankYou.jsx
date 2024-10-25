import styles from "./ThankYou.module.scss";
import Container from "@ui/Container/Container.jsx";
import headerLogo from "@images/ThankYou/Logo.webp";
import completeImg from "@images/ThankYou/complete_sign.webp";
import firstClientImg from "@images/feedback_1.webp";
import secondClientImg from "@images/feedback_2.webp";
import ScrollToTop from "@ui/ScrollToTop/ScrollToTop.jsx";
import { useEffect } from "react";
import { sendGAPageView } from "@logic/utils";
import Taboola from "@ui/Taboola/Taboola";

export default function ThankYou() {
	useEffect(() => {
		sendGAPageView();
	}, []);

	return (
		<>
			<ScrollToTop />
			<header className={styles.header}>
				<img
					src={headerLogo}
					className={styles.headerImg}
					alt="noor logo"
				/>
			</header>
			<Taboola />
			<Container outerStyles={styles.customContainer}>
				<section>
					<img
						src={completeImg}
						className={styles.completeImg}
						alt="complete white sign in dark green circle"
					/>
					<h2 className={styles.heading}>THANK YOU FOR YOUR ORDER</h2>
					<div className={styles.textContainer}>
						<p className={styles.text}>Hello there! It's Angela, from the Noor family.</p>
						<p className={styles.text}>A heartfelt thank you for bringing Noor into your life!</p>
						<p className={styles.text}>
							We're so over the moon that you're willing to trust us with your hair. 🌟
						</p>
						<p className={styles.text}>
							The reason I created Noor Hair is because I was losing my hair, and my identity with it, and I
							needed a solution I could trust. Since I couldn’t find one, I did the research to create one.
						</p>
						<p className={styles.text}>
							Our goal is to support as many women as we can like yourself, get lustrous, thick and healthy hair…
							and trust us, you're going to be thrilled with the results!
						</p>
						<p className={styles.text}>Here's some exciting news: you're in great company!</p>
						<p className={styles.text}>
							<b>
								More than +80,000 amazing women just like you have chosen Noor to nourish their locks to health
								and happiness.
							</b>
						</p>
						<img
							src={firstClientImg}
							className={styles.clientImg}
							alt="cleint before and after hairs result"
						/>
						<img
							src={secondClientImg}
							className={styles.clientImg}
							alt="cleint before and after hairs result"
						/>
						<p className={styles.text}>
							<b>
								Think of it as becoming part of a warm community where everyone's goal is to turn hair woes into
								hair wows!
							</b>
						</p>
						<p className={styles.text}>
							<b>
								Now, about your order – our dedicated warehouse squad is on top of it, and they'll dispatch it
								swiftly!
							</b>
						</p>
						<p className={styles.text}>All of our shipments are sent out from our warehouse in Tampa, Florida.</p>
						<p className={styles.text}>Expect your package within about 5 days.</p>
						<p className={styles.text}>
							<b>
								Keep an eye on your inbox for an email from us with all the details about your order, and how to
								use your products, followed by another email that lets you track your package as it makes its
								way to you.
							</b>
						</p>
						<p className={styles.text}>
							Now, let’s dive into your hair care journey. The key here is CONSISTENCY!
						</p>
						<p className={styles.text}>
							Embrace your Noor ritual every day and you may notice less thinning in just the first week. ✅
						</p>
						<p className={styles.text}>
							Continue the routine, and by week three, not only you could see less shedding and thinning but your
							now nourished scalp could begin sprouting new, more healthy and vibrant hair.✅
						</p>
						<p className={styles.text}>
							Come week 6, prepare for the wow-factor – we're talking stronger, more radiant head.✅
						</p>
						<p className={styles.text}>
							<b>
								Stay the course, and in a few months, don't be surprised if you're getting asked, "What's your
								hair care secret?"
							</b>
						</p>
						<p className={styles.text}>If any questions pop up, don't hesitate to reach out.</p>
						<p className={styles.text}>
							Drop us an email at <b className={styles.underlinedText}>angela@noorhairofficial.com</b> or give us
							a call at <b>(510) 605-3796</b> - we're all ears and eager to assist!
						</p>
						<p className={styles.text}>
							And a little surprise for you – P.S. we've got some fabulous new hair treats, like a potent Hair
							Mask treatment and nourishing Keratin products. And because you've made a purchase today,
						</p>
						<p className={styles.text}>You've unlocked a special 15% discount on your next order.</p>
						<p className={styles.text}>
							Simply{" "}
							<a
								className={styles.link}
								target="_blank"
								href="https://noorhairofficial.com/discount/WELCOME15"
							>
								click here
							</a>{" "}
							and punch in the code WELCOME15 at checkout to enjoy 15% off on our entire range!
						</p>
						<p className={styles.text}></p>
					</div>
				</section>
			</Container>
		</>
	);
}
