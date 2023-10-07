import { Link } from "gatsby"
import React, { useState } from "react"
import { useLocation } from "@reach/router"

export const pageLinks = [
  { number: "00", page: "home", path: "/" },
  { number: "01", page: "destination", path: "/destination/moon/" },
  { number: "02", page: "crew", path: "/crew/commander/" },
  { number: "03", page: "technology", path: "/technology/launchvehicle/" },
]

export default function Navbar() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  const toggleNavbar = () => {
    setVisible(!visible)
  }

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      toggleNavbar()
    }
  }

  return (
    <div className="absolute z-10">
      <div
        className={`${
          visible
            ? "pr-0"
            : "flex items-center justify-between sm:pt-0 w-screen sm:pr-0 pr-[5vw]"
        }`}
      >
        <div className="flex sm:items-center justify-between w-screen md:pt-16 pl-[5vw]">
          {/* logo */}
          <svg
            className="flex mt-6 sm:mt-0 items-centers"
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
          <div
            className={`sm:flex justify-end text-white gap-[5vw] nav-glass sm:px-[5vw] md:px-[10vw] font-barlowC text-navtext ${
              visible
                ? "block px-0 pl-[5vw] h-screen sm:h-full pt-32"
                : "hidden"
            }`}
          >
            {pageLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={` items-center gap-2 uppercase flex ${
                  location.pathname === link.path ? "nav-active" : ""
                }
                ${
                  visible
                    ? "w-[60vw] right-border mt-8"
                    : "w-auto remove-right font-normal"
                }`}
              >
                <span
                  className={`${
                    visible ? "block font-bold" : "hidden font-bold md:block"
                  }`}
                >
                  {link.number}
                </span>
                {link.page}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger */}
        <div
          className={` ${visible ? "hidden" : "block sm:hidden mt-6"}`}
          onClick={toggleNavbar}
          onKeyDown={handleKeyPress}
          role="button"
          tabIndex="0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </div>

        {/* close hamburger */}
        <div
          className={` ${
            visible ? "block sm:hidden absolute top-10 right-7" : "hidden"
          } transition-all`}
          onClick={toggleNavbar}
          onKeyDown={handleKeyPress}
          role="button"
          tabIndex="0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
