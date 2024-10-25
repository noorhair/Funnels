import styles from "./FAQ.module.scss";
import Accordion from "./Accordion/Accordion";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export default function FAQ() {
	const faqItems = [
		{
			title: "Does Noor Hair Love Serum Work for Everyone?",
			content: (
				<div>
					<p>
						Absolutely!* It doesn't matter your age, hair type, ethnicity, or genetics. Noor has proved to support
						women that are 30 and women that are 70, from all over the world.*
					</p>
					<br />
					<p>
						Noor also comes with a 180-day money-back guarantee, no questions asked. You risk absolutely nothing
						by investing in your scalp health today.
					</p>
				</div>
			),
		},
		{
			title: "Does Noor Hair Love Serum combat regular Alopecia too?",
			content: (
				<div>
					<p>
						Yes! Along with traction alopecia, Noor is proven to work effectively against all types of alopecia.
						Androgenetic alopecia, Scarring / cicatricial alopecia, Anagen effluvium, etc.
					</p>
					<br />
					<p>
						One of Noor main ingredient's is an antioxidant found in Italian Olives called Tocopheryl Acetate. A
						recent study found that people with different types of Alopecia saw a 34% increase in hair with this
						ingredient.<sup>1</sup>
					</p>
				</div>
			),
		},
		{
			title: "Does Noor Hair Love Serum make hair grow faster and longer?",
			content: (
				<div>
					<p>
						Yes!<sup>2</sup> Noor’s key compound was tested for growth speed by a group of researchers from the
						Journal of Cosmetic Dermatology. They found that its subjects were more protected against alopecia...
						And begin the journey to thicker, natural hair.<sup>2</sup>
					</p>
				</div>
			),
		},
		{
			title: "How Much Should I Buy?",
			content: (
				<div>
					<p>For a limited time only, we are giving away FREE BOTTLES for New Customers!</p>
					<br />
					<p>All you need to do is tell us where to ship so you can try Noor risk-free. </p>
				</div>
			),
		},
		{
			title: "How Does Noor Hair Love Serum Combat Sparse Edges, Thinning, and Hair Los Again?",
			content: (
				<div>
					<p>
						First the Moroccan Argan Oil protects the hair from the damage of alopecia so hair growth is possible
						<sup>2</sup>… then the Italian Olives antioxidant jumpstarts new baby hair growth in a matter of
						weeks!<sup>2</sup>
					</p>
				</div>
			),
		},
		{
			title: "What are the full ingredients?",
			content: (
				<div>
					<p>
						Cyclopentasiloxane/Cyclotetrasiloxane (Silicone), Aloe Vera, Dimethicone, Fragrance, Argan Oil,
						Tocopheryl Acetate
					</p>
				</div>
			),
		},
		{
			title: "How do I Use Noor Hair Love Serum?",
			content: (
				<div>
					<p>
						Simply apply 2 small drops to the scalp before going to bed. And before anyone asks... no, it will not
						make your hair oily. It'll be as if nothing is in the hair. Nobody will be able to tell.
					</p>
				</div>
			),
		},
		{
			title: "How Long Will it Take to See Results?",
			content: (
				<div>
					<p>Most women say their hair feels better seemingly overnight.*</p>
				</div>
			),
		},
		{
			title: "Is this legit? What if this doesn’t work for me?",
			content: (
				<div>
					<p>
						Yes it is legit, and we are sure it will work, as it does for thousands of other women. But if not,
						you have a full 180 days to get a full refund. This makes it possible to order your FREE Bottle today
						totally risk free!
					</p>
				</div>
			),
		},
		{
			title: "How can I Buy Noor Hair Love Serum?",
			content: (
				<div>
					<p>
						It’s easy, just tel us where to ship your FREE bottle today and click the “RUSH MY ORDER” to make sure
						we have available inventory.
					</p>
					<br />
					<p>You’ll be taken to the secure order page. It takes just two minutes to complete.</p>
					<br />
					<p>Once you’re finished, we’ll ship your order ASAP.</p>
				</div>
			),
		},
	];
	return (
		<section className={styles.faq}>
			<SectionHeader>Frequently Asked Questions</SectionHeader>
			<ul className={styles.faqContainer}>
				{faqItems.map((item, index) => {
					return (
						<li
							className={styles.faqItem}
							key={index}
						>
							<Accordion
								title={item.title}
								content={item.content}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
