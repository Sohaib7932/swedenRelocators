import { useEffect, useState } from 'react';
import { initializeTrackingSnippets } from '../utils/trackingService';

/**
 * Custom hook to initialize tracking snippets
 * @returns {Object} Hook state and methods
 */
export const useTrackingSnippets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  const initializeSnippets = async () => {
    if (isInitialized) return;

    setIsLoading(true);
    setError(null);

    try {
      const success = await initializeTrackingSnippets();
      setIsInitialized(success);
      
      if (!success) {
        setError('Failed to initialize tracking snippets');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while initializing tracking snippets');
      console.error('Tracking snippets initialization error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initialize tracking snippets when the hook is first used
    initializeSnippets();
  }, []);

  return {
    isLoading,
    isInitialized,
    error,
    reinitialize: initializeSnippets
  };
};
