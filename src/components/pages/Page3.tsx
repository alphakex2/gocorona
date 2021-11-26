import React from "react"
import { page3Image, trianglePolygon } from "./../../svgs/index"

interface Page3Props {}

const Page3: React.FC<Page3Props> = () => {
  return (
    <div style={{ background: "#FAFBFD" }} className="">
      <div
        style={{ background: "white" }}
        className="z-10 rounded-[16px] bg-base-100  top-[1503.93px] left-[249px] w-[654px] h-[117px] absolute"
      >
        <div className="font-rubik text-primary font-extrabold text-[36px] leading-[20px]  flex justify-evenly  text-center">
          <p>
            2m <br />
            <span className="text-[11px] tracking-[0.2em] font-extrabold  text-black">
              USERS
            </span>
          </p>
          <p>
            78 <br />
            <span className="text-[11px] tracking-[0.2em] font-extrabold text-black">
              COUNTRIES
            </span>
          </p>
          <p>
            10,000+ <br />
            <span className="text-[11px] tracking-[0.2em] font-extrabold text-black">
              MEDICAL EXPERTS
            </span>
          </p>
        </div>
      </div>
      <div className="z-0 rounded-[16px] w-[65.75px] h-[65.75px] bg-primary transform rotate-[-30deg] top-[1580px] left-[225px] absolute "></div>
      <div className="w-[96.96px] h-[96.96px] left-[577px] top-[1465.09px] absolute bg-primary rounded-[30px] transform rotate-[105deg]"></div>
      <div className="w-[127.47px] h-[127.47px] absolute top-[1507.35px] left-[828.77px] bg-primary rounded-[30px] transform rotate-[-30deg]"></div>

      {/* Talk To Experts */}
      <div className="absolute  w-[393px] h-[181.07px] left-[92px] top-[1751px]">
        <div className="font-bold font-rubik leading-[126%] text-[44px]">
          Talk to <span className="text-secondary">experts.</span>
        </div>
        <div className="mt-[12.07px] font-normal text-[12px] leading-[138.5%] tracking-[0.08em] text-base-200">
          Book appointments or submit queries into thousands of forums
          concerning health issues and prevention against <br /> noval Corona
          Virus.
        </div>
        <button className="btn bg-primary mt-6 font-raleway font-extrabold text-[10px] leading-[12%] h-[40px] min-h-[40px]  w-[144px]   border-none rounded-[5px]">
          Features
        </button>
      </div>

      <div className="absolute top-[1700px] left-[559.83px]">
        {page3Image}
        <div className="w-[40.79px] h-[40.79px]  bg-secondary shadow-sm absolute top-[133px] left-[260px] rounded-full">
          {trianglePolygon}
        </div>
      </div>
    </div>
  )
}

export default Page3
