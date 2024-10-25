import { useState } from "react";
import styles from "./Announcing.styles.module.scss";

import { BASE_PATH_STATIC,BASE_PATH_DYNAMIC_CHECKOUT, CAMPAING_ID, DS2_PRODUCT_ID } from "@logic/consts";


import { addUpsaleService } from "@logic/services";
import { evaluateFetchPost } from "@/logic/utils";

import { Loader } from "@sharedUI";

export default function Announcing({ orderId } : { orderId: string }) {
    const [isLoader, setIsLoader] = useState(false);

    const redirect = async (caso: boolean) => {
        if(caso) {
            setIsLoader(true);
            const redirectURL = `${location.origin}${BASE_PATH_STATIC}${"/us2?orderId="+orderId}`;

            const data = await evaluateFetchPost(addUpsaleService, { 
                orderId: orderId,
                productId: String(DS2_PRODUCT_ID), 
                campaignId: CAMPAING_ID,
                redirectsTo: redirectURL,
                errorRedirectsTo: window.location.origin+BASE_PATH_DYNAMIC_CHECKOUT,
            })
            const is3DS = await data?.message;
            if (is3DS) {
                location.href = redirectURL;
            }
        } else {
            location.href = `${location.origin}${BASE_PATH_STATIC}${"/us2?orderId="+orderId}`
        }
    };

    return(
        <div className={styles.announcing_container}>
            {isLoader && <Loader /> }

            <div className={styles.content}>

                <h1 className={styles.title}>3 Bottles Too Many?</h1>
                <h1 className={styles.subtitle}>No problem…</h1>

                <div className={styles.card_container}>

                    <p className={styles.texto}><b>Instead Grab 1 Month Of Noor Healthy Follicle Bundle For </b><b className={styles.green}>Only $22.95 per Bottle</b></p>
                    <p className={styles.before}>(before they cut off our ingredients!)</p>
                    <p className={styles.our_price}>This is our lowest price available!</p>
                    
                    <img className={styles.product_img} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1718782637672_1HFB_Dn.webp" alt="" />

                    <div className={styles.prices}>
                        <div className={styles.old_price}>
                            <p>REGULARLY</p>
                            <p className={styles.value}><s>$294</s></p>
                        </div>
                        <div className={styles.good_price}>
                            <p>YOUR VIP RATE</p>
                            <p className={styles.value}>$47</p>
                            <p className={styles.value}>(53% OFF)</p>
                        </div>
                    </div>

                    <button className={styles.button} onClick={() =>redirect(true)}>Send Me 1 Month Supply of Noor Healthy Follicle Bundle for Only</button>

                    <p className={styles.link} onClick={() =>redirect(true)}>Send Me 1 Month Supply of Noor Healthy Follicle Bundle for Only $47!</p>

                    <img className={styles.adquirientes} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1711011460539_Payment_options.webp" alt="" />

                    <img className={styles.guaranty} src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1712758492474_guarantee180.webp" alt="" />

                </div>  


                <div className={styles.benefits}>
                    <p>Benefits:</p>
                    <p>✔ Promotes hair growth from within</p>
                    <p>✔ Boosts stronger, shinier nails</p>
                    <p>✔ Supports clearer, more youthful skin</p>
                    <p>✔ Promotes a healthy & balanced gut</p>
                    <p>✔ Dermatologist approved results</p>
                    <p>✔ Works fast regardless of age</p>
                    <p>✔ 180-day-money-back guarantee</p>
                </div>


                <div className={styles.button_with_element}>
                    <button className={styles.button} onClick={() =>redirect(true)}>Send Me 1 Month Supply of Noor Healthy Follicle Bundle for Only</button>
                    <div className={styles.image_icon}>
                        <img src="https://assets.checkoutchamp.com/b8d0cc90-ca9a-11ee-b793-910a2ff0d100/1711692424261_check__1_.webp" alt="" />
                        <span>180 day money back guarantee</span>
                    </div>
                </div>

                <button className={styles.no_button} onClick={() =>redirect(false)}>No, I'll pass on this offer</button>

                <p className={styles.last_text} onClick={() =>redirect(false)}>No, I don't want thicker nails, shinier hair, and more youthful looking skin. I don't want to ensure my maximum hair regrowth with these super ingredients that my body so badly needs. I understand the price is only $22.95 a bottle which is 53% OFF. I'm also aware I will never see the Healthy Follicle Bundle priced this low ever again.</p>

                <div className={styles.last_image}>
                    <h2>Only Available For A Limited Time
                    </h2>
                    <img src="https://assets.checkoutchamp.com/Funnel/assets/images/61981a7f-e4ae-4028-be7b-a1e443a39681/a64c2530-33fa-4fac-aa0f-2853a4dedca3/1705575898-Benefits.svg" alt="" />
                </div>

            </div>
        </div>
    )
}