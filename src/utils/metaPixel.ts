
// Meta Pixel tracking utility
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log(`Meta Pixel Event: ${eventName}`, parameters);
    window.fbq('track', eventName, parameters);
  }
};

export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackViewContent = (contentName: string, contentType: string, value: number, currency: string = 'USD') => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType,
    value: value,
    currency: currency
  });
};

export const trackAddToCart = (contentName: string, value: number, currency: string = 'USD') => {
  trackEvent('AddToCart', {
    content_name: contentName,
    value: value,
    currency: currency
  });
};

export const trackInitiateCheckout = (value: number, currency: string = 'USD', numItems: number) => {
  trackEvent('InitiateCheckout', {
    value: value,
    currency: currency,
    num_items: numItems
  });
};

export const trackPurchase = (value: number, currency: string = 'USD', contentIds: string[]) => {
  trackEvent('Purchase', {
    value: value,
    currency: currency,
    content_ids: contentIds
  });
};
