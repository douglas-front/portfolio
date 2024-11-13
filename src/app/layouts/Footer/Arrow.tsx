"use client"

import useLenisScroll from "@/app/common/hooks/useLenisScroll"

export default function Arrow() {

    const lenis = useLenisScroll()

    return(
        <svg
        onClick={()=> lenis.current.scrollTo(0)}
        width="141"
        height="140"
        viewBox="0 0 141 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71.1642 4V135.618"
          stroke="black"
          strokeWidth="7.5"
          stroke-linecap="round"
        />
        <path
          d="M5.6389 36.8242C0.830606 47.0418 7.21712 56.6022 16.8049 60.9793C31.4133 67.6483 41.9492 47.301 49.9992 38.6472C56.1182 32.0693 60.4484 25.5147 64.7353 17.7204C66.9566 13.6817 67.7859 9.10802 70.5842 5.37695"
          stroke="black"
          strokeWidth="7.5"
          stroke-linecap="round"
        />
        <path
          d="M134.964 36.8429C139.771 47.1644 133.386 56.8219 123.799 61.2435C109.193 67.9803 98.6583 47.4262 90.6094 38.6845C84.4913 32.0397 80.1616 25.4186 75.8753 17.545C73.6543 13.4653 72.8251 8.84515 70.0272 5.07617"
          stroke="black"
          strokeWidth="7.5"
          stroke-linecap="round"
        />
      </svg>
    )
}