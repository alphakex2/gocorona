import React from "react"

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="absolute right-[333.55px] font-raleway">
      <div className="inline-block ">
        <span className="text-[10px] font-bold">HOME</span>
        <span className="text-[10px] ml-[40px] font-bold">FEATURE</span>
        <span className="text-[10px] ml-[40px] font-bold">SUPPORT</span>
        <span className="text-[10px] ml-[40px] font-bold">CONTACT US</span>
      </div>
    </div>
  )
}

export default NavBar
