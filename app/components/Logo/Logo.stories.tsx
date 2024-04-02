import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Logos',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Allure: Story = {args: {logoName: 'allure'}};
export const ArchitecturalDigest: Story = {args: {logoName: 'architectural-digest'}};
export const BonAppetit: Story = {args: {logoName: 'bon-appetit'}};
export const Clever: Story = {args: {logoName: 'clever'}};
export const Epicurious: Story = {args: {logoName: 'epicurious'}};
export const Glamour: Story = {args: {logoName: 'glamour'}};
export const GQ: Story = {args: {logoName: 'gq'}};
export const Hive: Story = {args: {logoName: 'hive'}};
export const HouseGarden: Story = {args: {logoName: 'house-garden'}};
export const LaCucinaItalia: Story = {args: {logoName: 'la-cucina-italiana'}};
export const NewYorker: Story = {args: {logoName: 'new-yorker'}};
export const Pitchfork: Story = {args: {logoName: 'pitchfork'}};
export const Self: Story = {args: {logoName: 'self'}};
export const Tatler: Story = {args: {logoName: 'tatler'}};
export const Them: Story = {args: {logoName: 'them'}};
export const Traveler: Story = {args: {logoName: 'traveler'}};
export const VanityFaire: Story = {args: {logoName: 'vanity-faire'}};
export const Vogue: Story = {args: {logoName: 'vogue'}};
export const Wired: Story = {args: {logoName: 'wired'}};
