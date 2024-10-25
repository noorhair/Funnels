import styles from "./Comments.module.scss";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader.jsx";
import imageIngrid from "@images/Advertorial/Ingrid.webp";
import imageNicole from "@images/Advertorial/Nicole.webp";
import imageSarah from "@images/Advertorial/Sarah.webp";
import imageSamantha from "@images/Advertorial/Samantha.webp";
import imageMegan from "@images/Advertorial/Megan.webp";
import imageLucy from "@images/Advertorial/Lucy.webp";
import imageKaren from "@images/Advertorial/Karen.webp";
import imageAndrea from "@images/Advertorial/Andrea.webp";
import imageTina from "@images/Advertorial/Tina.webp";
import imageCaroline from "@images/Advertorial/Caroline.webp";
import imageNicky from "@images/Advertorial/Nicky.webp";
import imageMihal from "@images/Advertorial/Mihal.webp";
import imageChloe from "@images/Advertorial/Chloe.webp";
import imageFrida from "@images/Advertorial/Frida.webp";
import imageNick from "@images/Advertorial/Nick.webp";
import imageChristine from "@images/Advertorial/Christine.webp";
import imageAlex from "@images/Advertorial/Alex.webp";
import imageZoe from "@images/Advertorial/Zoe.webp";
import imageChris from "@images/Advertorial/Chris.webp";
import imageSarah_fb from "@images/Advertorial/Sarah_fb.webp";
import imageKaren_fb from "@images/Advertorial/Karen_fb.webp";
import imageAndrea_fb from "@images/Advertorial/Andrea_fb.webp";
import imageNicky_fb from "@images/Advertorial/Nicky_fb.webp";
import imageFrida_fb from "@images/Advertorial/Frida_fb.webp";
import ProductHyperLink from "../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Comments() {
	const commentsList = [
		{
			author: "Ingrid M.",
			date: "26.09.2024",
			authorImg: imageIngrid,
			text: "This is a miracle product!!! I want to buy it too. Can't wait to see the results!",
			feedbackImg: null,
		},
		{
			author: "Nicole G.",
			date: "26.09.2024",
			authorImg: imageNicole,
			text: (
				<>
					So, what are you waiting for? Let's order it, ladies, and start rejuvenating our hair with{" "}
					<ProductHyperLink />! Since they offer a discount, you can try it before buying more to make sure.
				</>
			),
			feedbackImg: null,
		},
		{
			author: "Sarah H.",
			date: "26.09.2024",
			authorImg: imageKaren,
			text: "I already bought it. Check out the result. I didn't change anything else in my routine.",
			feedbackImg: imageSarah_fb,
			reply: true,
		},
		{
			author: "Samantha G.",
			date: "27.09.2024",
			authorImg: imageSamantha,
			text: "Excellent result!",
			feedbackImg: null,
			reply: true,
			lastReply: true,
		},
		{
			author: "Megan S.",
			date: "27.09.2024",
			authorImg: imageMegan,
			text: "The most important changes take place inside you. First, you change outside—and then emotionally, you feel happy like never before!",
			feedbackImg: null,
		},
		{
			author: "Lucy W.",
			date: "27.09.2024",
			authorImg: imageLucy,
			text: "I totally agree! After I started using this product, I feel more confident than ever. The best thing about it is that it requires no effort, it is so easy and convenient!",
			feedbackImg: null,
			reply: true,
			lastReply: true,
		},
		{
			author: "Karen J.",
			date: "27.09.2024",
			authorImg: imageSarah,
			text: (
				<>
					Here are my photos. I was so embarrassed about how my hair used to look! I tried other brands and
					treatments; they worked but only for a short term. It cost me a lot of money, time, and effort. But with{" "}
					<ProductHyperLink />, I saw results very quickly and very easily. First, I ordered a trial bottle, and
					from the first week, I realized that this product really works. Then I ordered a full course, which was
					very affordable. Everyone should try it.
				</>
			),
			feedbackImg: imageKaren_fb,
		},
		{
			author: "Andrea M.",
			date: "28.09.2024",
			authorImg: imageAndrea,
			text: (
				<>
					I confirm! <ProductHyperLink /> works really well even in problematic areas. It's obvious from the first
					days that the product works.
				</>
			),
			feedbackImg: imageAndrea_fb,
			reply: true,
			lastReply: true,
		},
		{
			author: "Tina B.",
			date: "28.09.2024",
			authorImg: imageTina,
			text: "I'm 53, do you think this will help at my age?",
			feedbackImg: null,
		},
		{
			author: "Caroline P.",
			date: "28.09.2024",
			authorImg: imageCaroline,
			text: "Should do. Anyway, this is so far the best of all products I've ever tried.",
			feedbackImg: null,
			reply: true,
			lastReply: true,
		},
		{
			author: "Nicky B.",
			date: "28.09.2024",
			authorImg: imageMihal,
			text: "Amazing serum! I appreciate the trial sample. If for some reason you don't like it, it won't cost you anything. It works for me. I am sharing my progress.",
			feedbackImg: imageNicky_fb,
		},
		{
			author: "Mihal D.",
			date: "28.09.2024",
			authorImg: imageFrida,
			text: "How long did it take you?",
			feedbackImg: null,
			reply: true,
		},
		{
			author: "Nicky B.",
			date: "29.09.2024",
			authorImg: imageMihal,
			text: "About a month",
			feedbackImg: null,
			reply: true,
			lastReply: true,
		},
		{
			author: "Chloe S.",
			date: "29.09.2024",
			authorImg: imageChloe,
			text: (
				<>
					I am so glad I found this <ProductHyperLink />
					!! My quality of life improved so much. I am a happy woman again... thank you!
				</>
			),
			feedbackImg: null,
		},
		{
			author: "Frida B.",
			date: "30.09.2024",
			authorImg: imageNicky,
			text: "People think I'm just 35 years old if at all, this is awesome! I used to be embarrassed by my appearance, but now I feel amazing!",
			feedbackImg: imageFrida_fb,
		},
		{
			author: "Andrea W.",
			date: "30.09.2024",
			authorImg: imageNick,
			text: "My sister and I both used the serum and saw fantastic results. This product is cool and very easy to use.",
			feedbackImg: null,
		},
		{
			author: "Christine K.",
			date: "01.10.2024",
			authorImg: imageChristine,
			text: "Today everyone can have beautiful, healthy hair, not just a few people with good genetics and a lot of free time for salon treatments.",
			feedbackImg: null,
		},
		{
			author: "Alex G.",
			date: "01.10.2024",
			authorImg: imageAlex,
			text: "It took me just a few weeks to get my hair back in control. The fastest improvement ever.",
			feedbackImg: null,
		},
		{
			author: "Zoe P.",
			date: "01.10.2024",
			authorImg: imageZoe,
			text: "It's so easy, all you need is just to use this serum.",
			feedbackImg: null,
		},
		{
			author: "Chris J.",
			date: "01.10.2024",
			authorImg: imageChris,
			text: "Order a trial bottle and you will immediately understand what it's all about—the most reliable and risk-free way!",
			feedbackImg: null,
		},
	];
	return (
		<section>
			<SectionHeader>COMMENTS</SectionHeader>

			{commentsList.map((item, index) => {
				let dateAttr = item.date.split(".").reverse().join("-");
				return (
					<figure
						key={item.author + index}
						className={`${styles.container} ${item.reply ? styles.reply : ""} ${
							item.lastReply ? styles.lastReply : ""
						}`}
					>
						<div className={styles.top}>
							<img
								className={styles.authorImg}
								src={item.authorImg}
								loading="lazy"
								alt={item.author}
							/>
							<div className={styles.authorInfo}>
								<figcaption className={styles.author}>{item.author}</figcaption>
								<time
									className={styles.time}
									dateTime={dateAttr}
								>
									{item.date}
								</time>
							</div>
						</div>
						<blockquote className={styles.quote}>{item.text}</blockquote>
						{item.feedbackImg ? (
							<img
								src={item.feedbackImg}
								className={styles.feedbackImg}
								loading="lazy"
								alt={`${item.author} before and after result`}
							/>
						) : (
							""
						)}
					</figure>
				);
			})}
		</section>
	);
}
