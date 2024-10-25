import styles from "./SecondSection.styles.module.scss";

import { Section } from "@sharedUI";

import img1 from "@images/section2Img1.webp";

export default function SecondSection() {
  return (
    <Section className={styles.section_container} isBeige>
      <div className={styles.titles_container}>
        <h1 className={styles.title}>
          The best part is it doesn’t matter <i>what</i> the cause of your
          thinning hair is…
        </h1>
        <h1 className={styles.title_2}>
          Stress, genetics, hormones, nutrition, etc… The Super Serum supports
          them all.✓
        </h1>
      </div>

      <div className={styles.paragraphs_container}>
        <p>
          Impossible? Not if you believe the cutting edge research coming out of
          Korea and Japan…
        </p>
        <p>
          That PROVES how each part of the <i>Root Rejuvenation</i> formula
          combats a different cause.✓
        </p>
        <p>
          Meaning it will work no matter the root cause of the hair loss or
          thinning. Even female pattern baldness.*
        </p>

        <img src={img1} alt="facebook comments" />

        <p>
          Now let me tell you how this wonder formula came to be and why it’s
          disrupting the beauty industry as we know it.
        </p>
      </div>
    </Section>
  );
}
