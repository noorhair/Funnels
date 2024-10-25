import styles from "./ProductCard.styles.module.scss";
import { ProductCardProps } from "./ProductCard.proptypes";
import { useEffect, useState } from "react";

import { evaluateFetchPost } from "@logic/utils";
import { getProductByIdService } from "@logic/services";

import { Loader } from "@sharedUI";
import {  CAMPAING_ID } from "@logic/consts";

const url = new URLSearchParams(window.location.search);

export default function ProductCard( { isResponsive } : ProductCardProps ){

    const [productData, setProductData] = useState<any>(undefined);
    const [isLoader, setIsLoader] = useState(false);
    const [showSummary, setShowSummary] = useState(false);

   
    useEffect(() => {
        const productId = url.get('productId');

        if(!productId) {
            location.href = location.origin
        }

        setIsLoader(true);
        evaluateFetchPost(getProductByIdService, {
            productId: Number(productId),
            campaignId: Number(CAMPAING_ID)

        }).then(data => {
            setIsLoader(false);
            if (data) {
                setProductData(data.data[0]);
            }
        });

    }, [])

    return(
        <>
        {isLoader && <Loader text="Loading items" />}
        {productData && 
            <>
                {isResponsive && 
                <div className={styles.product_responsive_super_container}>
                    <div className={styles.product_responsive_container} onClick={() => setShowSummary(!showSummary)}>
                        <span>
                            Show order summary 
                            <svg className={!showSummary ? styles.rotated : ""} width="11" height="7" xmlns="http://www.w3.org/2000/svg" href=""><path fill="#000" d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z" href=""></path></svg>
                        </span>
                        <p>${Number(productData.shippingPrice)+Number(productData.price)}</p>
                    </div>
                    {showSummary && 
                        <div className={styles.product_container}>
                            <div className={styles.product_section}>
                                    <div className={styles.image}>
                                        <div className={styles.quantity}>1</div>
                                        <img src={productData.productImagePath} alt="productName" />
                                    </div>
                                    <div className={styles.description}>
                                        <p className={styles.product_name}>{productData.productName}</p>
                                    </div>
                                    <div className={styles.price}>${productData.price}</div>
                            </div>
            
                            <div className={styles.totals_section}>
                                <div className={`${styles.subtotal} ${styles.separated_text}`}>
                                    <p>Subtotal</p>
                                    <p>${productData.price}</p>
                                </div>
                                <div className={`${styles.shipping} ${styles.separated_text}`}>
                                    <p>Shipping</p>
                                    <p>${productData.shippingPrice}</p>
                                </div>
                                <div className={`${styles.total} ${styles.separated_text}`}>
                                    <p>Total</p>
                                    <p>USD<label>${Number(productData.shippingPrice)+Number(productData.price)}</label></p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                }
                {!isResponsive && 
                    <div className={styles.product_container}>
                        <div className={styles.product_section}>
                                <div className={styles.image}>
                                    <div className={styles.quantity}>1</div>
                                    <img src={productData.productImagePath} alt="productName" />
                                </div>
                                <div className={styles.description}>
                                    <p className={styles.product_name}>{productData.productName}</p>
                                </div>
                                <div className={styles.price}>${productData.price}</div>
                        </div>

                        <div className={styles.totals_section}>
                            <div className={`${styles.subtotal} ${styles.separated_text}`}>
                                <p>Subtotal</p>
                                <p>${productData.price}</p>
                            </div>
                            <div className={`${styles.shipping} ${styles.separated_text}`}>
                                <p>Shipping</p>
                                <p>${productData.shippingPrice}</p>
                            </div>
                            <div className={`${styles.total} ${styles.separated_text}`}>
                                <p>Total</p>
                                <p>USD<label>${Number(productData.shippingPrice)+Number(productData.price)}</label></p>
                            </div>
                        </div>
                    </div>
                }
            </>
            }
        </>
      
    )
}