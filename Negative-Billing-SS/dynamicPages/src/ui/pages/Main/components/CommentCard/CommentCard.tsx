import { CommentCardProps } from "./CommentCard.proptypes";
import styles from "./CommentCard.styles.module.scss";

import { Gps } from "@icons";

export default function CommentCard( { customer, reviews, date, boldText, comment, dateOfExperience, img, initials } : CommentCardProps ) {
  
    return (
        <div className={styles.comment_card_container} >
           <div className={styles.top_section}>
                <div className={styles.image}>
                    {img && <img src={img} alt="" /> }
                    {initials && <h1>{initials}</h1> }
                </div>
                <div className={styles.consummer_container}>
                    <h1>{customer}</h1>
                    <div className={styles.reviews_container}>
                        <p>{reviews} reviews</p>
                        <p><Gps /> US</p>
                    </div>
                </div>
           </div>
           <div className={styles.comment_section}>
                <div className={styles.top_comments_section}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="161" height="31" viewBox="0 0 161 31" fill="none">
                        <path d="M30.1875 0.90332H0V30.9033H30.1875V0.90332Z" fill="#00B67A"/>
                        <path d="M62.8906 0.90332H32.7031V30.9033H62.8906V0.90332Z" fill="#00B67A"/>
                        <path d="M95.5938 0.90332H65.4062V30.9033H95.5938V0.90332Z" fill="#00B67A"/>
                        <path d="M128.297 0.90332H98.1094V30.9033H128.297V0.90332Z" fill="#00B67A"/>
                        <path d="M161 0.90332H130.812V30.9033H161V0.90332Z" fill="#00B67A"/>
                        <path d="M15.0937 21.1221L19.6847 19.9658L21.6029 25.8408L15.0937 21.1221ZM25.6593 13.5283H17.5779L15.0937 5.96582L12.6095 13.5283H4.52808L11.0687 18.2158L8.58452 25.7783L15.1251 21.0908L19.1501 18.2158L25.6593 13.5283Z" fill="white"/>
                        <path d="M47.7968 21.1221L52.3878 19.9658L54.306 25.8408L47.7968 21.1221ZM58.3625 13.5283H50.281L47.7968 5.96582L45.3126 13.5283H37.2312L43.7718 18.2158L41.2876 25.7783L47.8283 21.0908L51.8533 18.2158L58.3625 13.5283Z" fill="white"/>
                        <path d="M80.5 21.1221L85.091 19.9658L87.0092 25.8408L80.5 21.1221ZM91.0656 13.5283H82.9842L80.5 5.96582L78.0158 13.5283H69.9344L76.475 18.2158L73.9908 25.7783L80.5315 21.0908L84.5565 18.2158L91.0656 13.5283Z" fill="white"/>
                        <path d="M113.203 21.1221L117.794 19.9658L119.712 25.8408L113.203 21.1221ZM123.769 13.5283H115.687L113.203 5.96582L110.719 13.5283H102.638L109.178 18.2158L106.694 25.7783L113.235 21.0908L117.26 18.2158L123.769 13.5283Z" fill="white"/>
                        <path d="M145.906 21.1221L150.497 19.9658L152.415 25.8408L145.906 21.1221ZM156.472 13.5283H148.39L145.906 5.96582L143.422 13.5283H135.341L141.881 18.2158L139.397 25.7783L145.938 21.0908L149.963 18.2158L156.472 13.5283Z" fill="white"/>
                    </svg>
                    <span className={styles.date}>{date}</span>
                </div>
                <h1>{boldText}</h1>
                <p>{comment}</p>
                <p><b>Date of experience:</b> {dateOfExperience}</p>
           </div>
            
        </div>
    )
}