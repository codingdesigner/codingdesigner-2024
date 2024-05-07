import * as React from "react"
import styles from "../Logo.module.css"

const Hive = (props) => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    width={219}
    height={36}
    viewBox="0 0 219 36"
    fill="none"
    {...props}
  >
    <g clipPath="url(#hiveclip)">
      <path
        fill="#221F20"
        d="M211.041.483v2.09h-10.766v10.743h6.772V8.308h9.986V6.316L211.041.483Zm-55.778 0-12.325 29.992 5.31 4.375h.048l12.325-29.798-5.213-4.569h-.145Zm-22.993 0 10.668 23.819h.049l3.264-7.777-3.654-8.167-10.23-7.875h-.097Zm-53.05 0v29.264h-2.582l6.966 5.736h3.166V6.705L79.22.483Zm-55.242 0v29.264h-2.582l6.479 5.688h3.36V6.364L23.978.482Zm-20.46 0V13.56h7.355V6.607L3.517.483ZM210.698 15.6h-10.472v12.105h6.772v-6.61h9.693v-2.189l-5.943-5.542v2.238l-.05-.002Zm-207.182.244v13.952H.887l6.82 5.687h3.31V21.531h10.474v-5.687H3.517Zm208.011 13.904h-14.03l6.479 5.688h13.494V33.1l-5.943-5.59v2.238Z"
      />
    </g>
    <defs>
      <clipPath id="hiveclip">
        <path fill="#fff" d="M.887.483h217.192v35H.887z" />
      </clipPath>
    </defs>
  </svg>
)
export default Hive
