# Tracking Snippets Integration

This document explains the tracking snippets system integrated into the Sweden Relocators website.

## Overview

The tracking snippets system automatically fetches and injects tracking code (like Facebook Pixel, Google Analytics, etc.) from the API endpoint into your website's HTML structure.

## API Configuration

The base API URL is configured in `src/config/api.js`:
```javascript
export const API_CONFIG = {
  BASE_URL: 'https://api.swedenrelocators.se/api',
  ENDPOINTS: {
    TRACKING_SNIPPETS: '/miscellaneous/tracking/snippets'
  }
};
```

## How It Works

1. **API Endpoint**: `https://api.swedenrelocators.se/api/miscellaneous/tracking/snippets`
2. **Response Format**: The API returns tracking snippets in this format:
   ```json
   {
     "data": {
       "head_html": "<meta>...</meta><script>...</script>",
       "body_start_html": "",
       "body_end_html": "",
       "updated_at": "2025-08-09T08:43:49+02:00"
     },
     "message": "Snippets fetched."
   }
   ```

3. **Injection Points**:
   - `head_html`: Injected into the `<head>` section
   - `body_start_html`: Injected at the beginning of `<body>`
   - `body_end_html`: Injected at the end of `<body>`

## Files Structure

```
src/
├── config/
│   ├── api.js                    # API configuration
│   └── index.js                  # Configuration exports
├── utils/
│   └── trackingService.js        # Core tracking logic
├── hooks/
│   └── use-tracking-snippets.js  # React hook
├── components/
│   └── TrackingSnippetsProvider/
│       └── index.jsx             # Optional provider component
└── App.jsx                       # Main app (integrated)
```

## Usage

### Automatic Integration (Current Implementation)

The tracking snippets are automatically initialized in `App.jsx`:

```jsx
import { useTrackingSnippets } from './hooks/use-tracking-snippets';

function App() {
  const { isLoading, isInitialized, error } = useTrackingSnippets();
  
  // Your app content...
}
```

### Manual Integration

If you need more control, you can use the tracking service directly:

```javascript
import { initializeTrackingSnippets } from './utils/trackingService';

// Initialize tracking snippets
const success = await initializeTrackingSnippets();
```

### Using the Provider Component

Alternative approach using the provider component:

```jsx
import TrackingSnippetsProvider from './components/TrackingSnippetsProvider';

function App() {
  return (
    <TrackingSnippetsProvider>
      {/* Your app content */}
    </TrackingSnippetsProvider>
  );
}
```

## API Functions

### Configuration Functions
- `getApiUrl(endpoint)`: Get full API URL
- `getTrackingSnippetsUrl()`: Get tracking snippets endpoint URL

### Service Functions
- `fetchTrackingSnippets()`: Fetch snippets from API
- `injectHeadContent(html)`: Inject content into `<head>`
- `injectBodyStartContent(html)`: Inject content at start of `<body>`
- `injectBodyEndContent(html)`: Inject content at end of `<body>`
- `initializeTrackingSnippets()`: Main initialization function

### Hook Functions
- `useTrackingSnippets()`: React hook that returns:
  - `isLoading`: Boolean indicating if snippets are being fetched
  - `isInitialized`: Boolean indicating if snippets were successfully loaded
  - `error`: Error message if initialization failed
  - `reinitialize()`: Function to reinitialize snippets

## Features

### Duplicate Prevention
The system prevents duplicate tracking scripts by checking for existing elements before injection.

### Error Handling
- Graceful error handling with console logging
- Non-blocking: If tracking fails, the app continues to work
- Development vs production logging

### Flexible Content Types
Supports various HTML content types:
- Meta tags
- Script tags (inline and external)
- Noscript tags
- Other HTML elements

## Development

### Logging
In development mode, you'll see console logs about the tracking snippets status:
- Loading states
- Success/error messages
- Initialization status

### Testing
You can test the tracking system by:
1. Opening browser developer tools
2. Checking the Network tab for API calls to the tracking endpoint
3. Inspecting the DOM for injected tracking elements
4. Looking at console logs for status messages

## Configuration Changes

To change the API base URL, update `src/config/api.js`:

```javascript
export const API_CONFIG = {
  BASE_URL: 'https://your-new-api-domain.com/api',
  // ... rest of config
};
```

## Troubleshooting

### Common Issues

1. **Tracking snippets not loading**: Check network connectivity and API endpoint
2. **Duplicate scripts**: The system should prevent this automatically
3. **Console errors**: Check the browser console for detailed error messages

### Debug Mode

For debugging, you can enable more verbose logging by modifying the tracking service or using the provider component with `showStatus={true}`.
