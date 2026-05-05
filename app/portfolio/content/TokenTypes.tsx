import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { FigureGallery } from "../../components/FigureGallery";

import colorTokens from "../../static/brand-identity/color-tokens.png"
import typographyTokens from "../../static/brand-identity/typography-tokens.png"
import decorationTokens from "../../static/brand-identity/decoration-tokens.png"
import colorTokens2x from "../../static/brand-identity/color-tokens@2x.png"
import typographyTokens2x from "../../static/brand-identity/typography-tokens@2x.png"
import decorationTokens2x from "../../static/brand-identity/decoration-tokens@2x.png"

const TokenTypes = () => {
  return (
    <div>
      <h2>Color, typography, and decoration tokens</h2>
      <ParagraphWrapper>
        <p>Verso’s Brand Identity files include tokens for color, typography, and decorative details. These token groups give each brand a defined place to express visual choices while keeping component APIs consistent.</p>

        <p><strong>Color tokens</strong> control theme values used across components, from text and backgrounds to borders and accents.</p>

        <p><strong>Typography tokens</strong> define responsive type choices so publications can tune hierarchy, scale, and voice within the shared system.</p>

        <p><strong>Decoration tokens</strong> handle details such as border radius, line styles, badges, borders, and brand-specific assets. They give the system a way to support expressive editorial surfaces without hard-coding those details into components.</p>
      </ParagraphWrapper>

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
    </div>
  )
}

export { TokenTypes }
