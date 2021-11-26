import React, { useState } from "react"
import { Layout } from "./components"

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [fluid, setFluid] = useState(true)
  return (
    <div className={`${fluid && "relative max-w-6xl mx-auto"}  prose`}>
      <Layout />

      {/* <button onClick={() => setFluid(!fluid)} className="fixed w-auto h-10 px-4 ml-4 text-white transition duration-200 ease-in rounded-full shadow hover:opacity-100 opacity-30 bg-primary bottom-4 left-4 hover:bg-red-700 active:shadow-lg mouse focus:outline-none">
        <span>Toggle Fixed/Fluid Layout</span> 
      </button> */}
    </div>
  )
}

export default App
