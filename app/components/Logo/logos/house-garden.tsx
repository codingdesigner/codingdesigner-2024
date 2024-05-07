import * as React from "react"
import styles from "../Logo.module.css"

const HouseGarden = (props) => (
  <svg
    className={styles.logo}
    xmlns="http://www.w3.org/2000/svg"
    width={104}
    height={36}
    viewBox="0 0 104 36"
    fill="none"
    {...props}
  >
    <g fill="#000" clipPath="url(#housegardenclip)">
      <path d="M103.166 12.687c-.141 2.23-.547 3.403-2.331 3.403-.812 0-1.74-.706-2.655-1.694 1.294-1.573 1.666-2.52 2.212-3.87.708-1.75 1.329-2.283 3.179-2.398v-.391h-5.8v.4c1.327 0 2.263.336 2.263 1.27 0 1.202-1.042 3.214-2.174 4.658-.951-1.086-1.875-2.415-2.626-3.502a30.578 30.578 0 0 1-2.015-3.221c3.421-1.606 4.528-2.52 4.528-4.05 0-1.792-1.649-2.798-3.89-2.798-2.688 0-4.902 1.976-4.902 4.412 0 1.057.47 2.318 1.07 3.504-2.091 1.115-4.406 2.756-4.406 5.13 0 3.09 2.254 4.497 5.51 4.497a8.428 8.428 0 0 0 4.84-1.496c.991.868 2.123 1.496 3.331 1.496 3.053 0 4.308-2.307 4.346-5.338l-.48-.012ZM93.873.85c1.333 0 1.76.75 1.76 2.431 0 2.037-.553 2.617-2.607 3.651-.62-1.242-1.12-2.596-1.12-3.756 0-1.103.476-2.326 1.967-2.326Zm-.689 16.187c-2.37 0-4.308-1.553-4.308-4.566 0-1.613.51-2.68 1.463-3.508.6 1.072 1.27 2.105 2.002 3.092.687.936 1.839 2.763 3.29 4.152-.76.533-1.519.83-2.447.83ZM18.182 1.498c.254-.254.708-.31 1.72-.31h.774V.824h-8.871v.366h.645c1.016 0 1.461.055 1.72.309.338.337.398.815.398 3.093v4.286H6.645V4.591c0-2.278.057-2.756.399-3.093.255-.254.707-.31 1.72-.31h.645V.824H.538v.366h.773c1.016 0 1.463.055 1.72.309.34.337.395.815.395 3.093v9.338c0 2.28-.055 2.756-.399 3.095-.253.253-.707.31-1.72.31h-.77v.365H9.41v-.366h-.645c-1.015 0-1.461-.056-1.72-.309-.338-.339-.399-.816-.399-3.095V9.327h7.923v4.602c0 2.28-.056 2.756-.398 3.095-.255.253-.707.31-1.72.31h-.645v.365h8.872v-.366H19.9c-1.014 0-1.461-.056-1.719-.309-.34-.339-.399-.816-.399-3.095V4.591c0-2.278.055-2.756.4-3.093ZM66.447 14.601c0-2.561-1.988-3.105-4.654-3.926-3.064-.95-6.094-1.763-6.083-5.384 0-2.838 2.122-4.798 5.131-4.798 2.623 0 4.267 1.564 5.228 1.564.591 0 .849-.45.874-1.237h.365v5.953h-.365c-.626-3.765-3.09-5.915-6.078-5.915-2.34 0-3.157 1.431-3.157 2.669 0 2.309 2.245 2.964 4.681 3.73 2.87.896 6.24 1.842 6.24 5.326 0 3.292-1.97 5.45-5.893 5.45-2.939 0-4.06-1.633-5.518-1.633-.618 0-.99.565-1.043 1.294h-.403v-7.22h.367c.368 3.262 2.651 7.196 6.598 7.196 2.902 0 3.71-1.242 3.71-3.069Z" />
      <path d="M29.015 18.033c4.768 0 8.433-3.85 8.433-8.772 0-4.923-3.665-8.774-8.433-8.774s-8.433 3.851-8.433 8.774c0 4.922 3.665 8.772 8.433 8.772Zm0-.365c-3.242 0-5.05-3.016-5.05-8.407S25.78.853 29.016.853c3.236 0 5.05 3.031 5.05 8.408 0 5.377-1.807 8.41-5.05 8.41v-.003ZM43.083 4.591c0-2.278.058-2.755.4-3.093.254-.253.707-.31 1.72-.31h.773V.824h-9v.366h.775c1.015 0 1.463.055 1.72.309.34.336.398.815.398 3.093v7.49c0 2.335.927 5.952 7.1 5.952 3.055 0 5.998-.957 5.998-5.87V5.042c0-2.972.89-3.852 2.921-3.852V.823H49.53v.366c2.016 0 2.92.88 2.92 3.852v7.155c0 4.887-3.193 5.363-4.923 5.363-2.821 0-4.451-1.68-4.451-5.026l.008-7.942ZM83.58 11.165c-.199 3.46-2.148 6.168-5.56 6.168h-3.122V9.025h1.388c2.142 0 3.355.742 3.638 3.92h.366V4.65h-.367c-.282 3.178-1.495 3.926-3.637 3.926h-1.385V1.19h3.032c3.13 0 4.851 2.09 5.218 5.292h.365V.823H68.788v.366h.777c1.014 0 1.461.055 1.719.309.34.337.399.815.399 3.094v9.337c0 2.28-.056 2.756-.4 3.095-.253.253-.707.31-1.718.31h-.777v.365h15.156v-6.534h-.365ZM78.367 19.605c3.13 0 4.846 1.872 5.212 5.074h.365V19.24H68.788v.364h.777c1.014 0 1.461.055 1.719.31.34.337.399.814.399 3.093v8.446c0 2.279-.056 2.756-.4 3.095-.253.252-.707.309-1.718.309h-.777v.365h15.156v-6.21h-.369c-.198 3.461-2.143 5.843-5.556 5.843H74.9v-7.925h1.387c2.142 0 3.355.525 3.638 3.703h.366v-7.86h-.367c-.282 3.177-1.495 3.71-3.637 3.71h-1.385v-6.879h3.466ZM51.221 31.091c0 1.671-.283 3.517-1.463 3.517-.533 0-.716-.706-.809-1.153-.151-.725-.19-1.499-.362-2.55-.384-2.334-1.828-3.486-3.895-3.92 3.185-.477 4.527-1.904 4.527-3.81 0-2.202-1.465-3.94-5.546-3.94h-9.051v.364h.353c.968 0 1.432.085 1.636.325.293.346.375.857.375 5.704v3.34c0 4.847-.082 5.194-.375 5.54-.204.238-.668.344-1.636.344h-.353v.366h8.184v-.366h-.598c-.968 0-1.432-.106-1.637-.344-.292-.346-.367-.693-.367-5.54v-1.791h1.94c1.98 0 2.547.735 2.704 2.486.062.725.11 1.157.196 2.142.184 2.07 1.374 3.627 3.457 3.627 2.731 0 3.112-1.976 3.112-4.34h-.392Zm-8.205-4.366H40.21v-7.079c.72-.027 2.053-.032 2.667-.032 2.19 0 2.901 1.298 2.901 3.572-.005 1.994-.256 3.539-2.764 3.539h.002ZM60.307 35.223h-8.444v-.364h.599c.967 0 1.431-.107 1.637-.346.293-.345.373-.834.373-5.681v-3.198c0-4.848-.08-5.363-.373-5.704-.205-.24-.67-.325-1.637-.325h-.599v-.364H60.3c5.434 0 8.171 3.782 8.171 7.992s-2.7 7.99-8.169 7.99m-.677-15.612c-.67 0-1.434 0-1.94.03v15.165c.508.026 1.273.026 1.942.026 3.765 0 5.343-2.86 5.343-7.6 0-4.738-1.58-7.62-5.345-7.62M16.287 30.875c0-1.918.125-2.318.346-2.557.22-.238.675-.347 1.636-.347h.376v-.37h-7.923v.371h.425c.962 0 1.37.109 1.591.348.221.238.346.639.346 2.557 0 2.025-1.173 4.242-3.888 4.242-3.285 0-4.754-3.99-4.754-7.88 0-5.034 1.951-8.107 5.212-8.107 3.125 0 5.02 2.995 5.553 5.683h.378v-5.887h-.38c-.079.8-.538 1.386-1.01 1.386-.775 0-2.004-1.553-4.54-1.553-5.367 0-8.594 3.997-8.594 8.468 0 4.284 3.408 8.247 8.135 8.247 2.99 0 3.695-1.835 4.87-1.835.792 0 1.582.473 1.868 1.464h.343l.01-4.23ZM98.035 19.241v.363c1.87.106 2.601 1.171 2.601 3.648v7.028l-9.07-11.039h-5.41v.364c1.256.026 1.98.565 2.646 1.423l.169.202v10.002c0 2.477-.72 3.626-2.6 3.626v.365h5.724v-.365c-1.882 0-2.6-1.149-2.6-3.626v-9.374l11.223 13.478h.424l.024-12.084c0-2.477.731-3.542 2.6-3.648v-.363h-5.73ZM31.37 31.886l-5.206-12.964h-.151l-5.185 12.972c-.773 1.932-1.664 2.964-3.362 2.964v.365h5.576v-.365c-1.235 0-2.019-.49-2.019-1.26a3.539 3.539 0 0 1 .262-1.365l.927-2.4h4.753l1.026 2.612c.167.372.258.774.267 1.182 0 .586-.311 1.225-1.517 1.225h-.537v.366h8.034v-.366c-1.195.006-1.918-.714-2.869-2.966Zm-8.986-2.495 2.187-5.645 2.217 5.645h-4.404Z" />
      <path d="M103.308 21.433a.587.587 0 0 1-.578-.696.587.587 0 0 1 1.161.11.586.586 0 0 1-.583.586Zm0-1.087a.503.503 0 1 0 .502.501.487.487 0 0 0-.502-.495v-.006Zm.085.53.198.296h-.082l-.188-.297h-.155v.297h-.075v-.657h.283c.173 0 .23.064.23.181 0 .117-.091.172-.215.18h.004Zm-.036-.294h-.191v.227h.199c.076 0 .155-.016.155-.114 0-.1-.086-.113-.167-.113h.004Z" />
    </g>
    <defs>
      <clipPath id="housegardenclip">
        <path fill="#fff" d="M.538.483h103.349v35H.537z" />
      </clipPath>
    </defs>
  </svg>
)
export default HouseGarden
