import React from 'react';
import * as logoSvgs from './logos/index'; // Import all logos from the logos directory

import styles from './Logo.module.css';


console.log(['yer moms logos', logoSvgs])
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
  logoName: string;
}

// Define the Logo component as a functional component
export const Logo: React.FC<LogoProps> = ({ logoName }) => {
  const LogoSvg = logoComponents[logoName]; // Get the component from the map
  if (LogoSvg) {
    return <LogoSvg />; // Render the corresponding logo component
  } else {
    return null; // If the logo component is not found, render nothing
  }
}
