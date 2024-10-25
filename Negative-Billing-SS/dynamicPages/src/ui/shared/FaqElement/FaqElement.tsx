import { useState } from "react";
import { FaqElementProps } from "./FaqElement.proptypes";
import styles from "./FaqElement.styles.module.scss";

import { Cross, Minus } from "@icons";

export default function FaqElement( { response, question } : FaqElementProps ){
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.question_container}  onClick={() => setIsOpen(!isOpen)}>
                <p>{question}</p>
                { !isOpen ? <Cross /> : <Minus /> }
            </div>
            {isOpen && 
                <div className={styles.response_container}>
                    <p>{response}</p>
                </div>
            }
        </div>
                 
    )
}