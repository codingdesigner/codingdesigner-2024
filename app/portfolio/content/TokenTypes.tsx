import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import colorTokens from "../../static/brand-identity/color-tokens.png"
import typographyTokens from "../../static/brand-identity/typography-tokens.png"
import decorationTokens from "../../static/brand-identity/decoration-tokens.png"

const TokenTypes = () => {
  return (
    <React.Fragment>
      <h2>Robust design options with tokens for typography, color themes, and decorations</h2>

      <FigureGallery
        items={[
          {
            file: colorTokens,
            altText: "sample color tokens",
            caption: "A sampling of color tokens",
          },
          {
            file: typographyTokens,
            altText: "sample typography tokens",
            caption: "A sampling of typography tokens",
          },
          {
            file: decorationTokens,
            altText: "sample decoration tokens",
            caption: "A sampling of decoration tokens",
          }
        ]}
      />
    </React.Fragment>
  )
}

export { TokenTypes }
