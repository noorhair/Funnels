import { FaqsProps } from "./Faqs.proptypes";
import styles from "./Faqs.styles.module.scss";

import { FaqElement } from "@sharedUI";

export default function Faqs({ faqs, links, faqsLabel, linksLabel, linksMobile }: FaqsProps) {
	return (
		<div className={styles.faqs_container}>
			<div className={styles.right_section}>
				<h1>{faqsLabel}</h1>
				<div className={styles.faqs}>
					{faqs.map((faq, index) => {
						return (
							<FaqElement
								question={faq.question}
								response={faq.response}
								key={index}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.left_section}>
				<h1>{linksLabel}</h1>
				<div className={styles.paragraphs}>
					<p>Clinical Research</p>
					{links.map((link, index) => {
						return (
							<p key={index}>
								{index + 1}. {link}
							</p>
						);
					})}
				</div>
				<div className={styles.paragraphsMobile}>
					<p>Clinical Research</p>
					{linksMobile?.map((link, index) => {
						return (
							<p key={index}>
								{index + 1}. {link}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}
