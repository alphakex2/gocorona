import React from "react"

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="absolute top-0 right-0 bg-primary w-[295.29px] h-[700px]  rounded-l-[30px]">
      <button className=" absolute right-[43px] top-[37px] rounded-[5px] hover:rounded-none hover:bg-secondary hover:text-base-100 btn text-base-100 bg-secondary border-0  ">
        Download
      </button>
    </div>
  )
}

export default SideBar
