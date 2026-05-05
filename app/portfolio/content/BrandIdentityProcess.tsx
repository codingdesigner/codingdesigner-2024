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
    <div>
      <h2>Figma tooling for design-to-code workflows</h2>

      <ParagraphWrapper>
        <p>I built a custom Figma plugin for exporting and importing Brand Identity files inside the design tool. The plugin connected design decisions to JSON used by the web application, keeping tokens and implementation pointed at the same source of truth.</p>
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
          <div className={styles.jsonDescription}>Design tokens expressed as JSON for the web app.</div>

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
    </div>
  )
}

export { BrandIdentityProcess }
