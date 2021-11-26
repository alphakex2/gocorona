import React from "react"
import { phone } from "../../svgs"
import CallToActionPage2 from "./CallToActionPage2"

interface Page2Props {}

const Page2: React.FC<Page2Props> = () => {
  return (
    <div>
      <div className="absolute top-[780px] left-[99px] w-[338px] h-[542px] ">
        <div className="w-[147px] h-[147px] bg-primary rounded-[30px]"></div>
        <div className="w-[77px] h-[77px] right-0 top-[352px] absolute rounded-[30px] bg-primary"></div>
        <div className="absolute top-[25px] left-[50px] z-10">{phone}</div>
        <div className="w-[77px] h-[77px] bg-primary rounded-full absolute left-[43px] bottom-[15px]"></div>
        <div
          style={{ background: "rgba(240, 240, 240, 0.49)" }}
          className="w-[206px] h-[27px] rounded-[16px] absolute bottom-5 left-[90px]"
        ></div>
      </div>
      <CallToActionPage2 />
    </div>
  )
}

export default Page2
