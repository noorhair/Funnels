import styles from "./FifthSection.styles.module.scss";

import { Section } from "@sharedUI";

import img1 from "@images/section5Img1.webp";
import img1Mobile from "@images/mobile/section5Img1Mobile.webp";
import img2 from "@images/section5Img2.webp";

export default function FifthSection() {
  return (
    <Section className={styles.section_container}>
      <h1 className={styles.title}>
        The 5 Layer Dilemma: Why Most Ordinary Hair Growth Solutions Fail to
        Penetrate the Scalp and Deliver Lasting Results
      </h1>

      <div className={styles.paragraphs_container}>
        <p>
          <i>
            “The scalp has 5 layers of skin. For new hair to grow, the
            ingredients need to be potent enough to penetrate those 5 layers,”
          </i>
          &nbsp;Jacob explained.✓
        </p>
        <p>
          This is why 99% of formulas on the market don’t deliver what they
          promise. Hair loss shampoos, pills, creams, you name it…
        </p>
        <p>
          They simply don’t have the ‘goldilocks’ mix of ingredients needed to
          get through all 5 layers.✓
        </p>
      </div>

      <div className={styles.image_1_container}>
        <p>The 5 Layers of the Scalp</p>
        <picture>
            <source media="(max-width: 550px)" srcSet={img1Mobile} />
            <source media="(min-width: 551px)" srcSet={img1} />
            <img src={img1} alt="The 5 layers of the scalp" />
        </picture>
      </div>

      <div className={styles.paragraphs_container}>
        <p>
          Sure, some prescription solutions like minoxidil and finasteride make
          it through all 5…
        </p>
        <p>Which is why they do work for some people.</p>
        <p>
          <b>
            But the side effects can be horrendous. It’s not worth the risk…
          </b>
        </p>
        <p>
          Plus, why would you risk life-threatening side effects if there was a
          safe, natural alternative?✓
        </p>
        <p>Jacob’s voice picked up. He continued…</p>
      </div>

      <h1 className={styles.title_2}>
        “That’s when I knew All I had to do was create a formula with
        ingredients potent enough to penetrate the 5 layers of the scalp’s skin…
        safely and naturally.”
      </h1>

      <div className={styles.paragraphs_container}>
        <p>
          It wasn’t easy. Some ingredients made it through one layer but not the
          other…
        </p>
        <p>
          But everything changed when he learned that when he COMBINED the right
          ingredients…
        </p>
        <p>
          <b>
            Then together they could work as a team to make it through the
            scalp’s 5 layers…
          </b>
        </p>
        <p>
          Each targeting a specific cause of hair loss and working to rejuvenate
          the roots!✓
        </p>
      </div>

      <img className={styles.img_2} src={img2} alt="Woman with blac hair" />

      <div className={styles.paragraphs_container}>
        <p>
          Jacob was smiling ear-to-ear. He knew this formula was something
          special.
        </p>
        <p>
          <b>
            <mark>
              He knew the Super Serum could help anyone, at any age, get back
              the thick hair of their youth… fast, and regardless of what {" "}
              was causing the thinning hair.*
            </mark>
          </b>
        </p>
        <p>
          “So what exactly is in the <i>root rejuvenation</i> formula?” I asked,
          curiously.
        </p>
      </div>
    </Section>
  );
}
