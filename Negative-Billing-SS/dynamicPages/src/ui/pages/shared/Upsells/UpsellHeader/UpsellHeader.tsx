import styles from "./UpsellHeader.styles.module.scss";

export default function UpsellHeader() {
    return(
        <>
            <div className={styles.header_container}>
                <img src="https://assets.checkoutchamp.com/edfe9320-e07a-11ee-a704-df515a761f4a/1710957771555_logo_noor_usa.webp" alt="" />
            </div>
            <div className={styles.steps_container}>
                <div className={styles.div_step1}>STEP 1: ORDER RECEIVED</div>
                <div className={styles.div_step2}>Step 2: CUSTOMIZE ORDER</div>
            </div>
        </>
    )
}