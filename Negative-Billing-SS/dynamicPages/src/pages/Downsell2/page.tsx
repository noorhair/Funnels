

import * as UpsellsSections from "@pagesUI/shared/Upsells"
import * as Sections from "@pagesUI/downsell2/sections"
import * as PageSections from "@pagesUI/Main/sections"

import { BASE_PATH_DYNAMIC } from "@logic/consts";

const url = new URLSearchParams(window.location.search);
const orderId = url.get('orderId');

export default function Downsell2Page() {

  if(!orderId) location.href = location.origin+BASE_PATH_DYNAMIC

  return (
    <>
    {orderId && 
        <>
          <UpsellsSections.UpsellHeader />
          <Sections.Announcing orderId={orderId} />
          <PageSections.Footer /> 
        </>  
      }
    </>
  );
}