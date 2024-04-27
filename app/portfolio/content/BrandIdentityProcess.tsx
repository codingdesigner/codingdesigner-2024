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
      <h2>Seemless round-trip workflow between design and enginering using Figma and custom plugins</h2>
      <LayoutColumns>
        <Figure
          imageFile={figmaExportPlugin}
          altText="a custom Figma plugin to export and import brand identity files"
          caption="a custom Figma plugin to export and import brand identity files"
          imageFirst={false}
          modalImageFile={figmaExportPlugin2x}
        />

        <div className={styles.jsonContainer}>
          <div className={styles.jsonDescription}>All design tokens are expressed as JSON and consumed by the web app.</div>

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
