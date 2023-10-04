import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <div className="flex items-center pt-8 justify-between sm:pt-0 w-screen sm:pr-0 pr-[5vw]">
      <div className="flex items-center justify-between w-screen md:pt-16 pl-[5vw]">
        {/* logo */}
        <svg
          className="flex items-centers"
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          width="48px"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        {/* line */}
        <div className="absolute hidden line md:block"></div>

        {/* links */}
        <div className="hidden sm:flex justify-end text-white gap-[5vw] nav-glass px-[5vw] md:px-[10vw] font-barlow text-navtext">
          <Link className="flex items-center gap-2 font-normal uppercase ">
            <span className="hidden font-bold md:block">00</span>
            home
          </Link>
          <Link className="flex items-center gap-2 font-normal uppercase ">
            <span className="hidden font-bold md:block">01</span>
            destination
          </Link>
          <Link className="flex items-center gap-2 font-normal uppercase ">
            <span className="hidden font-bold md:block">02</span>
            crew
          </Link>
          <Link className="flex items-center gap-2 font-normal uppercase ">
            <span className="hidden font-bold md:block">03</span>
            technology
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
    </div>
  )
}
