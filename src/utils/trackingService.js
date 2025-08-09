import axios from 'axios';
import { getTrackingSnippetsUrl } from '../config/api';

/**
 * Fetches tracking snippets from the API
 * @returns {Promise<Object|null>} Tracking snippets data or null if failed
 */
export const fetchTrackingSnippets = async () => {
  try {
    const response = await axios.get(getTrackingSnippetsUrl());
    
    if (response.data && response.data.data) {
      return response.data.data;
    }
    
    console.warn('Tracking snippets: Invalid response format');
    return null;
  } catch (error) {
    console.error('Failed to fetch tracking snippets:', error);
    return null;
  }
};

/**
 * Injects HTML content into the document head
 * @param {string} htmlContent - HTML content to inject
 */
export const injectHeadContent = (htmlContent) => {
  if (!htmlContent || typeof htmlContent !== 'string') return;
  
  try {
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Append each child element to the head
    Array.from(tempDiv.children).forEach(element => {
      // Check if similar element already exists to avoid duplicates
      const existingElement = document.head.querySelector(
        element.tagName.toLowerCase() + 
        (element.id ? `#${element.id}` : '') +
        (element.className ? `.${element.className.split(' ').join('.')}` : '')
      );
      
      if (!existingElement) {
        document.head.appendChild(element.cloneNode(true));
      }
    });
    
    // Handle script tags and other elements that might not be direct children
    if (htmlContent.includes('<script')) {
      const scriptMatches = htmlContent.match(/<script[^>]*>[\s\S]*?<\/script>/gi);
      if (scriptMatches) {
        scriptMatches.forEach(scriptHtml => {
          const tempScriptDiv = document.createElement('div');
          tempScriptDiv.innerHTML = scriptHtml;
          const scriptElement = tempScriptDiv.querySelector('script');
          if (scriptElement && !document.head.querySelector(`script[src="${scriptElement.src}"]`)) {
            const newScript = document.createElement('script');
            Array.from(scriptElement.attributes).forEach(attr => {
              newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = scriptElement.textContent;
            document.head.appendChild(newScript);
          }
        });
      }
    }
    
    // Handle inline scripts and other content
    if (htmlContent.includes('<meta') || htmlContent.includes('<noscript')) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<html><head>${htmlContent}</head></html>`, 'text/html');
      const headElements = doc.head.children;
      
      Array.from(headElements).forEach(element => {
        if (element.tagName.toLowerCase() === 'meta') {
          const name = element.getAttribute('name');
          const property = element.getAttribute('property');
          const content = element.getAttribute('content');
          
          // Check for existing meta tags
          let existingMeta = null;
          if (name) {
            existingMeta = document.head.querySelector(`meta[name="${name}"]`);
          } else if (property) {
            existingMeta = document.head.querySelector(`meta[property="${property}"]`);
          }
          
          if (!existingMeta) {
            document.head.appendChild(element.cloneNode(true));
          }
        } else if (element.tagName.toLowerCase() === 'noscript') {
          // Add noscript elements
          const existingNoscript = document.head.querySelector('noscript');
          if (!existingNoscript || existingNoscript.innerHTML !== element.innerHTML) {
            document.head.appendChild(element.cloneNode(true));
          }
        }
      });
    }
  } catch (error) {
    console.error('Failed to inject head content:', error);
  }
};

/**
 * Injects HTML content at the end of the document body
 * @param {string} htmlContent - HTML content to inject
 */
export const injectBodyEndContent = (htmlContent) => {
  if (!htmlContent || typeof htmlContent !== 'string') return;
  
  try {
    // Create a container div for the content
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    container.style.display = 'contents'; // Make container transparent
    
    // Add a unique identifier to avoid duplicates
    container.setAttribute('data-tracking-snippets', 'body-end');
    
    // Check if similar content already exists
    const existing = document.body.querySelector('[data-tracking-snippets="body-end"]');
    if (existing) {
      existing.remove();
    }
    
    // Append to the end of body
    document.body.appendChild(container);
  } catch (error) {
    console.error('Failed to inject body end content:', error);
  }
};

/**
 * Injects HTML content at the start of the document body
 * @param {string} htmlContent - HTML content to inject
 */
export const injectBodyStartContent = (htmlContent) => {
  if (!htmlContent || typeof htmlContent !== 'string') return;
  
  try {
    // Create a container div for the content
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    container.style.display = 'contents'; // Make container transparent
    
    // Add a unique identifier to avoid duplicates
    container.setAttribute('data-tracking-snippets', 'body-start');
    
    // Check if similar content already exists
    const existing = document.body.querySelector('[data-tracking-snippets="body-start"]');
    if (existing) {
      existing.remove();
    }
    
    // Insert at the beginning of body
    document.body.insertBefore(container, document.body.firstChild);
  } catch (error) {
    console.error('Failed to inject body start content:', error);
  }
};

/**
 * Main function to fetch and inject all tracking snippets
 * @returns {Promise<boolean>} Success status
 */
export const initializeTrackingSnippets = async () => {
  try {
    const snippets = await fetchTrackingSnippets();
    
    if (!snippets) {
      console.log('No tracking snippets to inject');
      return false;
    }
    
    // Inject head content
    if (snippets.head_html) {
      injectHeadContent(snippets.head_html);
      console.log('Head tracking snippets injected successfully');
    }
    
    // Inject body start content
    if (snippets.body_start_html) {
      injectBodyStartContent(snippets.body_start_html);
      console.log('Body start tracking snippets injected successfully');
    }
    
    // Inject body end content
    if (snippets.body_end_html) {
      injectBodyEndContent(snippets.body_end_html);
      console.log('Body end tracking snippets injected successfully');
    }
    
    return true;
  } catch (error) {
    console.error('Failed to initialize tracking snippets:', error);
    return false;
  }
};
