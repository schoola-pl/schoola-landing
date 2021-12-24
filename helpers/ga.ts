export const pageView = (url: string) => {
  window.gtag('config', 'G-YSBMD4QED3', {
    page_path: url
  });
};

export const event = ({ action, params }: any) => {
  window.gtag('event', action, params);
};
