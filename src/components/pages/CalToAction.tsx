import React from "react"
import { triangle } from "../../svgs/index"

interface CalToActionProps {}

const CalToAction: React.FC<CalToActionProps> = () => {
  return (
    <div className="absolute top-[206px] left-[70px]">
      <h1 className="font-rubik leading-[126%]">
        Take care of yours
        <br /> family's <span className="text-secondary">health.</span>
      </h1>

      <p
        style={{ marginTop: -12 }}
        className="text-[12px] tracking-[0.08em]  font-normal leading-[138.5%] text-base-300 "
      >
        All in one destination for COVID-19 health queries. <br /> Consult
        10,000+ health workers about your concerns.
      </p>
      <button className="btn bg-primary mt-3 font-raleway font-extrabold text-[10px] leading-[12%] h-[40px] min-h-[40px]  w-[144px]   border-none rounded-[5px]">
        Get Started
      </button>
      <div className=" w-[228px] h-[44px]  left[70px] mt-[148px] hover:cursor-pointer">
        <div className="border border-secondary w-[44px] h-[44px] rounded-full">
          <div className="flex flex-col justify-center ml-[38%] w-[44px] h-[44px] ">
            <div className="w-[12px] h-[12px] hover:bg-primary hover:cursor-pointer hover:rounded-full hover:text-secondary hover:z-0">
              {triangle}
            </div>
          </div>
        </div>
        <p className="absolute tracking-[0.08em] text-base-200 font-rubik  text-[13px] leading-[126%] top-[336px] left-14">
          Stay safe with GoCorona <br />{" "}
          <span className="text-[9px] tracking-[0.165em] text-base-content">
            WATCH VIDEO
          </span>
        </p>
      </div>
    </div>
  )
}

export default CalToAction
