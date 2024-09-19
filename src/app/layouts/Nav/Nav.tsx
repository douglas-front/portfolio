"use client"
import { useState } from "react";
import styles from "./Nav.module.css";
import gsap from "gsap";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Menu />

      <div className={styles.divMenu}></div>
    </nav>
  );
}

function Menu() {

  const [isNavOpen, setIsNavOpen] = useState<boolean>(true)

  const handleMenu = () => {

    gsap.to(`.${styles.divMenu}`,{
      scale: isNavOpen ? 1 : 0,
      duration: .5,
      ease: "elastic(1,5)",
      delay: 0.2,

      onComplete:()=>{
        setIsNavOpen((s)=> !s)
      }

    })
    gsap.to(`.${styles.divMenu}`,{
      borderRadius: isNavOpen ? "0.6vw" : "50vw",
      duration: 0.5,
      delay: 0.2,
      ease: "elastic(1,5)"
    })

  }

  return (
    <menu className={styles.menu}>
      <li>Projects</li>
      <li>
        <svg
          width="12.7125vw"
          height="5.5286vw"
          viewBox="0 0 248 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.3887 4.87109V77.5816"
            stroke="#1E1E1E"
            stroke-width="2.33999"
            stroke-linecap="round"
          />
          <path
            d="M50.4319 5.87859C50.7755 4.73331 53.2387 4.30776 54.1629 4.01308C56.1546 3.37807 58.1205 2.85912 60.19 2.57807C63.5939 2.11582 66.793 1.97301 70.271 2.00406C78.7402 2.07968 87.701 6.5829 94.8457 10.9011C103.222 15.9638 109.389 24.7401 112.281 34.0407C113.725 38.6837 113.716 43.2953 113.716 48.1038C113.716 51.6527 113.465 54.4877 111.905 57.7004C110.102 61.411 107.097 64.7679 104.209 67.6558C102.547 69.3185 100.711 71.0621 98.7203 72.3196C96.6483 73.6282 94.1915 74.2567 91.9757 75.2793C84.0526 78.9361 75.5527 77.8803 67.0243 77.8803C61.7805 77.8803 56.5367 77.8803 51.2929 77.8803C41.2003 77.8803 30.9115 77.3169 20.8526 78.2749C14.8446 78.8471 6.55951 80.1012 2 84.6607"
            stroke="#1E1E1E"
            stroke-width="2.33999"
            stroke-linecap="round"
          />
          <path
            d="M99.7862 75.2284C99.823 77.7659 99.7106 79.2938 102.469 78.2034C103.797 77.6781 105.206 77.1506 106.492 76.533C107.414 76.0908 108.056 75.3325 108.906 74.7894C110.069 74.0464 110.54 69.6053 110.54 70.9853C110.54 72.6972 109.905 74.5908 110.467 76.277C111.362 78.9607 114.487 78.3613 116.661 78.0327C119.629 77.5841 124.17 75.5881 124.367 71.9607C124.524 69.0659 122.382 67.4345 119.636 67.1568C117.345 66.9251 114.183 66.7294 112.125 67.9371C111.188 68.4873 111.037 70.8633 111.784 71.6681C112.938 72.9112 115.644 73.8368 117.246 74.253C120.055 74.9825 122.733 75.0089 125.611 75.0089C127.921 75.0089 130.738 75.4482 132.609 73.7409C134.03 72.4451 134.799 70.0552 135.279 68.2542C135.539 67.2792 134.787 69.7533 134.731 70.1562C134.48 71.9416 134.858 73.1369 135.56 74.7407C136.871 77.7377 140.445 77.6884 143.29 77.6425C146.749 77.5868 149.386 73.7804 149.386 70.5708C149.386 70.1708 149.29 69.6357 149.399 69.254C149.515 68.847 149.59 70.0793 149.655 70.4976C149.811 71.5144 149.98 72.5597 150.313 73.5214C150.655 74.5079 151.055 75.1544 152.069 75.4966C153.035 75.823 154.054 76.1885 155.093 76.0941C156.641 75.9533 157.72 72.8875 158.385 71.7657C160.1 68.869 162.689 65.4225 166.408 65.3523C167.14 65.3385 167.595 65.5169 168.2 65.9741C170.216 67.4984 171.799 69.9908 173.04 72.1558C173.744 73.3826 175.539 77.8139 173.114 78.1303C170.707 78.4442 168.333 77.862 165.896 77.862C164.594 77.862 163.7 77.4289 162.945 76.3745C161.782 74.7513 161.896 73.313 161.896 71.3755C161.896 68.3167 164.917 67.2406 167.505 68.0347C170.08 68.8247 173.314 70.4833 174.845 72.7655C176.103 74.64 177.537 77.47 177.686 79.7763C177.887 82.8882 175.749 86.5904 173.589 88.7501C172.107 90.2326 170.349 91.3831 168.554 92.4445C165.508 94.2449 162.459 96.0891 159.116 97.285C155.849 98.4541 152.719 99.4367 149.24 99.7114C147.479 99.8504 145.128 100.174 143.388 99.687C142.607 99.4685 142.542 98.4797 142.461 97.7849C142.211 95.6336 143.556 93.7527 145.351 92.6884C151.49 89.0473 159.392 88.6353 166.225 87.1651C171.906 85.9425 178.216 84.4958 182.136 79.8372C188.342 72.4626 187.159 61.1266 184.502 52.5499C184.024 51.0094 183.464 47.7824 181.417 47.6119C178.222 47.3456 177.864 54.2436 177.466 56.2565C176.787 59.6947 176.379 63.1187 176.625 66.6325C176.88 70.2641 178.147 74.1949 179.442 77.5938C180.088 79.2891 181.123 80.554 182.173 82.0075C183.208 83.4413 186.117 82.9333 187.367 82.1417C189.635 80.705 191.902 79.6514 193.061 77.0695C194.257 74.4067 194.465 71.5896 195.804 68.9613C197.105 66.409 198.748 65.8875 201.523 66.0229C205.214 66.2029 206.874 69.4791 207.863 72.7289C208.426 74.5782 208.75 76.9133 208.107 78.7887C207.477 80.6258 205.758 81.3746 204.096 82.1051C200.952 83.4864 196.458 81.503 194.28 78.935C192.803 77.1924 191.937 74.3989 193.537 72.3997C194.965 70.6137 197.775 69.9611 199.962 69.9611C201.837 69.9611 204.073 69.5673 205.9 69.9733C206.463 70.0983 207.066 71.5977 207.327 72.0339C208.024 73.2005 208.335 74.2869 208.778 75.5454C209.227 76.8233 210.648 80.8556 212.155 81.1297C215.968 81.8229 218.85 75.3951 218.946 72.4606C219.024 70.093 218.766 67.9227 217.3 65.9863C217.291 65.9746 216.249 65.0005 216.703 64.8768C217.238 64.7309 218.826 65.0082 219.007 65.0353C221.18 65.36 223.019 65.7356 225.201 66.2058C229.023 67.0292 232.834 67.9429 236.589 69.0345C239.068 69.7549 242.058 70.4598 244.295 71.8388C246.981 73.4945 246.176 79.2814 244.844 81.5076C241.157 87.6681 232.332 90.4707 226.103 92.9322C217.372 96.3828 208.252 98.7394 199.243 101.333C191.838 103.465 184.349 105.115 176.771 106.515C167.594 108.211 158.383 108.149 149.082 108.149C110.991 108.149 72.9011 108.149 34.8109 108.149C25.8817 108.149 16.9525 108.149 8.02334 108.149C7.16457 108.149 6.73584 108.043 6.07249 107.49"
            stroke="#1E1E1E"
            stroke-width="2.33999"
            stroke-linecap="round"
          />
        </svg>
      </li>
      <li className={styles.menuBtn} onClick={handleMenu}>
        <svg
          width="7.033vw"
          height="2.131vw"
          viewBox="0 0 139 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M117.068 4.98538C112.453 4.45802 107.915 3.21969 103.313 2.5794C98.4418 1.90169 93.3775 2.26162 88.4683 2.26162C78.4004 2.26162 68.3326 2.26162 58.2648 2.26162C51.7718 2.26162 44.8334 1.57412 38.3813 2.42808C33.6729 3.05125 28.8241 4.1826 24.2481 5.46961C22.1692 6.05428 20.3327 7.05608 18.1953 7.4519C15.8449 7.88714 13.7469 9.21764 11.6885 10.3724C8.68384 12.0579 4.79679 14.9285 3.3659 18.1805C0.638557 24.379 2.0083 32.5953 7.36074 36.9442C12.4308 41.0636 18.8383 42.7831 25.2468 42.8456C29.9339 42.8914 34.7718 43.1852 39.3952 42.2706C44.2918 41.3021 49.33 40.2772 54.2699 39.6074C58.3716 39.0512 62.6115 39.3048 66.7387 39.3048C72.924 39.3048 78.8927 39.0814 85.0182 38.0791C91.2621 37.0573 97.4088 35.5693 103.6 34.2809C108.64 33.2322 113.683 32.3 118.672 31.0124C124.683 29.461 132.444 27.7034 136.558 22.478C137.399 21.4096 136.925 19.1751 136.815 17.9686C136.654 16.1999 136.42 15.1289 135.604 13.5652C133.953 10.4004 130.62 8.99004 127.373 7.8302C122.252 6.00135 117.237 4.14771 111.893 3.07875"
            stroke="#1E1E1E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        Menu
      </li>
    </menu>
  );
}
