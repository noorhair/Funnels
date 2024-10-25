import styles from "./EighthSection.styles.module.scss";
import { Section } from "@sharedUI";

import img1 from "@images/section8Img1.webp";
import img1Mobile from "@images/mobile/section8Img1Mobile.webp";
import img2 from "@images/section8Img2.webp";
import img2Mobile from "@images/mobile/section8Img2Mobile.webp";
import img3 from "@images/section8Img3.webp";
import img3Mobile from "@images/mobile/section8Img3Mobile.webp";

export default function EighthSection(){
    return (
        <Section className={styles.section_container} isBeige >
           <h1 className={styles.title}>
                Can you imagine a world without worry, stress, or insecurity? A world where you proudly wear your thick, beautiful hair <br/>
                without a hat or wig?
           </h1>

            <p className={styles.paragprah}>One of our customers, Rosario, had that dream… and <b>when he tried the Super Serum, it became his reality.*</b></p>

            <div className={styles.barra_container}>
                <div className={styles.pepita}>WEEK 1</div>
            </div>

            <div className={styles.image_container}>
                <p className={styles.paragprah}><b><mark>His hair loss and thinning slowed down significantly after week 1.</mark></b></p>
                <picture>
                    <source media="(max-width: 550px)" srcSet={img1Mobile} />
                    <source media="(min-width: 551px)" srcSet={img1} />
                    <img src={img1} alt="week 1" />
                </picture>
            </div>

            <div className={styles.barra_container}>
                <div className={styles.pepita}>WEEK 5</div>
            </div>

            <div className={styles.image_container}>
                <picture>
                    <source media="(max-width: 550px)" srcSet={img2Mobile} />
                    <source media="(min-width: 551px)" srcSet={img2} />
                    <img src={img2} alt="week 5" />
                </picture>
                <p className={styles.paragprah}>And after 5 weeks of use, he saw his bald spots start to fill in and new baby hairs come in.</p>
                <p className={styles.paragprah}>(Because remember, the scalp has 5 layers, and it takes about 1 week per layer).</p>
            </div>

            <div className={styles.barra_container}>
                <div className={styles.pepita}>WEEK 16</div>
            </div>

            <div className={styles.image_container}>
                <picture>
                    <source media="(max-width: 550px)" srcSet={img3Mobile} />
                    <source media="(min-width: 551px)" srcSet={img3} />
                    <img src={img3} alt="week 16"  />
                </picture>
                <p className={styles.paragprah}>After using the Super Serum for a whole 4 months, his partner couldn’t believe the change. His hair was completely filled in and he started getting comments on it whenever he left the house.</p>
                <p className={styles.paragprah}>Rosario’s transformation is not lucky or a one-off. THOUSANDS of people have used the Super Serum to change their hair (and their life).*</p>
            </div>

        </Section>
    )
}