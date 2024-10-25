import Container from "@ui/Container/Container.jsx";
import styles from "./Footer.module.scss";
import { Logo } from "@ui/Logo/Logo.jsx";

export default function Footer({ outerStyles }) {
	return (
		<footer className={`${styles.footer} ${outerStyles}`}>
			<Container outerStyles={styles.footerOuterStyles}>
				<div className={styles.left}>
					<Logo outerStyles={styles.logo} />
					<h3>Returns Address & Contact</h3>
					<p>
						Returns Address:
						<br />
						P.O. Box 90129
						<br />
						Lakeland, FL 33804
						<br />
						<br />
						Business Address:
						<br />
						7901 4th St. N, STE 15541
						<br />
						St. Petersburg, FL 33702
						<br />
						<br />
						Support Contact:
						<br />
						Support Hours: 9AM - 5PM EST
						<br />
						Phone: (510) 605-3796
						<br />
						Email: <a href="mailto:support@noorhairofficial.com">support@noorhairofficial.com</a>
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.rightTop}>
						<div className={styles.rightTopLeft}>
							<a
								href="https://noorhairofficial.com/pages/about-us"
								target="_blank"
							>
								Contact Us
							</a>
							<a
								href="https://noorhairofficial.com/pages/shipping-orders-policy"
								target="_blank"
							>
								Terms & Conditions
							</a>
							<a
								href="https://noorhairofficial.com/pages/privacy-policy"
								target="_blank"
							>
								Privacy Policy
							</a>
							<a
								href="https://noorhairofficial.com/pages/subscription-policy"
								target="_blank"
							>
								Manage Subscription
							</a>
							<a
								href="https://noorhairofficial.com/pages/returns-refunds"
								target="_blank"
							>
								Returns & Refunds
							</a>
						</div>
						<div className={styles.rightTopRight}>
							<div className={styles.card}>
								✓ These statements have not been evaluated by the Food and Drug Administration. This product is
								not intended to diagnose, treat, cure, or prevent any disease.
							</div>
							<p>*Results are not guaranteed, individual results may vary.</p>
							<p>*The people in these videos and photos were compensated for their Noor review.</p>
							<p>
								*The reviews and ‘before and after’ images showcased on our site are for illustrative purposes
								and represent potential outcomes. They are not photographs of actual clients but are designed to
								depict the effectiveness of our hair care products. Individual results may vary and are
								influenced by various factors including hair type, condition, and personal care routine. The
								testimonials reflect the experiences of a few individuals, and while they are genuine, the
								results they describe may not be the same for everyone. They are presented to provide insights
								into our products and should not be interpreted as guarantees of specific results.
							</p>
							<p>*I also agree to Noor Hair's terms & conditions and to receive SMS text order updates.</p>
						</div>
					</div>
					<div className={styles.rightBottom}>
						<p>
							DISCLAIMER. The information provided on this site is for informational purposes only. It is not a
							substitute for professional medical advice. Do not use this information to diagnose or treat a
							health problem or disease, or to prescribe drugs or supplements. Only your health care provider
							should diagnose your health care problems and prescribe treatment. None of our claims or
							information, including any health claims, articles, advertising or product information, have been
							evaluated or approved by the US Food and Drug Administration (FDA). Products or ingredients
							referenced on this site are not intended to diagnose, treat, cure, or prevent any disease. Consult
							your health care provider before beginning any supplement, diet, or exercise program, before taking
							any medication or receiving treatment, especially if you are currently under medical care. Be sure
							to carefully read all product labels and packaging before use. If you have or suspect you may have
							a health problem, do not take any supplement without first consulting and getting approval from
							your health care provider. Results may vary. They are not guaranteed. Some reviews are based on
							real reviews from users to provide customers more clarity.
						</p>
						<p>
							THIS IS AN ADVERTISING NOTICE AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR A CONSUMER PROTECTION
							UPDATE.
						</p>
						<p>
							RESULTS ARE BASED ON REAL CUSTOMER RESULTS, BUT THE PEOPLE ON THIS PAGE ARE FICTIONAL
							REPRESENTATIONS TO PROTECT THE IDENTITY OF THE CUSTOMERS
						</p>
						<p>
							THE STORY DESCRIBED ON THIS SITE AND THE PERSON DESCRIBED IN THE STORY ARE NOT REAL. HOWEVER, THIS
							STORY IS BASED ON THE RESULTS THAT THE PEOPLE USING THESE PRODUCTS HAVE ACHIEVED. THE RESULTS
							PORTRAITED IN THE STORY AND THE COMMENTS ARE ILLUSTRATIVE, AND MAY NOT BE THE RESULTS YOU ACHIEVE
							WITH THESE PRODUCTS. THIS PAGE CAN RECEIVE REMUNERATION FOR CLICKING OR PURCHASE OF FEATURED
							PRODUCTS ON THIS SITE.
						</p>
						<p>
							THE MEDICAL RESEARCHERS ON THIS PAGE ARE FICTIONAL AND ARE NOT MEANT TO REPRESENT ACTUAL PRACTICING
							MEDICAL PROFESSIONALS
						</p>
						<p>© 2024 Noorhair. All Rights Reserved.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}
