import React from "react";

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
    <React.Fragment>
      <h2>Empowering Users through our Design System Portal</h2>

      <p>To provide comprehensive guidance and governance, we have developed a user-friendly storefront site dedicated to showcasing the capabilities of our design system. This portal serves as a hub for users, offering insights into the vast array of resources available and encouraging collaboration and contribution from individuals beyond our core design team. By fostering a sense of ownership and inclusivity, we aim to cultivate a dynamic environment where users can explore, engage, and actively contribute to the growth and evolution of our design system.</p>

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
    </React.Fragment>
  )
}

export { Storefront }
