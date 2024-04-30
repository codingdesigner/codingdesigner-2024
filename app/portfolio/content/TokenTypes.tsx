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
      <h2>Unleash the Potential of Design with Custom Tokens</h2>

      <p>Our design system offers a comprehensive suite of tokens for typography, color themes, and decorative elements, providing unmatched versatility and customization options.</p>

      <p>Our color tokens are meticulously crafted to enable effortless custom coloring of every design element, ensuring a harmonious visual experience without overwhelming users with an abundance of options.</p>

      <p>Our typography tokens are thoughtfully designed to strike the perfect balance between creativity and performance. Through meticulous analysis, we've developed a responsive text system that empowers designers with precise control over their typographic choices.</p>

      <p>Our decoration tokens feature is a unique addition to our system that allows for the fine-tuning of decorative elements such as border radius and line styles. From customizing badges and borders to uploading bespoke assets for backgrounds, this innovative feature adds an extra layer of creativity to our brand sites.</p>

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
