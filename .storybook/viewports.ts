interface Viewport {
  name: string;
  styles: { width: string, height?: string };
  type: string;
}

type ViewportMap = {
  [key: string]: Viewport
}
export const customViewports: ViewportMap = {
  BP_SM: {
    name: 'SM (481px)',
    type: 'mobile',
    styles: {
      width: '481px',
      height: '100%'
    },
  },
  BP_SM_10: {
    name: 'SM (600px)',
    type: 'mobile',
    styles: {
      width: '600px',
      height: '100%'
    },
  },
  BP_MD: {
    name: 'MD (768px)',
    type: 'tablet',
    styles: {
      width: '768px',
      height: '100%'
    },
  },
  BP_LG_04: {
    name: 'LG-04 (850px)',
    type: 'tablet',
    styles: {
      width: '850px',
      height: '100%'
    },
  },
  BP_LG: {
    name: 'LG (960px)',
    type: 'tablet',
    styles: {
      width: '960px',
      height: '100%'
    },
  },
  BP_LG_05: {
    name: 'LG-05 (1024px)',
    type: 'laptop',
    styles: {
      width: '1024px',
      height: '100%'
    },
  },
  BP_LG_10: {
    name: 'LG-10 (1280px)',
    type: 'laptop',
    styles: {
      width: '1280px',
      height: '100%'
    },
  },
  BP_LG_35: {
    name: 'LG-35 (1880px)',
    type: 'desktop',
    styles: {
      width: '1024px',
      height: '100%'
    },
  },
  BP_LG_40: {
    name: 'LG-40 (1920px)',
    type: 'desktop',
    styles: {
      width: '1920px',
      height: '100%'
    },
  },
};
