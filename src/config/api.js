// Global API configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.swedenrelocators.se/api',
  ENDPOINTS: {
    TRACKING_SNIPPETS: '/miscellaneous/tracking/snippets'
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Get the tracking snippets endpoint URL
export const getTrackingSnippetsUrl = () => {
  return getApiUrl(API_CONFIG.ENDPOINTS.TRACKING_SNIPPETS);
};
