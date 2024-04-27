import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FigureGallery } from './FigureGallery';
import brandlessCard from "../../static/cards/card-brandless.png"
import notVogueCard from "../../static/cards/card-not-vogue.png"
import notNewYorkerCard from "../../static/cards/card-not-new-yorker.png"
import notThemCard from "../../static/cards/card-not-them.png"
import brandlessCard2x from "../../static/cards/card-brandless@2x.png"
import notVogueCard2x from "../../static/cards/card-not-vogue@2x.png"
import notNewYorkerCard2x from "../../static/cards/card-not-new-yorker@2x.png"
import notThemCard2x from "../../static/cards/card-not-them@2x.png"

const storyImages =
  [
    {
      imageFile: brandlessCard,
      altText: "brandless card",
      caption: "A brandless/white label card",
      modalImageFile: brandlessCard2x,
    },
    {
      imageFile: notVogueCard,
      altText: "not Vogue card",
      caption: "A card from a fashion brand",
      modalImageFile: notVogueCard2x,
    },
    {
      imageFile: notNewYorkerCard,
      altText: "not The New Yorker card",
      caption: "A card from a news and literary brand",
      modalImageFile: notNewYorkerCard2x,
    },
    {
      imageFile: notThemCard,
      altText: "not Them.us cardnot Them.us card",
      caption: "A card from an LGBTQIA news brand",
      modalImageFile: notThemCard2x,
    }
  ];

const meta: Meta<typeof FigureGallery> = {
  title: 'Portfolio/FigureGallery',
  component: FigureGallery,
};

export default meta;

type Story = StoryObj<typeof FigureGallery>;

export const Basic: Story = { args: { items: storyImages } };
