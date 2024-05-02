import React from "react"
import { DecoratedHeading } from "../components/DecoratedHeading"
import { Figure } from "../components/figure"

import styles from "./home.module.css"

import gwenGoodLight from "../static/gwendy/gwendy-good-light.png"

export default function HomePage() {
  return (
    <React.Fragment>
      <DecoratedHeading className={styles.homeHeading} background="peach">Design Systems for Big Needs</DecoratedHeading>
      <Figure
        imageFile={gwenGoodLight}
        altText="Gwendy Wendell looking at the camera"
        modalImageFile={null}
        circleCrop={true}
        grayScale={true}
      />
    </React.Fragment>
  )
}
