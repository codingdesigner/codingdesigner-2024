import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { FigureGallery } from "../../components/FigureGallery";

import storefrontHome from "../../static/storefront/storefrontHome_half.png"
import storefrontButton from "../../static/storefront/storefrontButton_half.png"
import storefrontButtonVariations from "../../static/storefront/storefrontButtonVariations_half.png"
import storefrontButtonCode from "../../static/storefront/storefrontButtonCode_half.png"
import storefrontButtonUsage from "../../static/storefront/storefrontButtonUsage_half.png"

import storefrontHome2x from "../../static/storefront/storefrontHome_full.png"
import storefrontButton2x from "../../static/storefront/storefrontButton_full.png"
import storefrontButtonVariations2x from "../../static/storefront/storefrontButtonVariations_full.png"
import storefrontButtonCode2x from "../../static/storefront/storefrontButtonCode_full.png"
import storefrontButtonUsage2x from "../../static/storefront/storefrontButtonUsage_full.png"

const Storefront = () => {
  return (
    <div>
      <h2>Guidance and Governance through a Design System Portal</h2>

      <ParagraphWrapper>
        <p>To further support and enable users within and outside our core team, I created a storefront-like site, acting as a design system portal. This platform not only provides detailed guidelines and resource accessibility but also encourages contribution and ownership across the broader team. By making the tools and elements of our design system transparent and accessible, we enhance collective creativity and ensure that our products always feel fresh, current, and connected to our users' needs.</p>
      </ParagraphWrapper>

      <FigureGallery
        items={[
          {
            imageFile: storefrontHome,
            altText: "a screenshot of the Verso storefront site",
            caption: "the Verso storefront site",
            modalImageFile: storefrontHome2x,
          },
          {
            imageFile: storefrontButton,
            altText: "a screenshot of a button component from the Verso storefront site",
            caption: "a button component from the Verso storefront site",
            modalImageFile: storefrontButton2x,
          },
          {
            imageFile: storefrontButtonVariations,
            altText: "a screenshot of button component variations from the Verso storefront site",
            caption: "variations of a button component from the Verso storefront site",
            modalImageFile: storefrontButtonVariations2x,
          },
          {
            imageFile: storefrontButtonCode,
            altText: "a screenshot of button component code implementation from the Verso storefront site",
            caption: "code implementation of a button component from the Verso storefront site",
            modalImageFile: storefrontButtonCode2x,
          },
          {
            imageFile: storefrontButtonUsage,
            altText: "a screenshot of button component usage from the Verso storefront site",
            caption: "details on using a button component from the Verso storefront site",
            modalImageFile: storefrontButtonUsage2x,
          },
        ]}
      />
    </div>
  )
}

export { Storefront }
