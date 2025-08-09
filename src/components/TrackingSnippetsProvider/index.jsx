import React from 'react';
import { useTrackingSnippets } from '../../hooks/use-tracking-snippets';

/**
 * Provider component that initializes tracking snippets
 * This component doesn't render anything visible but ensures tracking snippets are loaded
 */
const TrackingSnippetsProvider = ({ children, showStatus = false }) => {
  const { isLoading, isInitialized, error } = useTrackingSnippets();

  // In development mode, optionally show status
  if (process.env.NODE_ENV === 'development' && showStatus) {
    if (isLoading) {
      console.log('Loading tracking snippets...');
    }
    if (error) {
      console.error('Tracking snippets error:', error);
    }
    if (isInitialized) {
      console.log('Tracking snippets loaded successfully');
    }
  }

  // This component doesn't render anything visible
  // The tracking snippets are injected directly into the DOM
  return children || null;
};

export default TrackingSnippetsProvider;
