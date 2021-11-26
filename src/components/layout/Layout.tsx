import React from "react"

import { Header, Footer, Navbar } from "../../components"
import { svg1 } from "../../svgs"
import CalToAction from "../pages/CalToAction"
import FinalPage from "../pages/FinalPage"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import SideBar from "./SideBar"

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="">
      <div className="">
        <div className="absolute right-[52.57px] z-10 top-[153px]">{svg1}</div>
        {/* Logo and Navbar */}
        <div className="flex mt-[37px] ml-[52px] ">
          <Header />
          <Navbar />
        </div>
        <div>
          <SideBar />
          <CalToAction />
          <Page2 />
          <Page3 />
          <FinalPage />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
