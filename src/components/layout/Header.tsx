import React from "react"
import { logo } from "../../svgs"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
     {logo}
    </div>
  )
}

export default Header
