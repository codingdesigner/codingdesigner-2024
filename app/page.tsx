import React from "react"
import { DecoratedHeading } from "./components/DecoratedHeading"
import { Figure } from "./components/figure"

import gwenGoodLight from "./static/gwendy/gwendy-good-light.png"

export default function Page() {
  return (
    <React.Fragment>
      <DecoratedHeading background="peach">Design Systems for Big Needs</DecoratedHeading>
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
