import Image from "../../../ui/Image/Image.jsx";
import image20 from "@images/Advertorial/image_20.webp";
import image21 from "@images/Advertorial/image_21.webp";
import image22 from "@images/Advertorial/image_22.webp";
import image23 from "@images/Advertorial/image_23.webp";
import image24 from "@images/Advertorial/image_24.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import { Quote } from "../../../ui/Quote/Quote.jsx";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section16() {
	const listOfQuotes = [
		{
			img: image20,
			quote: "I heard about Dr. Pezad's breakthrough but thought it was too good to be true. Well... after 28 days, my hair is noticeably thicker and healthier! I'm so grateful.",
			author: "Marie D. from Chicago",
		},
		{
			img: image21,
			quote: "Try it! I saw amazing results in just a month.",
			author: "Allison O. from San Francisco",
		},
		{
			img: image22,
			quote: (
				<>
					I've struggled with thinning hair for years. Nothing ever worked. In just 30 days, <ProductHyperLink />{" "}
					made a huge difference. It's so easy. Thank you, Dr. Pezad!
				</>
			),
			author: "Mia W. from Boston",
		},
		{
			img: image23,
			quote: (
				<>
					I was shocked when my friend recommended <ProductHyperLink />
					... I didn't expect much, but now my hair looks incredible.
				</>
			),
			author: "Kasey G. from Seattle",
		},
		{
			img: image24,
			quote: "I regained confidence in my hair without any side effects. Highly recommended.",
			author: "Megan L. from Denver",
		},
	];
	return (
		<section>
			<SectionHeader>
				What Do People Say About <ProductHyperLink />?
			</SectionHeader>
			{listOfQuotes.map((item, index) => {
				return (
					<div key={item.author + index}>
						<Image
							imageDesktop={item.img}
							isLazy={false}
						/>
						<Quote author={item.author}>{item.quote}</Quote>
					</div>
				);
			})}
		</section>
	);
}
