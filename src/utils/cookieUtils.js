import Cookies from 'js-cookie';

/**
 * Check if a specific cookie category is allowed based on user preferences
 * @param {string} category - The cookie category to check (necessary, preferences, statistics, marketing, unclassified)
 * @returns {boolean} - Whether the cookie category is allowed
 */
export const isCookieAllowed = (category) => {
  try {
    // Necessary cookies are always allowed
    if (category === 'necessary') return true;
    
    const preferences = Cookies.get('cookiePreferences');
    if (!preferences) return false;
    
    const parsedPreferences = JSON.parse(preferences);
    return parsedPreferences[category] === true;
  } catch (error) {
    console.error('Error checking cookie permissions:', error);
    return category === 'necessary'; // Only allow necessary cookies by default
  }
};

/**
 * Set a cookie if the category is allowed
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {string} category - Cookie category (necessary, preferences, statistics, marketing, unclassified)
 * @param {object} options - Cookie options (expires, path, etc.)
 * @returns {boolean} - Whether the cookie was set
 */
export const setCookieIfAllowed = (name, value, category, options = {}) => {
  if (isCookieAllowed(category)) {
    Cookies.set(name, value, options);
    return true;
  }
  return false;
};

/**
 * Get a cookie if the category is allowed
 * @param {string} name - Cookie name
 * @param {string} category - Cookie category
 * @returns {string|undefined} - Cookie value or undefined if not allowed
 */
export const getCookieIfAllowed = (name, category) => {
  if (isCookieAllowed(category)) {
    return Cookies.get(name);
  }
  return undefined;
};

/**
 * Remove a cookie
 * @param {string} name - Cookie name
 * @param {object} options - Cookie options (path, domain, etc.)
 */
export const removeCookie = (name, options = {}) => {
  Cookies.remove(name, options);
};

/**
 * Get all user cookie preferences
 * @returns {object} - Cookie preferences object
 */
export const getCookiePreferences = () => {
  try {
    const preferences = Cookies.get('cookiePreferences');
    return preferences ? JSON.parse(preferences) : {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
      unclassified: false
    };
  } catch (error) {
    console.error('Error getting cookie preferences:', error);
    return {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
      unclassified: false
    };
  }
};