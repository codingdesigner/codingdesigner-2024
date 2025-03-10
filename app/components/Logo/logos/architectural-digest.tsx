import * as React from "react"
import styles from "../Logo.module.css"

const ArchitecturalDigest = (props) => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={36}
    viewBox="0 0 54 36"
    fill="none"
    {...props}
  >
    <path
      fill="#1D1D1B"
      d="M.443 35.483H6.46v-.365H3.622l3.908-10.84h10.946l3.908 10.844H19.08v.361h9.313l-12.637-35L3.267 35.11H.443v.373Zm7.211-11.546L13 9.12l5.345 14.817H7.654Zm20.614 11.546h8.325c9.62 0 17.41-5.685 17.41-17.186 0-11.352-7.444-17.238-17.509-17.238H24.72v.346h3.54v34.07l.009.008Zm5.477-.373V1.412h2.138c2.516 0 4.628.129 6.187.882 4.229 2.008 5.689 7.102 5.689 15.993 0 8.439-2.11 13.422-5.584 15.682-1.612 1.003-3.827 1.14-5.785 1.14h-2.645Z"
    />
  </svg>
)
export default ArchitecturalDigest
