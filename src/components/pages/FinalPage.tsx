import React from "react"
import google from "../../images/googlep.png"
import apple from "../../images/apple.png"
import { skel, nurse, heart } from "./../../svgs/index"
interface FinalPageProps {}

const FinalPage: React.FC<FinalPageProps> = () => {
  return (
    <div className="relative top-[2100px]">
      <div className="font-bold font-rubik text-primary text-[44px] leading-[126%] text-center">
        Heathcare <span className="text-base-content">at your Fingertips.</span>
      </div>
      <div className="text-center text-[12px] text-base-200 font-normal leading-[138.5%] tracking-[0.08em]">
        Bringing premium healthcare features to your fingertips. User friendly
        mobile platform to
        <br /> bring healthcare to your fingertips. Signup and be a part of the
        new health culture.
      </div>
      {/* Shapes */}
      <div className="ml-[56.47px] mt-[278.75px] bg-primary rounded-[16px] transform rotate-[-30deg] absolute w-[65.75px] h-[65.75px]"></div>
      <div className="mt-[77.48px] ml-[307.82px] bg-primary w-[96.96px] h-[96.96px] transform rounded-[30px] rotate-[105deg] "></div>
      <div className=" w-[127.47px] h-[127.47px] bg-primary ml-[670.24px] mt-[37px] rounded-[30px] transform rotate-[-30deg]"></div>
      <div className="absolute left-[1018px] top-[95px]  w-[65.75px] h-[65.75px] bg-primary rounded-[16px] transform rotate-[-30deg] "></div>
      {/* Cards */}
      <div className="absolute w-[278.17px] h-[276.52px] left-[86.74px] top-[127px] shadow-lg bg-base-100 rounded-[8px]">
        <div className="flex justify-center mt-[40.21px]">{skel}</div>
        <div className="w-[242.53px] h-[73.21px]  absolute bottom-[36.65px] left-[17.82px] font-rubik text-center">
          <div className="font-bold leading-[138.5%] tracking-[0.08em]">
            Symptom Checker
          </div>
          <div className="leading-[138.5%] text-[12px] tracking-[0.08em] text-base-200 mt-4">
            Check if you are infected by COVID-19 with our Symptom Checker
          </div>
        </div>
      </div>
      <div className="absolute w-[278.17px] h-[276.52px] left-[436.91px] top-[127px] shadow-lg bg-base-100 rounded-[8px]">
        <div className="flex justify-center mt-[40.21px]">{nurse}</div>
        <div className="w-[242.53px] h-[73.21px]  absolute bottom-[36.65px] left-[17.82px] font-rubik text-center">
          <div className="font-bold leading-[138.5%] tracking-[0.08em]">
            24x7 Medical support
          </div>
          <div className="leading-[138.5%] text-[12px] tracking-[0.08em] text-base-200 mt-4">
            Consult with 10,000+ health workers about your concerns.
          </div>
        </div>
      </div>
      <div className="absolute w-[278.17px] h-[276.52px] left-[787.09px] top-[127px] shadow-lg bg-base-100 rounded-[8px]">
        <div className="flex justify-center mt-[40.21px]">{heart}</div>
        <div className="w-[242.53px] h-[73.21px]  absolute bottom-[36.65px] left-[17.82px] font-rubik text-center">
          <div className="font-bold leading-[138.5%] tracking-[0.08em]">
            Condition
          </div>
          <div className="leading-[138.5%] text-[12px] tracking-[0.08em] text-base-200 mt-4">
            Bringing premium healthcare features to your fingertips.
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center ">
        <div className="mr-[56.9px]">
          <img
            className="w-[160.04px] h-[55px]"
            src={google}
            alt="playstore logo"
          />
        </div>
        <div className="-mt-1">
          <img className="w-[165px] h-[66px]" src={apple} alt="itunes logo" />
        </div>
      </div>
    </div>
  )
}

export default FinalPage
