import styles from "./Upsell1FaqsSection.styles.module.scss";

import { Faqs } from "@sharedUI";

export default function Upsell1FaqsSection() {
    return(
        <div className={styles.faqs_section_container}>
            <div className={styles.faqs_section_contenr}>
                <Faqs
                    faqsLabel="Still have questions? We have answers!"
                    linksLabel="The Science behind The Healthy Hair Follicle Bundle:"
                    faqs={[
                        {
                            question: "How to Modify or Cancel a Autoship",
                            response: "Modifying or cancelling a autoship is easy and effortless. All you need to do is call our customer service number at (510) 605-3796 from 9am - 5pm EST, Monday through Friday, and one of our customer success agents will help you as soon as one is available. If all phone agents are busy, please send an email to support@noorhairofficial.com. Include your order ID in the email and a dedicated Noor Hair agent will fulfill your request within 1-2 business days. It’s never been easier to subscribe and reap the savings and benefits!"
                        },
                        {
                            question: "Does Noor’s Healthy Follicle Remedy Work For Everybody?",
                            response: "Although not all results are the same, our Healthy Follicle Remedy is packed with clinically proven ingredients shown to increase hair growth and reduce hair loss, no matter your age or hair type."
                        },
                        {
                            question: "How Does Noor’s Healthy Follicle Remedy Work?",
                            response: "Healthy Follicle Remedy gives you a proprietary blend of nutrients that target key hair growth needs, such as balancing hormones, blocking DHT, increasing circulation to follicles, and more."
                        },
                        {
                            question: "How Is Noor’s Healthy Follicle Remedy From Other Brands?",
                            response: "The simple answer is: The ingredients! First, Noor Hair Collagen is specifically made to accelerate your hair growth and slow down hair thinning. Because other Collagen are typically made with one type of collagen, bovine collagen, which does not help to get thicker and fuller hair. We use high quality, clinically tested Marine Collagen that has been shown to work for hair growth, strength and health. Additionally, Noor Hair Collagen Powder is Hydrolyzed, which makes it easier to digest and absorb. And for your FREE Bottle of Noor Healthy Hair Formula, we have a unqiue ingredient found in a special type of rosemary called Pantothenic Acid. When the body gets Pantothenic Acid the right way, our adrenal glands - our backup generator - can work right again… Balancing the body, so hair growth can be restored. Noor’s complex blend of Pantothenic Acid, Vitamin B-5, Zinc, Biotin, and other powerhouse ingredients work to balance the internal battle so many people are dealing with… to kickstart thicker, fuller hair than before."
                        },
                        {
                            question: "When Should I Expect To See Results?",
                            response: "Results vary by person, but most of our customers start to see results within the first 1-2 months and see significantly noticeable improvements after 2-3 months of taking Noor’s Healthy Follicle Remedy."
                        },
                        {
                            question: "How Do I Use Noor’s Healthy Follicle Remedy?",
                            response: "For the Collagen mix two (2) to three (3) scoops into 8-16 oz. of your favorite drink or mix into your favorite foods, such as pancakes or oatmeal, each day for best results. Store in a dry cool place below 30°C (86°F) to keep collagen fresh. For the Healthy Hair Formula take two (2) capsules daily for best results. If you are nursing or pregnant, please consult with your medical professional first. For best results, it is recommended to use consistently for a minimum of six (6) to eight (8) weeks. To make it easier we recommend taking both the Collagen and Formula at the same time (morning or night)."
                        },
                        {
                            question: "How Long Does Shipping Take?",
                            response: "Orders are processed for shipment within 2-3 days. After your order is processed, it takes 3-5 business days for the shipment to arrive. Processing may take longer if the order was placed around the Holidays or on a weekend."
                        },
                        {
                            question: "Which Payment Methods Do You Accept?",
                            response: "We accept all major credit card providers (Visa, American Express, Mastercard, and Discover), debit cards, PayPal and Google Pay. Unfortunately, we do not accept prepaid Visa gift cards."
                        },
                        {
                            question: "Do Noor Products Come With Satisfaction Guarantee?",
                            response: "Yes, all of Noor Hair’s products have a 180-day satisfaction guarantee. If you are at all unsatisfied with your product(s), please contact our customer support team at support@noorhairofficial.com or by phone at (510) 605-3796 for assistance."
                        },
                        {
                            question: "Am I Able To Pause, Skip, Or Cancel My Subscription Anytime?",
                            response: <>Yes! Modifying or cancelling a subscription is easy and effortless. All you need to do is call our customer service number at <span className={styles.link}>(510) 605-3796</span> from 9am - 5pm EST, Monday through Friday, and one of our customer success agents will help you as soon as one is available. If all phone agents are busy, please send an email to <span className={styles.link}>support@noorhairofficial.com</span>. Include your order ID in the email and a dedicated Noor Hair agent will fulfill your request within 1-2 business days. It’s never been easier to subscribe and reap the savings and benefits!</>
                       }
                    ]}
                    links={[
                        "https://www.oaepublish.com/articles/2347-9264.2017.57",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5315033",
                        "https://www.sciencedirect.com/science/article/pii/S2666138122000317",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9569759/",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8572598/",
                        "https://anndermatol.org/DOIx.php?id=10.5021/ad.2013.25.4.405"
                    ]}
                    linksMobile={[
                        "https://www.oaepublish.com/articles/2347-9264.2017.57",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/\nPMC5315033",
                        "https://www.sciencedirect.com/science/article/\npii/S2666138122000317",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/\nPMC9569759/",
                        "https://www.ncbi.nlm.nih.gov/pmc/articles/\nPMC8572598/",
                        "https://anndermatol.org/DOIx.php?id=10.5021/ad.2013.25.4.405"
                    ]}
                />
            </div>
        </div>
    )
}