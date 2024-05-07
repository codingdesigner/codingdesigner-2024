import * as React from "react"
import styles from "../Logo.module.css"

const Vogue = (props) => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    width={137}
    height={36}
    viewBox="0 0 137 36"
    fill="none"
    {...props}
  >
    <g clipPath="url(#vogueclip)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M82.66 21.108h2.536v-.335H74.738v.335h2.692v7.389c0 3.415-1.469 6.54-6.142 6.629-3.36.044-5.184-1.853-6.163-4.487-1.069-2.812-1.447-5.78-1.447-12.5 0-4.308.4-10.692 1.87-13.549.69-1.34 1.958-3.705 5.674-3.705 4.673.022 7.387 3.84 9.39 11.83h.111V.483h-.11c-.98 2.366-4.674 1.205-4.674 1.205-.44-.139-.827-.27-1.181-.39-1.291-.437-2.144-.726-3.559-.726-5.763 0-13.685 5.87-13.685 17.991 0 9.889 5.92 16.898 14.02 16.898 1.745 0 3.131-.663 4.462-1.3 1.23-.589 2.414-1.156 3.793-1.156.89 0 2.559.558 2.826 2.01h.067l-.023-13.907ZM109.05 1.8h6.008v32.678h-2.937v.358h24.032V22.559h-.155c-.553 12.23-14.061 11.993-15.287 11.946V17.983l.441-.002c2.835-.02 6.398-.046 6.968 7.078h.112V10.66h-.134c-.757 6.92-4.584 6.965-7.41 6.965V1.866c.43 0 .862-.006 1.296-.012 5.183-.078 10.524-.159 12.701 10.861h.133V1.465H105.624V1.8h3.026v24.42c-.111 6.138-4.539 8.928-7.966 8.817-6.275-.224-6.988-6.183-6.988-7.411V1.8h3.005v-.335H85.018V1.8h3.093v22.835c0 6.116 3.093 10.848 12.15 10.848 6.075 0 8.856-5.067 8.789-9.263V1.8Zm-86.137-.023v-.312h6.119v.312h-2.648l-9.902 33.237h-.178L3.843 1.777H.816v-.312h11.06v.312H9.228l9.167 25.514 7.61-25.514h-3.092Zm25.411 16.184c0 2.366-.178 9.91-2.158 13.66-1.224 2.411-3.36 3.416-5.852 3.416-2.493 0-4.629-1.027-5.853-3.415-1.958-3.75-2.158-11.295-2.158-13.661 0-2.366.178-9.665 2.158-13.572 1.18-2.41 3.36-3.415 5.853-3.415 2.492 0 4.672 1.027 5.852 3.415 1.98 3.907 2.158 11.228 2.158 13.572Zm6.32 0c0-10.469-7.499-17.322-14.33-17.322-6.832 0-14.33 6.853-14.33 17.322s7.743 17.41 14.33 17.41c6.608 0 14.33-6.942 14.33-17.41Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="vogueclip">
        <path fill="#fff" d="M.816.483h135.377v35H.816z" />
      </clipPath>
    </defs>
  </svg>
)
export default Vogue
