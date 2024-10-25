import styles from "./Announcing.styles.module.scss";
import { BASE_PATH_DYNAMIC, BASE_PATH_STATIC, CAMPAING_ID, DS1_PRODUCT_ID } from "@logic/consts";

import { addUpsaleService } from "@logic/services";
import { evaluateFetchPost } from "@/logic/utils";
import { useState } from "react";

import { Loader } from "@sharedUI";
export default function Announcing({ orderId } : { orderId: string }) {

    const [isLoader, setIsLoader] = useState(false);

    const redirect = async (caso : boolean) => {
        setIsLoader(true);
        //le dio que si!
        if (caso) {
            //1. hacer la compra 
            await evaluateFetchPost(addUpsaleService, { 
                orderId: orderId,
                productId: String(DS1_PRODUCT_ID), 
                campaignId: CAMPAING_ID,
            })
            //redirect a link estatico de pagina 
            location.href = `${location.origin}${BASE_PATH_STATIC}${"/us2?orderId="+orderId}`
        } else {
            //redirect a link dinamico de react
            location.href = `${location.origin}${BASE_PATH_DYNAMIC}${"/ds2?orderId="+orderId}`
        }
    };

    return(
        <div className={styles.announcing_container}>
            {isLoader && <Loader /> }

            <div className={styles.content}>

                <h1 className={styles.red}><u>Hold on a Moment!</u></h1>

                <div className={styles.first_announcing}>
                    <div className={styles.paragraphs_first_announcing}>
                        <h1>I couldn’t live with myself if you left without upgrading and ensuring your 100% success and hair of your dreams…</h1>
                        <h2>So I’m going to discount this amazing 3 Month Supply of Noor Healthy Follicle Bundle at a even BIGGER discount <i>(do not share this page with anyone!)</i></h2>
                    </div>
                    <img src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718782658317_3HFB_Dn.webp" alt="" />
                </div>

                <div className={styles.card_container}>
                    <p>Since you made the smart decision to try our Super Serum, we want to offer you a chance to <b className={styles.red}><u>DOUBLE your hair growth results…</u></b> for an incredibly low price!</p>
                    <p>Boost Your Hair’s Regrowth With Noor Healthy Follicle Bundle - Made To Deliver Your Body the <u>Nutrient Fuel</u> It Needs for You to <b>Fully Maximize Your Hair Growth Potential</b></p>
                    <p><i>Plus, 91% of Noor Healthy Follicle Bundle Customers Report Stronger Nails, Shinier Hair, and More Youthful, Wrinkle-free Skin!</i></p>
                    <p className={styles.texto}><b className={styles.green}>Only $22.95 Per Bottle</b> <b>For New Noor Customers Only (you!)</b></p>

                    <img className={styles.product_img} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718777480718_3HFB_Up.webp" alt="" />

                    <h1>3 Months Noor Healthy Follicle Bundle</h1>

                    <div className={styles.prices}>
                        <div className={styles.old_price}>
                            <p>REGULARLY</p>
                            <p className={styles.value}><s>$294</s></p>
                        </div>
                        <div className={styles.good_price}>
                            <p>YOUR VIP RATE</p>
                            <p className={styles.value}>$139</p>
                            <p className={styles.value}>(40% OFF)</p>
                            <p className={styles.label}>+$9.99 Shipping</p>
                        </div>
                    </div>

                    <button className={styles.button} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR $139!</button>

                    <p className={styles.link} onClick={() => redirect(true)}>YES! ADD 3 MONTHS OF HEALTHY FOLLICLE BUNDLE TO MY ORDER FOR $139! </p>

                    <img className={styles.adquirientes} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1711011460539_Payment_options.webp" alt="" />

                    <img className={styles.guaranty} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1712758492474_guarantee180.webp" alt="" />

                    <button className={styles.no_button} onClick={() => redirect(false)}>No, I'll pass on this offer</button>

                    <p className={styles.last_paragraph} onClick={() => redirect(false)}>No, I don't want thicker nails, shinier hair, and more youthful looking skin. I don't want to ensure my maximum hair regrowth with these super ingredients that my body so badly needs. I understand the price is only $23 a bottle which is 50% OFF. I'm also aware I will never see the Healthy Follicle Bundle priced this low ever again.</p>
                </div> 
            
            </div>
        </div>
    )
}