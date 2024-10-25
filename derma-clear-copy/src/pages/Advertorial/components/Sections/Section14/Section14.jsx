import Image from "../../../ui/Image/Image.jsx";
import image17 from "@images/Advertorial/image_17.webp";
import chart2 from "@images/Advertorial/chart_2.webp";
import image18 from "@images/Advertorial/image_18.webp";
import { SectionHeader } from "../../../ui/SectionHeader/SectionHeader.jsx";
import { Quote } from "../../../ui/Quote/Quote.jsx";
import ProductHyperLink from "../../../ui/ProductHyperlink/ProductHyperLink.jsx";

export default function Section14() {
	return (
		<section>
			<SectionHeader>
				Is <ProductHyperLink /> Safe?
			</SectionHeader>
			<p>
				<ProductHyperLink /> is very safe because it is made from natural ingredients, meticulously researched by
				Dr. Pezad.
			</p>
			<p>No side effects.</p>
			<Image
				imageDesktop={chart2}
				isLazy={false}
			/>
			<p>
				72% of people who used traditional hair treatments experienced side effects, while <b>0%</b> of{" "}
				<ProductHyperLink /> users reported any adverse effects.
			</p>
			<p>And look what some of these clients said:</p>
			<Image
				imageDesktop={image17}
				isLazy={false}
			/>
			<Quote author="Sarah from New York">
				I was hesitant about trying another hair product because of previous bad experiences. But{" "}
				<ProductHyperLink /> is gentle and effective. My hair has never looked better.
			</Quote>
			<Image
				imageDesktop={image18}
				isLazy={false}
			/>
			<Quote author="Michelle from Los Angeles">
				<ProductHyperLink /> helped me regain my confidence without any side effects.
			</Quote>
			<p>
				So if you're still in doubt about <ProductHyperLink />, you have nothing to worry about.
			</p>
			<p>Just imagine how much better your hair will look without any effort.</p>
		</section>
	);
}
