"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";


export default function CalCalender() {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"15min"});
          cal("ui", {"styles":{"branding":{"brandColor":"rgb(255 255 255 / 0.1)"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
      const { ref } = useSectionInView("Schedule Metting", 0.5);

  return (
    <div ref={ref} id="cal" className="w-full h-full mb-28">
     <SectionHeading>Schedule Metting With Me</SectionHeading>
        <Cal namespace="15min"
        calLink="dhruv-kumar/15min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{layout: 'month_view'}} 
        />
    </div>
  )
}
