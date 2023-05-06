"use client"

import { useEffect, useState } from "react"

//components
import Switcher from "./switcher"
import Links from "./links"

export default function Header() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <div className={`font-mono text-sm w-full z-30 sticky top-0 m-auto bg-mainColor dark:bg-secColor/50 ${scroll && `backdrop-blur-md md:backdrop-blur-sm bg-mainColor border-b border-secColor dark:border-mainGray`}`}>
      <nav className={`max-w-screen-2xl m-auto`}>
        <div className={`p-4 md:px-6 lg:px-8 md:pt-6 md:pb-2`}>
          <div className={`flex flex-row-reverse justify-between items-center`}>
            <Links />
            <Switcher />
          </div>
        </div>
      </nav>
    </div>
  )
}
