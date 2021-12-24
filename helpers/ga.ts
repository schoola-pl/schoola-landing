export const pageView = (url: string) => {
  // @ts-ignore
  window.gtag('config', 'G-YSBMD4QED3', {
    page_path: url
  });
};

export const event = ({ action, params }: any) => {
  // @ts-ignore
  window.gtag('event', action, params);
};
