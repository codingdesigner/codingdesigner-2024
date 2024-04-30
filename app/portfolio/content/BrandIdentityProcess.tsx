'use client';
import React from "react";
import { JsonView, allExpanded, collapseAllNested, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

import styles from './BrandIdentityProcess.module.css'

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
import { LayoutColumns } from "../../components/LayoutColumns";
import { Figure } from "../../components/figure";

import figmaExportPlugin from "../../static/brand-identity/figma-export-plugin_half.png";
import figmaExportPlugin2x from "../../static/brand-identity/figma-export-plugin_full.png";
import biJson from "../../static/brand-identity/brand-id-example.json";

const BrandIdentityProcess = () => {
  return (
    <React.Fragment>
      <h2>Seamless Workflow Integration between Design and Engineering</h2>

      <ParagraphWrapper>
        <p>Another aspect of my work involves bridging the gap between design and engineering teams. I developed a custom Figma plugin that facilitates the export and import of brand identity files directly within the design tool. This tool translates a designer’s work into JSON files used by developers, maintaining the JSON as the "source of truth." This ensures that the web application is always aligned with the latest design specifications without any delays or discrepancies.</p>
      </ParagraphWrapper>

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
