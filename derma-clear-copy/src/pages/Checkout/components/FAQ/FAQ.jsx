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
						<b>A:</b> Absolutely!* It doesn't matter your age, hair type, ethnicity, or genetics. Noor has proved
						to support women that are 30 and women that are 70, from all over the world.*
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
						<b>A:</b> Yes! Along with traction alopecia, Noor is proven to work effectively against all types of
						alopecia. Androgenetic alopecia, Scarring / cicatricial alopecia, Anagen effluvium, etc.
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
						<b>A:</b> Yes!<sup>2</sup> Noor’s key compound was tested for growth speed by a group of researchers
						from the Journal of Cosmetic Dermatology. They found that its subjects were more protected against
						alopecia... And begin the journey to thicker, natural hair.<sup>2</sup>
					</p>
				</div>
			),
		},
		{
			title: "How Much Should I Buy?",
			content: (
				<div>
					<p>
						<b>A:</b> For a limited time only, we are giving away FREE BOTTLES for New Customers!
					</p>
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
						<b>A:</b> First the Moroccan Argan Oil protects the hair from the damage of alopecia so hair growth is
						possible
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
						<b>A:</b> Cyclopentasiloxane/Cyclotetrasiloxane (Silicone), Aloe Vera, Dimethicone, Fragrance, Argan
						Oil, Tocopheryl Acetate
					</p>
				</div>
			),
		},
		{
			title: "How do I Use Noor Hair Love Serum?",
			content: (
				<div>
					<p>
						<b>A:</b> Simply apply 2 small drops to the scalp before going to bed. And before anyone asks... no,
						it will not make your hair oily. It'll be as if nothing is in the hair. Nobody will be able to tell.
					</p>
				</div>
			),
		},
		{
			title: "How Long Will it Take to See Results?",
			content: (
				<div>
					<p>
						<b>A:</b> Most women say their hair feels better seemingly overnight.*
					</p>
				</div>
			),
		},
		{
			title: "Is this legit? What if this doesn’t work for me?",
			content: (
				<div>
					<p>
						<b>A:</b> Yes it is legit, and we are sure it will work, as it does for thousands of other women. But
						if not, you have a full 180 days to get a full refund. This makes it possible to order your FREE
						Bottle today totally risk free!
					</p>
				</div>
			),
		},
		{
			title: "Q: Is it ok if I sleep with it in?",
			content: (
				<div>
					<p>
						<b>A:</b> Yes, most women report it is ok to sleep with the Love Serum in your hair. However, we
						recommend wearing a headwrap or shower cap to protect your bedding, or use an old pillowcase to avoid
						stains.
					</p>
					<br />
					<p>
						If you experience any reactions (unlikely), wash out the Love Serum and be sure to only use for 1-4
						hours, not overnight.
					</p>
				</div>
			),
		},
		{
			title: "Q: Will this make my hair greasy or oily?",
			content: (
				<div>
					<p>
						<b>A:</b> No, most women say they can barely tell the difference. It’s like nothing is there in the
						hair, so you can leave it in for 1-4 hours without the oiliness or grease.
					</p>
				</div>
			),
		},
		{
			title: "Q: What does it smell like?",
			content: (
				<div>
					<p>
						<b>A:</b> It smells incredible. The smell is like fresh rosemary and aromatic delight. Like a crisp
						winter day.
					</p>
				</div>
			),
		},
		{
			title: "Q: Is it safe for color treated or chemically treated hair?",
			content: (
				<div>
					<p>
						<b>A:</b> Yes, Love Serum is safe to use for all hair. It will not discolor the hair or cause any
						damage.
					</p>
				</div>
			),
		},
		{
			title: "Q: Does it cause hair loss before hair growth?",
			content: (
				<div>
					<p>
						<b>A:</b> Most women do not report any initial hair loss, unlike minoxidil or other solutions.
					</p>
				</div>
			),
		},
		{
			title: "Q: If I stop taking it will my hair start falling out again?",
			content: (
				<div>
					<p>
						<b>A:</b> It’s very unlikely, but we cannot guarantee it. To be totally safe, most women stay on a
						subscription to always have as many bottles as possible, so in case anything happens, they have extra
						Love Hair Serum ready to use.
					</p>
				</div>
			),
		},
		{
			title: "Q: Can I apply it directly to the hair?",
			content: (
				<div>
					<p>
						<b>A:</b> We recommend applying it directly to the scalp, since that is how the Love Serum works its
						magic. However, you can also apply it directly to the hair itself, yes. No problem.
					</p>
				</div>
			),
		},
		{
			title: "Q: Can I use this with my other hair care products?",
			content: (
				<div>
					<p>
						<b>A:</b> Yes! While Noor by itself is enough to help support thicker hair growth… It also complements
						other hair care products very well. But eventually, most women drop other alternatives completely and
						only use Noor products because of Noor’s dedication to quality and customer success.*
					</p>
				</div>
			),
		},
		{
			title: "Q: Do I need to add anything to Noor Hair Love Serum to make it work?",
			content: (
				<div>
					<p>
						<b>A:</b> No, the Love Serum is already infused with a sacred blend of carrier oils like Castor Oil,
						the powerful Tocopheryl Acetate antioxidant and Aloe Vera. This is what supercharges the results. This
						single product has it all. It’s the only product you’ll need for extraordinary results.*
					</p>
				</div>
			),
		},
		{
			title: "Q: Is this legit? What if this doesn’t work for me?",
			content: (
				<div>
					<p>
						<b>A:</b> Yes, it is legit, and we are sure it will work, as it does for thousands of other women.*
						But if not, you have a full 180 days to get a full refund. This means you can order the 6-month bundle
						without any risk. Plus, Noor is so confident in their Love Serum that they will let you keep the
						bottles. That’s how sure they are that you’ll see extraordinary results.
					</p>
				</div>
			),
		},
		{
			title: "Q: Does it cause hair loss before hair growth?",
			content: (
				<div>
					<p>
						<b>A:</b> Most women do not report any initial hair loss, unlike minoxidil or other solutions.
					</p>
				</div>
			),
		},
		{
			title: "How can I Buy Noor Hair Love Serum?",
			content: (
				<div>
					<p>
						<b>A:</b> It’s easy, just tel us where to ship your FREE bottle today and click the “RUSH MY ORDER” to
						make sure we have available inventory.
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
