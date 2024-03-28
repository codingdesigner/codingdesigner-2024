import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FigureGallery } from './FigureGallery';
import brandlessCard from "../../static/cards/card-brandless.png"
import notVogueCard from "../../static/cards/card-not-vogue.png"
import notNewYorkerCard from "../../static/cards/card-not-new-yorker.png"
import notThemCard from "../../static/cards/card-not-them.png"

const storyImages =
  [
    {
      file: brandlessCard,
      altText: "brandless card",
      caption: "A brandless/white label card"
    },
    {
      file: notVogueCard,
      altText: "not Vogue card",
      caption: "A card from a fashion brand"
    },
    {
      file: notNewYorkerCard,
      altText: "not The New Yorker card",
      caption: "A card from a news and literary brand"
    },
    {
      file: notThemCard,
      altText: "not Them.us cardnot Them.us card",
      caption: "A card from an LGBTQIA news brand"
    }
  ];

const meta: Meta<typeof FigureGallery> = {
  title: 'Portfolio/FigureGallery',
  component: FigureGallery,
};

export default meta;

type Story = StoryObj<typeof FigureGallery>;

export const Basic: Story = { args: { items: storyImages } };
