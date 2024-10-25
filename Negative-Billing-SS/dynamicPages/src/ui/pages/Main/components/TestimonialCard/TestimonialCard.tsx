import { TestimonialCardProps } from "./TestimonialCard.proptypes";
import styles from "./TestimonialCard.styles.module.scss";

import { VerifiedBuyer, Done, Star } from "@icons";

export default function TestimonialCard( { img, imgMobile, nameAndAge, title, date, lastParagraph, isBackgroundWhite } : TestimonialCardProps ) {
    
    const customStyle = {
        ...(isBackgroundWhite && { backgroundColor: "#fff"})
    }
    return (
        <div className={styles.testimonial_card_container} style={customStyle}>
            <picture>
                <source media="(max-width: 550px)" srcSet={imgMobile} />
                <source media="(min-width: 551px)" srcSet={img} />
                <img src={img} alt="Before and after Noor result" />
            </picture>

            <div className={styles.content}>
                <div className={styles.name_container}>
                    <h1 className={styles.name}>{nameAndAge}</h1>
                    <div className={styles.verified_buyer_container}>
                        <div className={styles.icon_container}>
                            <VerifiedBuyer />
                            <Done />
                        </div>
                        <span className={styles.text}>Verified Buyer</span>
                    </div>
                </div>
                <p className={styles.title}>{title}</p>
                <div className={styles.stars_container}>
                    <div className={styles.stars_content}>
                        <Star /> <Star /> <Star /> <Star /> <Star />
                    </div>
                    <span className={styles.date}>{date}</span>
                </div>
                <p className={styles.last_paragraph}>{lastParagraph}</p>
            </div>
            
        </div>
    )
}