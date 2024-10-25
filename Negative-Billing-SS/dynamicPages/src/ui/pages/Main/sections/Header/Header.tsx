import styles from "./Header.styles.module.scss";

import { Usa, Noor } from "@icons";


export default function Header() {
    return(
        <div className={styles.header_container}>
            <div className={styles.top_section}>
                <span>Try It Today For FREE While Supplies Last</span>
            </div>
            <div className={styles.bottom_section}>
                <Noor />
                <div className={styles.usa_icon_container}>
                    <Usa />
                    <span>Made in the USA</span>
                </div>
               
            </div>
        </div>
    )
}