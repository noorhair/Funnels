import { useEffect } from "react";

const url = new URLSearchParams(window.location.search);

import { evaluateFetchPost } from "@logic/utils";
import { confirmPaypalService } from "@logic/services";

import Loader from "@ui/Loader/Loader";

import { BASE_PATH_STATIC, BASE_PATH_DYNAMIC_CHECKOUT, CAMPAING_ID, PAYPAL_GATEWAY_ID } from "@logic/consts";

export default function PayPal() {

    useEffect(() => {
      const idProduct = location.href.split('/').splice(-1)[0].split("?")[0];
      const token = url.get('token');
      const PayerID = url.get('PayerID');
      const ba_token = url.get('ba_token');

      if(!idProduct) {
        location.href = `${window.location.origin}${BASE_PATH_DYNAMIC_CHECKOUT}/checkout?productId=${idProduct}`;
      }

      const dataToSend = {
        token: token,
        payerId: PayerID,
        baToken: ba_token,
        campaignId: String(CAMPAING_ID),
        product1_id: idProduct,
        paypalBillerId: PAYPAL_GATEWAY_ID,
        sessionId: "null",
      }

      evaluateFetchPost(confirmPaypalService, dataToSend).then(data => {
          if(data) {
            location.href = window.location.origin+BASE_PATH_STATIC+"/us1?orderId="+data.orderId
          } else {
            location.href = `${window.location.origin}${BASE_PATH_DYNAMIC_CHECKOUT}?productId=${idProduct}`
          }
        }
      )

    }, []);

    return (
      <Loader text="Confirmando pago con paypal"></Loader>
    );
}