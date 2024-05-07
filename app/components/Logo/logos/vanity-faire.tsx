import * as React from "react"
import styles from "../Logo.module.css"

const VanityFaire = (props) => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    width={161}
    height={36}
    viewBox="0 0 161 36"
    fill="none"
    {...props}
  >
    <g clipPath="url(#vanityfaireclip)">
      <mask
        id="b"
        width={161}
        height={36}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M160.229.483H.337v35h159.892v-35Z" />
      </mask>
      <g fill="#FF0000" mask="url(#b)">
        <path d="M6.588 35.483h3.803l5.686-34.324h1.469V.483h-4.858v.676h2.486L10.73 28.348 6.738 1.158h2.184V.484H.337v.676H1.39l5.197 34.324ZM18.261 23.916l2.636-16.298 2.674 16.298h-5.31Zm-4.18 10.891v.676h4.707v-.676h-2.372l1.694-10.14h5.574l1.694 10.14h-2.221v.676h8.623v-.676h-1.054L25.039.483h-3.765L15.55 34.807H14.08ZM32.572 34.807v.676h4.33v-.676h-2.335V4.088l10.431 31.395h3.013V1.159h1.544V.483H44.81v.676h2.297v23.96L38.823.482H32.12v.676h1.544v33.648h-1.092ZM50.533 34.807v.676h8.285v-.676h-1.43V1.159h1.43V.483h-8.285v.676h1.431v33.648h-1.43ZM64.128 34.807v.676h8.699v-.676H71.17V1.159h3.163l2.07 9.839h.679V.483h-17.21v10.515h.678l2.109-9.84h3.126v33.649h-1.657ZM82.203 34.807v.676H90.9v-.676h-1.656V19.11l4.142-17.951h1.243V.483h-4.557v.676h2.41l-3.728 16.035L84.048 1.16h2.297V.483h-8.623v.676h1.054l5.084 17.95v15.698h-1.657ZM99.714 34.807v.676h9v-.676h-2.146v-17.2h3.314l1.129 4.394h.678V12.35h-.678l-1.129 4.431h-3.314V1.16h5.234l2.259 8.487h.678V.483H99.714v.676h1.431v33.648h-1.431ZM116.735 23.916l2.636-16.298 2.674 16.298h-5.31Zm-4.18 10.891v.676h4.707v-.676h-2.372l1.695-10.14h5.535l1.695 10.14h-2.222v.676h8.623v-.676h-1.054L123.514.483h-3.766l-5.724 34.324h-1.469ZM131.045 34.807v.676h8.323v-.676h-1.469V1.159h1.469V.483h-8.323v.676h1.469v33.648h-1.469ZM148.028 1.196c2.636 0 4.594 1.315 4.594 7.21v2.78c0 4.92-1.356 6.76-4.218 6.76h-1.129V1.195h.753Zm-7.645 33.611v.676h9v-.676h-2.146V18.659h1.544l5.008 16.861h6.439v-.675h-.941l-5.535-17.726c1.092-.6 4.33-2.591 4.33-7.51 0-6.46-4.293-9.126-10.017-9.126h-7.682v.676h1.469v33.648h-1.469Z" />
      </g>
    </g>
    <defs>
      <clipPath id="vanityfaireclip">
        <path fill="#fff" d="M.337.483h159.892v35H.337z" />
      </clipPath>
    </defs>
  </svg>
)
export default VanityFaire
