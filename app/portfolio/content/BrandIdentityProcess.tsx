'use client';
import React from "react";
import { JsonView, allExpanded, collapseAllNested, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

import styles from './BrandIdentityProcess.module.css'

import { LayoutColumns } from "../../components/LayoutColumns";
import { Figure } from "../../components/figure";

import figmaExportPlugin from "../../static/brand-identity/figma-export-plugin_half.png";
import figmaExportPlugin2x from "../../static/brand-identity/figma-export-plugin_full.png";
import biJson from "../../static/brand-identity/brand-id-example.json";

const BrandIdentityProcess = () => {
  return (
    <React.Fragment>
      <h2>Creating a Seamless Round-Trip Workflow Between Design and Engineering with Figma and Custom Plugins</h2>

      <p>Our innovative approach facilitates a fluid back-and-forth process between design and engineering teams. By harnessing the power of Figma and custom plugins, we've developed a solution that streamlines the translation of design elements into the web application, ensuring a harmonious collaboration between designers and developers. I created a custom Figma plugin tailored to export and import brand identity files, designers can effortlessly translate their visual design concepts into the JSON format required by the web application. This not only accelerates the design-to-development process but also maintains the integrity of the JSON file as the definitive "source of truth," guaranteeing that the web application is always in sync with the latest design updates.</p>


      <LayoutColumns>
        <Figure
          imageFile={figmaExportPlugin}
          altText="Custom Figma plugin to export and import brand identity files"
          caption="Custom Figma plugin to export and import brand identity files"
          imageFirst={false}
          modalImageFile={figmaExportPlugin2x}
        />

        <div className={styles.jsonContainer}>
          <div className={styles.jsonDescription}>All design tokens are expressed as JSON for the web app.</div>

          <JsonView
            data={biJson}
            shouldExpandNode={(level: number) => level < 2}
            style={defaultStyles}
          />
          {/* <JsonView
            data={biJson}
            shouldExpandNode={(level: number) => level < 2}
            style={darkStyles}
          /> */}
        </div>
      </LayoutColumns>
    </React.Fragment>
  )
}

export { BrandIdentityProcess }
