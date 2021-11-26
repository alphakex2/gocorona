import React from "react"

interface CallToActionPage2Props {}

const CallToActionPage2: React.FC<CallToActionPage2Props> = () => {
  return (
    <div className="absolute top-[931px] right-[186px]">
      <h1 className="font-rubik leading-[126%]">
        Stay Safe with
        <br />Go<span className="text-primary">Corona.</span>
      </h1>

      <p
        style={{ marginTop: -12 }}
        className="text-[12px] tracking-[0.08em]  font-normal leading-[138.5%] text-base-300 "
      >
        24/7 Support and user friendly mobile platformto bring <br /> healthcare
        to your fingertips. Signup and be part of <br /> the new health culture
      </p>
      <button className="btn bg-primary mt-3 font-raleway font-extrabold text-[10px] leading-[12%] h-[40px] min-h-[40px]  w-[144px]   border-none rounded-[5px]">
        Features
      </button>
    </div>
  )
}

export default CallToActionPage2
