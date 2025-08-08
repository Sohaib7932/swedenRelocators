import { 
  isCookieAllowed, 
  setCookieIfAllowed, 
  getCookieIfAllowed, 
  removeCookie, 
  getCookiePreferences 
} from './cookieUtils';

/**
 * Example of how to use cookie utilities in your components
 */

// Example 1: Setting a user preference (e.g., theme)
export const saveUserTheme = (theme) => {
  // This will only set the cookie if the user has allowed preference cookies
  const success = setCookieIfAllowed('userTheme', theme, 'preferences', { expires: 365, path: '/' });
  
  if (!success) {
    console.log('Preference cookies are disabled. Theme will not be saved between sessions.');
    // You might want to use localStorage as a fallback for session only
    sessionStorage.setItem('userTheme', theme);
  }
  
  return success;
};

// Example 2: Reading a user preference
export const getUserTheme = (defaultTheme = 'light') => {
  // This will only read the cookie if the user has allowed preference cookies
  const theme = getCookieIfAllowed('userTheme', 'preferences');
  
  if (!theme) {
    // Try session storage as fallback
    return sessionStorage.getItem('userTheme') || defaultTheme;
  }
  
  return theme;
};

// Example 3: Setting an analytics cookie
export const trackPageView = (pageData) => {
  // This will only set the cookie if the user has allowed statistics cookies
  const success = setCookieIfAllowed('lastPageView', JSON.stringify(pageData), 'statistics', { expires: 7, path: '/' });
  
  if (success) {
    // If allowed, you could also send this data to your analytics service
    console.log('Analytics tracking enabled');
    // analyticsService.trackPageView(pageData);
  } else {
    console.log('Analytics tracking disabled by user preferences');
  }
};

// Example 4: Setting a marketing cookie
export const saveMarketingPreference = (campaign) => {
  // This will only set the cookie if the user has allowed marketing cookies
  return setCookieIfAllowed('marketingCampaign', campaign, 'marketing', { expires: 30, path: '/' });
};

// Example 5: Getting all cookie preferences for display in a settings page
export const displayCookieSettings = () => {
  const preferences = getCookiePreferences();
  
  return {
    necessary: preferences.necessary, // Always true
    preferences: preferences.preferences,
    statistics: preferences.statistics,
    marketing: preferences.marketing,
    unclassified: preferences.unclassified
  };
};

// Example 6: Necessary cookie for authentication (always allowed)
export const setSessionCookie = (sessionId) => {
  // Since this is a necessary cookie, we can set it directly
  setCookieIfAllowed('sessionId', sessionId, 'necessary', { path: '/' });
};

// Example 7: Checking if a specific cookie type is allowed before loading a component
export const canLoadAnalytics = () => {
  return isCookieAllowed('statistics');
};

// Example 8: Checking if marketing features can be shown
export const canShowMarketingContent = () => {
  return isCookieAllowed('marketing');
};