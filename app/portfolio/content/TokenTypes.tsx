import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import colorTokens from "../../static/brand-identity/color-tokens.png"
import typographyTokens from "../../static/brand-identity/typography-tokens.png"
import decorationTokens from "../../static/brand-identity/decoration-tokens.png"
import colorTokens2x from "../../static/brand-identity/color-tokens@2x.png"
import typographyTokens2x from "../../static/brand-identity/typography-tokens@2x.png"
import decorationTokens2x from "../../static/brand-identity/decoration-tokens@2x.png"

const TokenTypes = () => {
  return (
    <React.Fragment>
      <h2>Robust design options with tokens for typography, color themes, and decorations</h2>

      <FigureGallery
        items={[
          {
            imageFile: colorTokens,
            altText: "sample color tokens",
            caption: "A sampling of color tokens",
            modalImageFile: colorTokens2x
          },
          {
            imageFile: typographyTokens,
            altText: "sample typography tokens",
            caption: "A sampling of typography tokens",
            modalImageFile: typographyTokens2x
          },
          {
            imageFile: decorationTokens,
            altText: "sample decoration tokens",
            caption: "A sampling of decoration tokens",
            modalImageFile: decorationTokens2x
          }
        ]}
      />
    </React.Fragment>
  )
}

export { TokenTypes }
