import React, { useState, useEffect } from 'react';
import { isCookieAllowed, setCookieIfAllowed, getCookieIfAllowed } from '../../utils/cookieUtils';

const ExampleCookieUsage = () => {
  const [theme, setTheme] = useState('light');
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check cookie permissions
    const preferencesAllowed = isCookieAllowed('preferences');
    const statisticsAllowed = isCookieAllowed('statistics');
    const marketingAllowed = isCookieAllowed('marketing');
    
    setAnalyticsEnabled(statisticsAllowed);
    setMarketingEnabled(marketingAllowed);
    
    // Load theme from cookie if preferences are allowed
    if (preferencesAllowed) {
      const savedTheme = getCookieIfAllowed('theme', 'preferences') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Listen for cookie preference changes
    const handleCookiePreferencesUpdated = (event) => {
      const { preferences } = event.detail;
      setAnalyticsEnabled(preferences.statistics);
      setMarketingEnabled(preferences.marketing);
      
      if (preferences.preferences) {
        const savedTheme = getCookieIfAllowed('theme', 'preferences') || 'light';
        setTheme(savedTheme);
      }
    };
    
    document.addEventListener('cookiePreferencesUpdated', handleCookiePreferencesUpdated);
    
    return () => {
      document.removeEventListener('cookiePreferencesUpdated', handleCookiePreferencesUpdated);
    };
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Try to save theme preference
    const success = setCookieIfAllowed('theme', newTheme, 'preferences', { expires: 365, path: '/' });
    
    if (!success) {
      setMessage('Theme preference could not be saved because preference cookies are disabled.');
      setTimeout(() => setMessage(''), 3000);
    }
  };
  
  const trackEvent = () => {
    if (analyticsEnabled) {
      // Example of tracking an event
      const eventData = {
        eventType: 'button_click',
        eventName: 'example_button',
        timestamp: new Date().toISOString()
      };
      
      setCookieIfAllowed('lastEvent', JSON.stringify(eventData), 'statistics', { expires: 7, path: '/' });
      setMessage('Event tracked successfully!');
    } else {
      setMessage('Analytics are disabled. Enable statistics cookies to track events.');
    }
    
    setTimeout(() => setMessage(''), 3000);
  };
  
  const showMarketingPromo = () => {
    if (marketingEnabled) {
      setMessage('Special offer: 20% off your next purchase!');
    } else {
      setMessage('Marketing features are disabled. Enable marketing cookies to see promotions.');
    }
    
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="example-component" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Cookie Functionality Demo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Theme Preference (Preference Cookie)</h3>
        <p>Current theme: {theme}</p>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
            color: theme === 'light' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Theme
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Analytics (Statistics Cookie)</h3>
        <p>Analytics status: {analyticsEnabled ? 'Enabled' : 'Disabled'}</p>
        <button 
          onClick={trackEvent}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: analyticsEnabled ? '1' : '0.5'
          }}
        >
          Track Example Event
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Marketing Features (Marketing Cookie)</h3>
        <p>Marketing features: {marketingEnabled ? 'Enabled' : 'Disabled'}</p>
        <button 
          onClick={showMarketingPromo}
          style={{
            padding: '8px 16px',
            backgroundColor: '#FF5722',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: marketingEnabled ? '1' : '0.5'
          }}
        >
          Show Marketing Promo
        </button>
      </div>
      
      {message && (
        <div 
          style={{
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            borderRadius: '4px',
            marginTop: '20px'
          }}
        >
          {message}
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <p>
          <small>
            Note: To change cookie settings, visit the Cookie Settings page or click the cookie icon in the footer.
          </small>
        </p>
      </div>
    </div>
  );
};

export default ExampleCookieUsage; 