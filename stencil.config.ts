import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'accessible-webcomponents',
  plugins: [
    sass(
      {
        injectGlobalPaths: [
          'src/assets/styles/global-styles.scss'
        ]
      }
    )
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'single-export-module'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  extras: {
    cloneNodeFix: true,
    enableImportInjection: true
  }
};
