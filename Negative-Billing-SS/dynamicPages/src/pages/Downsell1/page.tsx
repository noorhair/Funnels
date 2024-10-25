

import * as UpsellsSections from "@pagesUI/shared/Upsells"
import * as Sections from "@pagesUI/downsell1/sections"
import * as BSections from "@pagesUI/Main/sections"
import { BASE_PATH_DYNAMIC, DS1_PRODUCT_ID } from "@logic/consts";


const url = new URLSearchParams(window.location.search);
const orderId = url.get('orderId');

export default function Downsell1Page() {
  
  if(!orderId) location.href = location.origin+BASE_PATH_DYNAMIC

  return (
    <>
      {orderId && <>
        <UpsellsSections.UpsellHeader />
        <Sections.Announcing orderId={orderId} />
        <UpsellsSections.Upsell1FirstSection
          yesButtonPath={"/us2?orderId="+orderId}
          noButtonPath={"/ds2?orderId="+orderId}
          idProduct={String(DS1_PRODUCT_ID)}
          orderId={orderId}
          price={"$139"}
        />
        <UpsellsSections.Upsell1FaqsSection />
        <BSections.Footer /> 
        </> 
      } 
    </>
  )
}