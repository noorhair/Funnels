import styles from "./FaqsSection.styles.module.scss";
import { Section, Faqs } from "@sharedUI";

export default function FaqsSection(){
    return (
        <Section className={styles.section_container}>
            <Faqs
                    faqsLabel="Still have questions? We have answers!"
                    linksLabel="The Science behind Super Hair Serum:"
                    faqs={[
                        {
                            question: "How to modify or cancel an Autoship?",
                            response: "Modifying or cancelling a autoship is easy and effortless. All you need to do is call our customer service number at (510) 605-3796 from 9am - 5pm EST, Monday through Friday, and one of our customer success agents will help you as soon as one is available. If all phone agents are busy, please send an email to support@noorhairofficial.com. Include your order ID in the email and a dedicated Noor Hair agent will fulfill your request within 1-2 business days. It’s never been easier to subscribe and reap the savings and benefits!"
                        },
                        {
                            question: "What are Super Hair Serum's full ingredient list?",
                            response: "Water, Butylene Glycol, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Apigenin, Oleanolic Acid, Biotinoyl Tripeptide-1, Mentyl nicotinate, menthol, Sodium hyaluronate, Ginkgo Biloba Leaf Extract, Clary Sage (Clary) Extract, Cinnamomum Zeylanicum Bark Extract."
                        },
                        {
                            question: "Does Noor’s Super Hair Serum Work For Everybody?",
                            response: "Although not all results are the same, Noor’s Super Hair Serum is our most powerful formula designed to restart hair growth, thicken, and support overall hair health for individuals of all ages with any hair type."
                        },
                        {
                            question: "How Does Noor’s Super Hair Serum Work?",
                            response: "Noor’s Super Hair Serum utilizes key nutrients to improve circulation to hair follicles, block hormonal hair loss, and improve sebum production to generate hair growth."
                        },
                        {
                            question: "What Is The Difference Between the Super Hair Serum and Love Hair Serum?",
                            response: "The Love Hair Serum is our introductory formula specifically designed to repair damage, combat sparse hair, patches, and overall thinning while stimulating the growth of new, thick hairs. The Super Serum is our premium, complex formula designed to fully combat hair loss in its tracks, and support thicker, longer hair growth in a matter of weeks. We recommend using both at the same time for maximum results."
                        },
                        {
                            question: "When Should I Expect To See Results?",
                            response: "Results vary by person, but most of our customers start to see results within the first 1-2 months and see significantly noticeable improvements after 2-3 months of taking Noor’s Super Hair Serum."
                        },
                        {
                            question: "How Do I Use Noor’s Super Hair Serum?",
                            response: "Apply two (2) to three (3) drops to the scalp on specific areas for desired growth."
                        },
                        {
                            question: "Will Noor’s Super Hair Serum Make Me Grow Hair On Other Parts of My Body?",
                            response: "Noor’s Super Hair Serum is hormone free and therefore won't make the hair on your face or body grow longer or thicker."
                        },
                        {
                            question: "Will Noor’s Super Hair Serum Make My Hair Greasy?",
                            response: "No. Noor’s Super Hair Serum is highly concentrated and does not include artificial additives, so it will not make your hair greasy."
                        },
                        {
                            question: "Will Noor’s Super Hair Serum Damage Or Burn My Hair Or Scalp?",
                            response: "No. Noor’s Super Hair Serum does not contain any harmful chemicals or additives that could damage your hair or skin."
                        },
                        {
                            question: "Is Noor’s Super Hair Serum Safe For Colored or Treated Hair?",
                            response: "Yes. Noor’s Super Hair Serum does not include any ingredients that will interact with color treatments or other salon hair treatments."
                        },
                        {
                            question: "Does Noor’s Super Hair Serum Come With A Satisfaction Guarantee?",
                            response: <>Yes, all of Noor Hair’s products have a 180-day satisfaction guarantee. If you are at all unsatisfied with your product(s), please contact our customer support team at <a>support@noorhairofficial.com</a> or by phone at <a>(510) 605-3796</a> for assistance</>
                        },
                        {
                            question: "How Long Does Shipping Take?",
                            response: "Orders are processed for shipment within 2-3 days. After your order is processed, it takes 3-5 business days for the shipment to arrive. Processing may take longer if the order was placed around the Holidays or on a weekend."
                        }
                    ]}
                    links={[
                        "https://pubmed.ncbi.nlm.nih.gov /8254481/",
                        "https://www.ncbi.nlm.nih.gov /pmc/articles/PMC5758353/",
                        "https://www.ncbi.nlm.nih.gov /pmc/articles/PMC8944638/",
                        "https://www.mdpi.com /1420-3049/26/8/2117/",
                        "https://pubmed.ncbi.nlm.nih.gov /28723343/",
                        "https://www.researchgate.net /publication/ 311938141_Clinical_ Evaluation_of_ Hair_Regrowth_Tonics_ Containing_Oleanolic_Acid",
                        "https://pubmed.ncbi.nlm.nih.gov /37276165/",
                        "https://pubmed.ncbi.nlm.nih.gov /19277688/",
                        "https://www.ncbi.nlm.nih.gov /pmc/articles/PMC9787100/"
                    ]}
                />
        </Section>
    )
}