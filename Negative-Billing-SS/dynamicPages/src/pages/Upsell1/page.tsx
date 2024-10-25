import * as UpsellsSections from "@pagesUI/shared/Upsells"
import * as Sections from "@pagesUI/upsell1/sections"
import * as BSections from "@pagesUI/Main/sections"
import { BASE_PATH_DYNAMIC, US1_PRODUCT_ID, META_PURCHASE_EVENT } from "@logic/consts";
import { sendMetaEvent, sendGAPurchaseEvent } from "@logic/utils";

const url = new URLSearchParams(window.location.search);
const orderId = url.get('orderId');

export default function Upsell1Page() {
    if(!orderId) {
      location.href = location.origin+BASE_PATH_DYNAMIC;
    } else {
      const metaPurchaseObj = sessionStorage.getItem("metaPurchaseObjNoor");
      const GAPurchaseObj = sessionStorage.getItem("GAPurchaseObjNoor");

      if (metaPurchaseObj) {
        sendMetaEvent(META_PURCHASE_EVENT, JSON.parse(metaPurchaseObj));
        sessionStorage.removeItem("metaPurchaseObjNoor");
      }

      if (GAPurchaseObj) {
        const GAobj = JSON.parse(GAPurchaseObj);
        GAobj.transaction_id = orderId;

        setTimeout(() => {
          sendGAPurchaseEvent(GAobj);
          sessionStorage.removeItem("GAPurchaseObjNoor");
        }, 2000);
      }
    }

    return (
      <>
        {orderId && <>
          <UpsellsSections.UpsellHeader />
          <Sections.Announcing orderId={orderId} />
          <UpsellsSections.Upsell1FirstSection
            yesButtonPath={"/us2?orderId="+orderId}
            noButtonPath={"/ds1?orderId="+orderId}
            idProduct={String(US1_PRODUCT_ID)}
            orderId={orderId}
            price={"$179"}
          />
          <UpsellsSections.Upsell1FaqsSection />
          <BSections.Footer /> 
          </> 
        } 
      </>
  );
}