import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.heading}>© Noor Hair 2024. All rights reserved.</h2>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<a
						href="https://noorhairofficial.com/pages/privacy-policy"
						target="_blank"
					>
						Privacy
					</a>
				</li>
				<li className={styles.listItem}>
					<a
						href="https://noorhairofficial.com/pages/about-us"
						target="_blank"
					>
						Contact
					</a>
				</li>
			</ul>
			<p className={styles.text}>
				<b>THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.</b>
			</p>
			<p className={styles.text}>
				<b>Disclaimer:</b> The statements regarding <b>Noor Hair Love Serum</b> have not been evaluated by the Food
				and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
				Individual results may vary.
			</p>
			<p className={styles.text}>
				<b>Note:</b> Consult with a healthcare professional before starting any new hair treatment, especially if
				you have underlying health conditions or are on medication.
			</p>
			<p className={styles.text}>
				**Results may vary / results may not be typical / reviews or testimonials may be fictionalized. This
				information does not constitute medical advice and should not be relied upon as such. Consult with your
				doctor before modifying your regular medical regimen.
			</p>
			<p className={styles.text}>
				By clicking on the link, Noor Hair Love Serum will check the available stock. Then simply complete the
				checkout process quickly and securely.
			</p>
			<p className={styles.text}>
				Due to recent media attention, Noor Hair Love Serum is almost sold out. As of today, it's still in stock,
				but if you miss out, it won't be back in stock until December 2024.
			</p>
			<p className={styles.text}>
				<b>
					Don't miss this opportunity to transform your hair.{" "}
					<a
						className={styles.maskedLink}
						href={window.location.href + "main"}
					>
						Claim your bottle now!
					</a>
				</b>
			</p>
		</footer>
	);
}
