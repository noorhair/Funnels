import styles from "./Upsell1FirstSection.styles.module.scss";
import { Upsell1FirstSectionProps } from "./Upsell1FirstSection.proptypes";
import { TestimonialCard } from "@pagesUI/Main/components";
import { BASE_PATH_DYNAMIC, BASE_PATH_STATIC, BASE_PATH_DYNAMIC_CHECKOUT, CAMPAING_ID } from "@logic/consts";
import img1 from "@images/rajesh_rajput.webp";
import { addUpsaleService } from "@logic/services";
import { evaluateFetchPost } from "@/logic/utils";
import { useState } from "react";
import { Loader } from "@sharedUI";

export default function Upsell1FirstSection( { yesButtonPath, noButtonPath, idProduct, orderId, price } : Upsell1FirstSectionProps ) {
    const [isLoader, setIsLoader] = useState(false);

    const redirect = async (caso : boolean) => {
        setIsLoader(true);
        if (caso) {
            const redirectURL = `${location.origin}${BASE_PATH_STATIC}${yesButtonPath}`;

            const data = await evaluateFetchPost(addUpsaleService, { 
                orderId: orderId,
                productId: idProduct, 
                campaignId: CAMPAING_ID,
                redirectsTo: redirectURL,
                errorRedirectsTo: window.location.origin+BASE_PATH_DYNAMIC_CHECKOUT,
            })

            const is3DS = await data?.message;
            if (is3DS) {
                location.href = redirectURL;
            }
        } else {
            location.href = `${location.origin}${BASE_PATH_DYNAMIC}${noButtonPath}`
        }
    };

    return(
        <div className={styles.first_section_container}>
            {isLoader && <Loader /> }
            <div className={styles.content}>

                <div className={styles.paragraphs}>
                    <p><b>Dear Friend…</b></p>
                    <p>One more thing:</p>
                    <p>Even though your Noor Hair Super Serum is more than enough to combat your root cause of thinning hair and quickly rejuvenate thicker, fuller hair from the OUTSIDE…</p>
                    <p><b><mark>Many women want to make sure they give their hair the best compounds and nutrients from the INSIDE as well.</mark></b></p>
                    <p>This way, you can be 100% sure it will grow as thick, long and strong as possible...and has what it needs to reach its <u>full voluminous potential</u> … as quickly as possible!</p>
                    <p>The best way to do that is with a Marine based Collagen and a premium Hair Growth Vitamin that works.</p>
                    <p>These two products fully ensure your body has EVERYTHING it needs to solve hair loss and more importantly, kickstart new baby hair growth.</p>
                    <p>Our formulas are the best on the market, so after dozens of requests, we’ve paired them together to create the bestselling <u>Healthy Follicle Bundle.</u></p>
                    <p>Best of all, 91% of Healthy Follicle Bundle users also report <b>thicker, shinier nails and clearer, glowing, more youthful looking skin.</b></p>
                    <p>Normally it costs $98 for a 1 month supply, but today on this page only you can get it for only $59 (40% OFF).</p>
                </div>

                <div className={styles.button_with_element}>
                    <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                    <div className={styles.image_icon}>
                        <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                        <span>180 day money back guarantee</span>
                    </div>
                </div>
               
                <h1 className={styles.title}>Why Thousands of Noor Customers Take the Healthy Follicle Bundle Daily to Combat “Starving Follicles” and Guarantee Thicker, Fuller, Healthier Hair Growth</h1>

                <div className={styles.paragraphs}>
                    <p>Many are familiar with how the hair follicles need proper nutrition to kickstart new growth.</p>
                    <p>But that’s not the full story…</p>
                    <p><b><mark>Recent research shows that when there are low levels of key minerals and vitamins, the hair weakens, thins and falls out.<sup>1</sup></mark></b></p>
                    <p>This is known as starving follicles… because they go into a phase where growth is not possible.</p>
                </div>

                <div className={styles.dr_indio_card}>
                    <div className={styles.card_header}>
                        <img src={img1} alt="Dr Rajesh Rajput" />
                        <p>"Instead of recommending DHT blockers and other medication for hair loss, we need to take a serious look at our diet, which holds the real key to thicker, fuller hair growth.”</p>
                    </div>
                    <div className={styles.card_footer}>
                        <p><b>- Dr Rajesh Rajput</b></p>
                        <p>Certified International Trichologist</p>
                        <p>25 Years Working on Hair Restoration</p>
                    </div>
                </div>

                <div className={styles.paragraphs}>
                    <p>So no matter the hair problem, supporting the follicles with proper nutrition is the first step to making things right…</p>
                    <p><b>And conquering the hair loss and thinning so many struggle with.<sup>2</sup></b></p>
                    <p>And don’t just take my word for it…</p>
                    <p>Researchers from the Department of Dermatology at Baylor College of Medicine did a study on the root cause of hair loss…</p>
                    <p>And they found something astonishing:</p>
                </div>

                <div className={styles.gray_card}>
                    <div className={styles.pepita}>THE THIN HAIR DIET BREAKTHROUGH</div>
                
                    <img className={styles.bcm_img} src="https://cdn.shopify.com/s/files/1/0415/6719/1200/files/bcm.png" alt="" />
                    <div className={styles.paragraphs}>
                        <p>Patients with hair loss often asked if their diet had anything to do with it…
                        </p>
                        <p>But the researchers wanted to know for sure if nutrition really had any impact.
                        </p>
                        <p>They closely studied and ran tests on 11 popular vitamins & minerals…
                        </p>
                        <p>And what they discovered blew them away.
                        </p>
                        <p><b><mark>Patients lacking certain hard-to-get minerals in their diet were much more likely to experience hair loss.
                        </mark></b></p>
                        <p>But here’s what’s truly shocking...
                        </p>
                        <p>If you’re more at risk (from things like pregnancy, alcoholism, lack of sunlight, or history of blood loss)…
                        </p>
                        <p><b>Then it’s even MORE likely you’re deficient in one of the hard-to-get, healthy hair minerals.
                        </b></p>
                    </div>

                </div>

                <div className={styles.paragraphs}>
                    <p>Basically, the research found that your diet is likely behind your hair, especially if you’ve tried fixing everything else.</p>
                    <p>The good news is that you simply find a way to support your body with the correct minerals and vitamins you lack…</p>
                    <p><b>Then everything falls into balance, and hair growth can be restored.</b></p>
                    <p>Thankfully the Healthy Follicle Remedy can do just that.*</p>
                    <p>It works unlike anything most people have tried before.</p>
                    <p>First it supports and strengthens the starving follicles…<sup>2</sup></p>
                    <p>Then it works to make sure the body gets what it needs to kickstart thicker and stronger hair growth… fast!<sup>3-5</sup></p>
                    <p><b><mark>Best of all, it works for people of all ages hair types, and genetic backgrounds.</mark></b></p>
                    <ul>
                        <li>It will work if your in your 40s and 50s struggling to eat like you used to…
                        </li>
                        <li>It will work if your 60+ and struggling to produce the essential nutrients your hair follicle needs…
                        </li>
                        <li>It will work if your in your 20s or 30s and just now noticing how poor nutrition is affecting you…
                        </li>
                        <li>It will work for anyone who thinks their diet may be affecting their thin hair.
                        </li>
                    </ul>
                </div>

                <div className={styles.button_with_element}>
                    <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                    <div className={styles.image_icon}>
                        <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                        <span>180 day money back guarantee</span>
                    </div>
                </div>

                <h1 className={styles.title}>How the Healthy Follicle Remedy Works to Support the Body<sup>1</sup> and Solve Hair Loss and Thinning Once and For All✓</h1>


                <div className={styles.paragraphs}>
                    <p>Over the years We’ve researched countless natural ingredients to support starved follicles and quickly kickstart thicker, healthier hair growth…</p>
                    <p>And while there are several minerals and vitamins that enhance hair regrowth and thickness…</p>
                    <p>There’s one key nutrient that stands above the rest and targets starving follicles:</p>
                    <p><b>Marine Collagen.</b></p>
                    <p>Most women are familiar with its skin and anti-aging benefits, but that’s only the tip of the iceberg.
                    </p>
                    <p><b>The truth is collagen holds the key to most hair-related dietary deficiencies.
                    </b></p>
                    <p>See, collagen is made up of amino acids. Lysine in particular.
                    </p>
                    <p>In fact, it was one of the main hard-to-get nutrients the Baylor researchers studied in their breakthrough study.
                    </p>
                    <p><b>What they found was malnutrition in amino acids like lysine (collagen) led to hair loss and thinning<sup>2</sup>…
                    </b></p>
                    <p>But here’s where it gets really interesting…
                    </p>
                    <p>Collagen amino acids play a huge role in the uptake of iron and zinc<sup>2</sup>…
                    </p>
                    <p>Which are 2 of the hard-to-get minerals that the researchers associated with thinning hair!<sup>2</sup>
                    </p>
                    <p><b><mark>Basically, by giving the body the right type of collagen… you’re making sure ALL your dietary bases are covered.✓
                    </mark></b></p>
                    <p>With this wonder ingredient, you’re targeting starving follicles directly…
                    </p>
                    <p>Supplying the body with the majority of what it REALLY needs to combat hair loss.
                    </p>
                    <p>But there’s a catch…
                    </p>
                    <p>Not all collagen is created equal.
                    </p>
                    <p>99% of collagen on the market comes from chickens or cows…
                    </p>
                    <p>And while that collagen is great, it’s nowhere near as powerful at promoting hair growth as <b> marine collagen.</b>
                    </p>
                    <p>Let me explain…
                    </p>
                    <p>According to a study published in the Journal of Engineered Regeneration, marine collagen is absorbed <b>150% more efficiently than other forms of collagen.</b><sup>3</sup>
                    </p>
                    <p>This means the amino acids can start nourishing those starved follicles as quickly as possible…
                    </p>
                    <p><b><mark>Helping them get the vital nutrients they need to flourish and strengthen, so hair growth can be restored.<sup>4</sup>
                    </mark></b></p>
                </div>


                <div className={styles.button_with_element}>
                    <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                    <div className={styles.image_icon}>
                        <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                        <span>180 day money back guarantee</span>
                    </div>
                </div>

                <div className={styles.paragraphs}>
                    <p>This marine collagen breakthrough is a recent craze.
                    </p>
                    <p>Most of the groundbreaking research has only been done in the past 1-2 years…
                    </p>
                    <p>And a study published in the <i>Department of Food and Nutrition</i> brought it into the hair growth limelight:
                    </p>
                </div>

                <div className={styles.gray_card}>
                    <div className={styles.pepita}>THE NUTRITIOUS FOLLICLE DISCOVERY</div>
                
                    <div className={styles.paragraphs}>
                        <p>A group of Korean researchers wanted to see if Marine Collagen had any effect on malnourished hair follicles…</p>
                        <p>One group of subjects was given Marine Collagen, while another group was given a placebo (nothing).</p>
                        <p>And what they discovered was astonishing…</p>
                        <p><b><mark>Subjects given Marine Collagen had significantly more hair growth than the control group.<sup>4</sup></mark></b></p>
                        <p>The researchers concluded that marine collagen could be used as a key remedy for hair loss and hair regrowth during hair loss.<sup>4</sup></p>
                    </div>

                </div>

                <div className={styles.paragraphs}>
                    <p>And that’s not all…
                    </p>
                    <p><b>New studies say Marine Collagen is just as effective at increasing hair thickness as one of the biggest hair growth chemicals out there… finasteride. But without the nasty side effects.<sup>4</sup>
                    </b></p>
                </div>

                <h1 className={styles.title}>How Noor Created The World's Leading Marine Collagen Bundle
                </h1>

                <div className={styles.paragraphs}>
                    <p>As a brand founded on medical research, we knew that the marine collagen breakthrough wasn’t just hype…
                    </p>
                    <p>So we vowed to create a product based on it.
                    </p>
                    <p style={{textAlign: "center"}}><b>But to fully address the starving follicles problem and give the body everything it needs, we needed to add a few more ingredients…
                    </b></p>
                    <p>It wasn’t easy. There were countless hurdles.
                    </p>
                    <p>Some nutrients didn’t show the results we wanted. But finally, after months of trials, we formulated a blend that really worked.
                    </p>
                    <p>While Marine Collagen remains the base, it includes other powerhouses like Hyaluronic Acid and Zinc to support healthy hair follicles and hair growth.✓
                    </p>
                    <p><b><mark>Nearly everyone who tried it saw results.* Not just with their hair but overall well-being.
                    </mark></b></p>
                </div>

                <div className={styles.testimonials_cards_container}>
                    <TestimonialCard 
                        img={"https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718130826169_6_Trish.webp"} 
                        imgMobile={"https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718130826169_6_Trish.webp"} 
                        nameAndAge="Trish Siprell, 61"
                        title="Amazingly Quick Results"
                        date="03/25/2024"
                        lastParagraph="“I'm so blessed to have found Noor and tried this bundle. I'd been losing my hair for nearly 2 years before finding Noor. I cried every time I washed my hair and watched my formerly thick healthy hair literally going down the drain. I could see my scalp in back! I saw your ad and noticed the ladies were Black, so I wrote and asked if Noor would work on Caucasian hair. Assured that it would, I bought the healthy follicle bundle and have not looked back since. Tomorrow will be 2 months. I still have less than half my original hair, BUT my hair isn't bald in the back anymore. I only lose about 6 hairs when it's washed, and the pillow and brush aren't full of lost hair anymore. I take the Collagen and Hair Vitamins every day. My hair isn't weak anymore, nor does it break off. It's amazingly thicker after 2 months of daily use. I'm thrilled and hopeful that I'll soon have the great hair I was born with once again. I love Noor! Thank God for you, and may His Blessings rest upon you!”*"
                    />

                    <TestimonialCard 
                        img={"https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718130487295_4_Aurora.webp"} 
                        imgMobile={"https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718130487295_4_Aurora.webp"} 
                        nameAndAge="Aurora Borjon, 49"
                        title="Magnifico!"
                        date="04/08/2024"
                        lastParagraph="”I have been taking the collagen and vitamins for more than 3 months and I love what they have done to my hair. It looks spectacular and it has grown healthier, a lot of shine. I simply love it. I recommend it to 💯 all Noor products are excellent and shipping is very fast, I love them 😍”*"
                    />

                </div>

                <div className={styles.button_with_element}>
                    <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                    <div className={styles.image_icon}>
                        <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                        <span>180 day money back guarantee</span>
                    </div>
                </div>

                <div className={styles.paragraphs}>
                    <p>What sets Noor<sup>TM</sup> apart is its unique form of Marine Collagen - the cornerstone of the Healthy Follicle Remedy.
                    </p>
                    <p>This wonder ingredient is proven to help support hair loss due to your diet…
                    </p>
                    <p><b><mark>And boost the thickness and strength of the hair… fast!<sup>3</sup>
                    </mark></b></p>
                    <p>But since addressing nutrition-related hair loss is more complicated than just using marine collagen…
                    </p>
                    <p>We are including a bottle of our famous Healthy Hair Formula to compliment it.
                    </p>
                    <p>Making it even stronger and more effective.
                    </p>
                    <p>So not only do you get the most bioavailable collagen available<sup>3</sup>...
                    </p>
                    <p>With a unique formula focused on hair loss and thinning…
                    </p>
                    <p><b>But you also get Hyaluronic Acid and Zinc, which are the new ways to fight shedding, hair loss, and breakage.
                    </b></p>
                    <p>It’s unlike anything you’ve ever tried before. And it works.
                    </p>
                    <p>In fact, studies on Hyaluronic Acid show not only that helps promote healthy hair growth…
                    </p>
                    <p><b><mark>But also helps stimulate blood vessels, so key nutrients get delivered more efficiently.<sup>5</sup>
                    </mark></b></p>
                    <p>And Zinc?
                    </p>
                    <p>Well, recent research shows that having a low concentration leads to thinning and hair loss in both men and women.<sup>6</sup>
                    </p>
                    <p>But in a trial done a group of Japanese researchers, <b>deficient subjects were able to reverse their hair loss after finishing zinc treatment</b>.<sup>2</sup>
                    </p>
                    <p>Thankfully Noor has zinc, hyaluronic acid, and of course, marine collagen…
                    </p>
                    <p><b>So you can rest assured knowing your hair follicles are getting the essential nutrients they need to kickstart new thick, strong, and healthy growth.*
                    </b></p>
                </div>

                <img className={styles.img_1} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718767228652_grayhair.jpg" alt="" />

                <div className={styles.another_embebed_section}>

                    <div className={styles.paragraphs}>
                        <p>But that’s not all…
                        </p>
                        <p>We also added some top hair growth boosters. Biotin, Niacin, and Horsetail Extract… all well-known for making hair thick and strong from root to tip.✓
                        </p>
                        <p>The bottom line is the <u>Noor Hydrolyzed Collagen Peptides</u> combined with the <u>Noor Healthy Hair Formula</u> are the missing link everyone needs to win the battle against thinning hair, and <b>get back that thick, youthful mane… fast!*</b>
                        </p>
                    </div>

                    <img className={styles.img_2} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718134554362_11_Collage.webp" alt="" />

                    <div className={styles.button_with_element}>
                        <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                        <div className={styles.image_icon}>
                            <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                            <span>180 day money back guarantee</span>
                        </div>
                    </div>

                    <div className={styles.paragraphs}>
                        <p>The Healthy Follicle bundle has been so popular we’ve had a hard time staying stocked up. <b className={styles.red}>Stock is flying off the shelves.</b></p>
                        <p>But if you’re on this page reading this, it means we still have some left. Just for you.
                        </p>
                        <p>You’re saving 40% on this special one-time offer.
                        </p>
                        <p><b><mark>The Healthy Follicle Bundle is the perfect complement to the Noor Hair Super Serum you just decided to get…
                        </mark></b></p>
                        <p>So please don’t miss the opportunity to make sure your body has everything it needs for you to fully maximize your hair growth potential.
                        </p>
                        <p>Plus, <u>you are covered by our 180-day-money-back guarantee.</u>
                        </p>
                        <p>There’s nothing to lose!
                        </p>
                        <p><b>Now go ahead and make the decision - don’t let this slip!
                        </b></p>
                    </div>


                    <div className={styles.button_with_element}>
                        <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR {price}!</button>
                        <div className={styles.image_icon}>
                            <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                            <span>180 day money back guarantee</span>
                        </div>
                    </div>

                    <button className={styles.no_button} onClick={() => redirect(false)}>No, I'll pass on this offer</button>
                    
                    <div className={styles.paragraphs}>
                        <p className={styles.last_paragraph} onClick={() => redirect(false)}>No, I don't want thicker nails, shinier hair, and more youthful looking skin. I don't want to ensure my maximum hair regrowth with these super ingredients that my body so badly needs. I understand the price is only $29.95 a bottle which is 40% OFF. I'm also aware I will never see the Healthy Follicle Bundle priced this low ever again.</p>
                    </div>

                    <div className={styles.last_image}>
                        <h2>Only Available For A Limited Time
                        </h2>
                        <img src="https://assets.checkoutchamp.com/Funnel/assets/images/61981a7f-e4ae-4028-be7b-a1e443a39681/a64c2530-33fa-4fac-aa0f-2853a4dedca3/1705575898-Benefits.svg" alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}