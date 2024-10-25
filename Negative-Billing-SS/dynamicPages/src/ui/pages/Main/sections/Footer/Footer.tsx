import styles from "./Footer.styles.module.scss";
import { Section } from "@sharedUI";

import { Noor } from "@icons"

export default function Footer(){
    return (
        <Section className={styles.section_container} isBeige >
            <div className={styles.content}>
                <div className={styles.left_section}>
                    <Noor />
                    <p>
                        <b>Returns Address & Contact</b> <br/>
                        <br/>
                        Returns Address:<br/>
                        P.O. Box 90129<br/>
                        Lakeland, FL 33804<br/>
                        <br/>
                        Business Address:<br/>
                        7901 4th St. N, STE 15541<br/>
                        St. Petersburg, FL 33702<br/>
                        <br/>
                        Support Contact:<br/>
                        Support Hours: 9AM - 5PM EST<br/>
                        Phone: (510) 605-3796<br/>
                        Email: support@noorhairofficial.com</p>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.top_section}>
                        <div className={styles.left}>
                            <a href="https://noorhairofficial.com/pages/about-us"><p>Contact Us</p></a>
                            <a href="https://noorhairofficial.com/pages/shipping-orders-policy"><p>Terms & Conditions</p></a>
                            <a href="https://noorhairofficial.com/pages/privacy-policy"><p>Privacy Policy</p></a>
                            <a href="https://noorhairofficial.com/pages/subscription-policy"><p>Manage Subscription</p></a>
                            <a href="https://noorhairofficial.com/pages/returns-refunds"><p>Returns & Refunds</p></a>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.card}>✓ These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</div>
                            <p>*Results are not guaranteed, individual results may vary.</p>
                            <p>*The people in these videos and photos were compensated for their Noor review.</p>
                            <p>*I also agree to Noor Hair's terms & conditions and to receive SMS text order updates.</p>
                        </div>
                    </div>
                    <div className={styles.texts}>
                        <p>DISCLAIMER. The information provided on this site is for informational purposes only. It is not a substitute for professional medical advice. Do not use this information to diagnose or treat a health problem or disease, or to prescribe drugs or supplements. Only your health care provider should diagnose your health care problems and prescribe treatment. None of our claims or information, including any health claims, articles, advertising or product information, have been evaluated or approved by the US Food and Drug Administration (FDA). Products or ingredients referenced on this site are not intended to diagnose, treat, cure, or prevent any disease. Consult your health care provider before beginning any supplement, diet, or exercise program, before taking any medication or receiving treatment, especially if you are currently under medical care. Be sure to carefully read all product labels and packaging before use. If you have or suspect you may have a health problem, do not take any supplement without first consulting and getting approval from your health care provider. Results may vary. They are not guaranteed. Some reviews are based on real reviews from users to provide customers more clarity.</p>
                        <p>THIS IS AN ADVERTISING NOTICE AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR A CONSUMER PROTECTION UPDATE.</p>
                        <p>RESULTS ARE BASED ON REAL CUSTOMER RESULTS, BUT THE PEOPLE ON THIS PAGE ARE FICTIONAL REPRESENTATIONS TO PROTECT THE IDENTITY OF THE CUSTOMERS</p>
                        <p>THE STORY DESCRIBED ON THIS SITE AND THE PERSON DESCRIBED IN THE STORY ARE NOT REAL. HOWEVER, THIS STORY IS BASED ON THE RESULTS THAT THE PEOPLE USING THESE PRODUCTS HAVE ACHIEVED. THE RESULTS PORTRAITED IN THE STORY AND THE COMMENTS ARE ILLUSTRATIVE, AND MAY NOT BE THE RESULTS YOU ACHIEVE WITH THESE PRODUCTS. THIS PAGE CAN RECEIVE REMUNERATION FOR CLICKING OR PURCHASE OF FEATURED PRODUCTS ON THIS SITE.</p>
                        <p>THE MEDICAL RESEARCHERS ON THIS PAGE ARE FICTIONAL AND ARE NOT MEANT TO REPRESENT ACTUAL PRACTICING MEDICAL PROFESSIONALS</p>
                        <p>© 2024 Noorhair. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}