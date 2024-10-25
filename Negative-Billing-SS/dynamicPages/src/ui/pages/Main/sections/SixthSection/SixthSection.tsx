import styles from "./SixthSection.styles.module.scss";

import { Section } from "@sharedUI";

import GinkoBilboa from "@images/GinkoBilboa.webp";
import GinkoBilboaMobile from "@images/mobile/GinkoBilboaMobile.webp";
import OleanolicAcid from "@images/OleanolicAcid.webp";
import OleanolicAcidMobile from "@images/mobile/OleanolicAcidMobile.webp";
import ApiGenin from "@images/ApiGenin.webp";
import ApiGeninMobile from "@images/mobile/ApiGeninMobile.webp";
import CastorOil from "@images/CastorOil.webp";
import CastorOilMobile from "@images/mobile/CastorOilMobile.webp";
import img1 from "@images/section7Img1.webp";
import img1Mobile from "@images/mobile/section7Img1Mobile.webp";
import { IngredientCard } from "@pagesUI/Main/components";

export default function SixthSection() {
  return (
    <Section className={styles.section_container} isBeige>
      <h1 className={styles.title}>
        How The Super Serum’s Unique Ingredients Combat Thinning Hair and Unlock
        Thicker Hair Growth Unlike Anything Else
      </h1>

      <IngredientCard
        numIngredient={1}
        paragraphs={[
          "The Chinese ‘Living Fossil’ Tree That Increases Blood Flow To Your Scalp and Combats Aging",
        ]}
        plantName={"GINKGO BILOBA"}
        img={GinkoBilboa}
        imgMobile={GinkoBilboaMobile}
        htmlRightContent={
          <div className={styles.paragraphs_container}>
            <p>
              Japanese scientists recently discovered that this strange plant
              helps promote hair regrowth.<sup>1</sup>
            </p>
            <p>
              For thousands of years, the Chinese used Ginkgo because of its
              many health benefits and “strengthening” properties. This may
              explain why the Chinese experience less hair loss and thinning
              than others.
            </p>
            <p>
              It works by first helping to delay the effects of aging
              <sup>2,3</sup>… then it boosts blood flow to the scalp.
              <sup>1</sup> More blood to the scalp = more hair growth.✓
            </p>
            <p>
              <b>
                <mark>
                  What’s incredible is this: Ginkgo Biloba’s anti-aging
                  properties can help anyone struggling with hair loss from
                  genetics.*
                </mark>
              </b>
            </p>
            <p>
              Two groups of researchers from China and Brazil proved it in two
              different studies…
            </p>
            <p>
              Subjects given high levels of Ginkgo Biloba showed a remarkable
              delay in age-related signs…
            </p>
            <p>
              Turning back the clock and preparing the follicles to return to
              their active, growing state.<sup>2,3</sup>
            </p>
            <p>
              This is what makes his exotic plant so effective. And the best
              part is that most hair growth serums on the market do not have
              Ginkgo Biloba. Noor's Super Serum is one of the only ones to
              contain this potent, natural ingredient.
            </p>
          </div>
        }
      />

      <IngredientCard
        numIngredient={2}
        paragraphs={[
          "The Hair Protector That Blocks DHT and Multiplies Hair Follicle Cells",
        ]}
        plantName={"OLEANOLIC ACID"}
        img={OleanolicAcid}
        imgMobile={OleanolicAcidMobile}
        htmlRightContent={
          <div className={styles.paragraphs_container}>
            <p>
              Found in Holy Basil, recent research is showing that Oleanolic
              Acid is one of the most powerful DHT blockers on the market.
            </p>
            <p>
              It’s a close cousin of Linoleic Acid, which studies have proven is
              47% MORE effective than minoxidil in blocking DHT… without the
              negative side effects!<sup>4</sup>
            </p>
            <p>
              <b>
                <mark>
                  DHT is a hormone, so this breakthrough is key for anyone
                  struggling with hormonal hair loss.*
                </mark>
              </b>
            </p>
            <p>
              <b>
                Basically, Oleanolic Acid’s DHT-blocking properties can keep
                hormones from messing with your hair.
              </b>
            </p>
            <p>
              Plus, it won’t disrupt your hormones in any other way (unlike
              other solutions).
            </p>
            <p>
              And aside from blocking DHT, a PubMed study from 2017 suggests
              that Oleanolic Acid can actually multiply your hair follicle
              cells.<sup>5</sup>
            </p>
            <p>
              That’s right. When the researchers put Oleanolic Acid on the human
              follicle they saw it increase in length.<sup>5</sup> It also
              stayed in the growth phase for longer.<sup>5</sup> And that’s not
              all…
            </p>
            <p>
              Another group of researchers from Japan ran a clinical trial to
              see how effective Oleanolic Acid is at stimulating new hair
              growth. They applied it to 14 subjects struggling with hair
              loss...
            </p>
            <p>
              <b>
                And at 4 months, they observed a significant increase in hair
                growth for nearly all the subjects.<sup>6</sup>
              </b>
            </p>
            <p>
              Best of all, Noor’s unique Oleanolic Acid is unlike anything else
              you can find on the market - pure, effective, and natural.
            </p>
          </div>
        }
      />

      <IngredientCard
        numIngredient={3}
        paragraphs={[
          "The Secret Compound That Reduces Stress And Boosts Hair Thickness",
        ]}
        plantName={"APIGENIN"}
        img={ApiGenin}
        imgMobile={ApiGeninMobile}
        htmlRightContent={
          <div className={styles.paragraphs_container}>
            <p>
              Apigenin has been the focus of the scientific community ever since
              its potent hair growth properties were discovered in 2023.
            </p>
            <p>
              A study led by Jeffrey Rapaport found that serums packed with{" "}
              <b>
                Apigenin significantly improved hair growth… AND reduced hair
                shedding. In as fast as 8 weeks!<sup>7</sup>
              </b>
            </p>
            <p>
              Why is Apigenin so effective? And why is it on the cutting-edge of
              the scientific community?
            </p>
            <p>
              Well it all boils down to how effectively it combats hair loss
              from stress. The proof come from a group of Korean researchers
              that published their findings in the Archives of Dermatological
              Research.<sup>8</sup>
            </p>
            <p>
              They found that Apigenin uses its antioxidant properties to
              ‘block’ the TGF-beta 1 gene (a gene closely associated with
              stress).<sup>8</sup> This helps extend the growth stage of your
              follicle’s life cycle…
            </p>
            <p>
              <b>
                To reduce thinning and stimulate thicker, more youthful
                hair growth!✓
              </b>
            </p>
            <p>And that’s not all…</p>
            <p>
              In 2022 a study from Saudi Arabian researchers confirmed
              Apigenin’s anti-stress properties… suggesting that it may have
              antidepressant effects!<sup>9</sup>
            </p>
            <p>
              <b>
                <mark>
                  We included Apigenin in the Super Serum formula so it could
                  help anyone struggling with stress related hair loss.*
                </mark>
              </b>
            </p>
            <p>
              But that’s not all. The next ingredient is the ‘glue’ of the
              rejuvenation breakthrough that brings it all together.
            </p>
          </div>
        }
      />

      <IngredientCard
        numIngredient={4}
        paragraphs={[
          "The Palma Christi Oil That Has Been Used For Thousands",
          "Of Years In Traditional Medicine",
        ]}
        plantName={"CASTOR OIL"}
        img={CastorOil}
        imgMobile={CastorOilMobile}
        htmlRightContent={
          <div className={styles.paragraphs_container}>
            <p>
              The fourth key ingredient has been used for thousands of years for
              its healing and protecting power. Christ healed the sick, which is
              why this wonder ingredient is also known as “Palma Christi” or
              “Hand of Christ”.
            </p>
            <p>
              You probably know it as Castor Oil… and if Christ used it to heal,{" "}
              <b>
                then it can help anyone with hair loss, shedding, or thinning.
              </b>
            </p>
            <p>
              Plus, after all the hard work you made to regrow, protect and
              nourish your hair…
            </p>
            <p>
              It’s CRITICAL you make it stronger than ever to protect it from
              hair loss or thinning again.
            </p>
            <p>
              Castor Oil is full of omega-6 and omega-9 fatty acids that will do
              just that. It is proven to help strengthen your hair from the
              root…{" "}
              <b>
                Making it far stronger than it was before and less prone to
                breakage.✓
              </b>
            </p>
            <p>But that’s hardly its best benefit…</p>
            <p>
              Castor Oil is a ‘carrier-oil’ that works to soothe and support the
              scalp.✓
            </p>
            <p>
              See, most of the ingredients in the Super Serum are very
              powerful.. almost too powerful.
            </p>
            <p>
              It’s important they are, so they can penetrate the 5 layers of the
              scalp and rejuvenate the roots, remember?
            </p>
            <p>
              <b>
                <mark>
                  Well the truth is, without Castor Oil, there might be side
                  effects from these potent ingredients.
                </mark>
              </b>
            </p>
            <p>
              But thanks to Castor Oil, the all-star ingredients we just talked
              about can safely and naturally penetrate the 5 layers of the
              scalp… WITHOUT any side effects.✓
            </p>
            <p>
              Plus, this powerful combination allows your follicles to withstand
              more damage in the future.
            </p>
            <div className={styles.paragraphs_container}>
				<p>
					This way, your jaw-dropping{" "}
					<b>new head of hair lasts as long as possible without any breakage, receding or thinning.</b>
				</p>
			</div>
			<picture>
				<source
					media="(max-width: 550px)"
					srcSet={img1Mobile}
				/>
				<source
					media="(min-width: 551px)"
					srcSet={img1}
				/>
				<img
					src={img1}
					className={styles.img}
					alt="Womens hair"
				/>
			</picture>

          </div>
        }
      />
    </Section>
  );
}
