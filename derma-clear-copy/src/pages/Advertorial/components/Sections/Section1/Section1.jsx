import styles from "./Section1.module.scss";
import Image from "../../../ui/Image/Image.jsx";
import image1 from "@images/Advertorial/image_1.webp";
import facebookIcon from "@images/Advertorial/share/facebook.webp";
import pinterestIcon from "@images/Advertorial/share/pinterest.webp";
import mailIcon from "@images/Advertorial/share/mail.webp";
import linkedinIcon from "@images/Advertorial/share/linkedin.webp";
import twitterIcon from "@images/Advertorial/share/twitter.webp";

export default function Section1({ dateAttr, dateStr }) {
	return (
		<section className={styles.container}>
			<span className={styles.text}>HEALTH</span>
			<h1 className={styles.heading}>
				LIFE-CHANGING: A Celebrity Dermatologist from Texas Discovers a Unique Remedy to Reverse Hair Thinning and
				Loss in Women Over 40
			</h1>
			<time
				className={styles.date}
				dateTime={dateAttr}
			>
				{dateStr}
			</time>
			<ul className={styles.list}>
				<li className={styles.listItem}>HEALTH</li>
				<li className={styles.listItem}>HAIR CARE</li>
				<li className={styles.listItem}>HAIR LOSS</li>
				<li className={styles.listItem}>HAIR REJUVENATION</li>
			</ul>
			<Image
				imageDesktop={image1}
				islazy={false}
			/>

			<div className={styles.socailShareContainer}>
				<p className={styles.socailShareText}>SHARE</p>
				<ul className={styles.socailShareList}>
					<li className={styles.socialShareItem}>
						<img
							src={facebookIcon}
							alt="facebook"
						/>
					</li>
					<li className={styles.socialShareItem}>
						<img
							src={twitterIcon}
							alt="twitter"
						/>
					</li>
					<li className={styles.socialShareItem}>
						<img
							src={linkedinIcon}
							alt="linkedin"
						/>
					</li>
					<li className={styles.socialShareItem}>
						<img
							src={pinterestIcon}
							alt="pinterest"
						/>
					</li>
					<li className={styles.socialShareItem}>
						<img
							src={mailIcon}
							alt="mailbox"
						/>
					</li>
				</ul>
			</div>
		</section>
	);
}
