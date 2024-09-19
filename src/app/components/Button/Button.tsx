import styles from "./Button.module.css";

interface Iprops{
  link: string
}

export default function Button({link}: Iprops) {
  return (
    <a href={link} target="_blank" className={styles.button}>
      <svg
        width="168"
        height="156"
        viewBox="0 0 168 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M115.778 41.1978L35.0451 145.147"
          stroke="black"
          stroke-width="7.5"
          stroke-linecap="round"
        />
        <path
          d="M43.8932 26.9291C33.8283 32.0495 33.008 43.5175 37.8955 52.8555C45.3422 67.0832 66.1441 57.4758 77.8099 55.579C86.6774 54.1372 94.1179 51.6166 102.285 48.0903C106.516 46.2631 109.977 43.1596 114.475 41.9293"
          stroke="black"
          stroke-width="7.5"
          stroke-linecap="round"
        />
        <path
          d="M146.02 106.271C143.486 117.371 132.519 121.082 122.235 118.694C106.567 115.055 110.855 92.3599 109.86 80.5188C109.104 71.5182 109.746 63.6331 111.19 54.7855C111.938 50.2011 114.117 46.0436 114.219 41.3507"
          stroke="black"
          stroke-width="7.5"
          stroke-linecap="round"
        />
      </svg>

      <p className="tiny">visit</p>
    </a>
  );
}
