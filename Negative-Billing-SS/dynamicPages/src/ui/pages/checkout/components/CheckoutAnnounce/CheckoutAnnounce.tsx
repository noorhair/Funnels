import { CheckoutAnnounceProps } from "./CheckoutAnnounce.proptypes";
import styles from "./CheckoutAnnounce.styles.module.scss";

export default function CheckoutAnnounce( { img, boldText, paragraph } : CheckoutAnnounceProps ) {

    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <div className={styles.text_container}>
                <p><b>{boldText}</b></p>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}