export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? "";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = (action, { event_category, event_label, value }) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};
