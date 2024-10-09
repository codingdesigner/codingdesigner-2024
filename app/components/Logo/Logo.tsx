import React from 'react';
import * as logoSvgs from './logos/index'; // Import all logos from the logos directory

// import styles from './Logo.module.css';

// Define a map of logo components, where the key is the logo name and the value is the corresponding React component
const logoComponents: { [key: string]: React.ComponentType } = {
  'allure': logoSvgs.Allure,
  'architectural-digest': logoSvgs.ArchitecturalDigest,
  'bon-appetit': logoSvgs.BonAppetit,
  'clever': logoSvgs.Clever,
  'epicurious': logoSvgs.Epicurious,
  'glamour': logoSvgs.Glamour,
  'gq': logoSvgs.GQ,
  'hive': logoSvgs.Hive,
  'house-garden': logoSvgs.HouseGarden,
  'la-cucina-italiana': logoSvgs.LaCucinaItalia,
  'new-yorker': logoSvgs.NewYorker,
  'pitchfork': logoSvgs.Pitchfork,
  'self': logoSvgs.Self,
  'tatler': logoSvgs.Tatler,
  'teen-vogue': logoSvgs.TeenVogue,
  'them': logoSvgs.Them,
  'traveler': logoSvgs.Traveler,
  'vanity-faire': logoSvgs.VanityFaire,
  'vogue': logoSvgs.Vogue,
  'wired': logoSvgs.Wired
};

// Define the props for the Logo component
export interface LogoProps {
  logoName?: string; // The name of the logo to be rendered
}

// Define the Logo component as a functional component
export const Logo: React.FC<LogoProps> = ({ logoName }) => {
  let LogoSvg
  if (logoName) {
    LogoSvg = logoComponents[logoName]; // Get the component from the map using the provided logoName
  }
  if (LogoSvg) {
    return <LogoSvg data-testid="logo"/>; // If the corresponding logo component is found, render it
  } else {
    return null; // If the logo component is not found, render nothing
  }
}
