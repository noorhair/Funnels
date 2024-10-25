import styles from "./FourthSection.styles.module.scss";

import { Section } from "@sharedUI";

import img1 from "@images/section4Img1.webp";
import img1Mobile from "@images/mobile/section4Img1Mobile.webp";
import img2 from "@images/section4Img2.webp";
import img2Mobile from "@images/mobile/section4Img2Mobile.webp";
import img3 from "@images/section4Img3.webp";

import { TestimonialCard } from "@pagesUI/Main/components";

export default function FourthSection() {
  return (
    <Section className={styles.section_container} isBeige>
      <h1 className={styles.title}>
        We Tested the Super Serum on 100 of Our Customers… And the Results Blew
        Us Away*
      </h1>

      <div className={styles.paragraphs_container}>
        <p>We didn’t pick just any 100 customers though…</p>
        <p>
          We made sure to pick a diverse bunch struggling with hair loss for
          different reasons…
        </p>
        <p>Some barely had any hair left on their scalp…</p>
        <p>Some had only minor thinning on their edges or crown…</p>
        <p>
          And some already had great hair, but wanted it to be{" "}
          <b>thicker, fuller, and longer.</b>
        </p>
        <p>
          What did they have in common? They ALL wanted transformative results…
        </p>
        <p>And oh my… is that what they got!*</p>
        <p>
          Women losing big clumps of hair only lost a few strands after using it
          for a few days.*
        </p>
        <p>
          <b>
            <mark>
              Women with fine, thin hair quickly noticed thicker edges.
            </mark>
          </b>
        </p>
        <p>(Some women even told us their hair was growing TOO fast).</p>
        <p>
          Best of all, our older customers who thought there was no hope in
          having the hair of their youth suddenly started to realize it was
          possible*:
        </p>
      </div>

      <div className={styles.testimonal_card_container}>
        <TestimonialCard
          img={img1}
          imgMobile={img1Mobile}
          nameAndAge="Juanita L., 57"
          title="“Have new growth and it’s thickening”"
          date="01/28/2024"
          lastParagraph="“Only 15 days in and I see small growth, plus I’m on my second bottle! So far this product is working I’m seeing baby hairs in area that was balding. I have only used it for about 4 weeks. I hope I continue to see improvements. I like the ease of use because you can drop the product directly in the desired area and not worry about it getting onto adjacent surfaces of the head.”*"
          isBackgroundWhite
        />

        <TestimonialCard
          img={img3}
          imgMobile={img3}
          nameAndAge="Carla D., 62"
          title="“Holy grail for me”"
          date="05/23/2024"
          lastParagraph="“I started using Noor only 1 month ago. Very impressed. I’ve used so many products and none of them worked for me. But this one very well might be the holy grail of all. The picture is from 30 days ago. There’s noticeable improvement in just 30 days. Love the Super Serum and I don’t want to stop using it. It’s that good.”*"
          isBackgroundWhite
        />

        <TestimonialCard
          img={img2}
          imgMobile={img2Mobile}
          nameAndAge="Anna J., 67"
          title="“Amazing results”"
          date="02/13/2024"
          lastParagraph="“Out of all the products I’ve tried to regain hair on my bald spots over the years, this has been the only product that I see results. My hair is thicker, longer and the spots are filling in slowly. I cannot tell you how happy I am maybe some day I won’t have to wear wigs anymore. It’s still going to take time but I have never seen results like this. Thank you Noor.”*"
          isBackgroundWhite
        />

        
      </div>

      <div className={styles.paragraphs_container}>
        <p>
          It was uncanny. Why was THIS product working so much better than any
          of our other products?
        </p>
        <p>
          I mean sure, it is made in the USA (instead of China like our
          competitors).
        </p>
        <p>And sure, the formula was RUTHLESSLY tested and improved upon…</p>
        <p>
          But why was it working for nearly <i>all</i> 100 customers… and{" "}
          <b>why was it working so fast?</b>
        </p>
        <p>
          Well the answer lies in Jacob’s <i>Root Rejuvenation</i> breakthrough.
        </p>
        <p>It starts with a problem called the 5 Layer Dilemma.</p>
      </div>
    </Section>
  );
}
