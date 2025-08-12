// API Test Script for Sweden Relocators
// Run this in your browser console or as a Node.js script

// Test function using fetch API
async function testAPI() {
  console.log('🚀 Testing Sweden Relocators API...');
  console.log('='.repeat(50));
  
  const apiUrl = 'https://api.swedenrelocators.se/api/miscellaneous/tracking/snippets';
  
  try {
    console.log('📡 Sending request to:', apiUrl);
    
    const startTime = Date.now();
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log('✅ Response received!');
    console.log('📊 Status:', response.status, response.statusText);
    console.log('⏱️  Response time:', duration + 'ms');
    console.log('🔗 URL:', response.url);
    console.log('📝 Headers:');
    
    // Log response headers
    for (let [key, value] of response.headers.entries()) {
      console.log(`   ${key}: ${value}`);
    }
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API is working successfully!');
      console.log('📦 Response data:', data);
      
      // Check if the expected data structure is present
      if (data.data && typeof data.data === 'object') {
        console.log('✅ Data structure is valid');
        console.log('📊 Data keys:', Object.keys(data.data));
        
        // Check for specific tracking snippet fields
        const snippetFields = ['head_html', 'body_start_html', 'body_end_html', 'updated_at'];
        snippetFields.forEach(field => {
          if (data.data.hasOwnProperty(field)) {
            console.log(`✅ ${field}: ${data.data[field] ? 'Present' : 'Empty'}`);
          } else {
            console.log(`❌ ${field}: Missing`);
          }
        });
      } else {
        console.log('⚠️  Unexpected data structure');
      }
    } else {
      console.log('❌ API request failed');
      console.log('🔍 Error details:', await response.text());
    }
    
  } catch (error) {
    console.log('❌ API test failed with error:');
    console.error(error);
    
    // Additional error information
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      console.log('🔍 This might be a network connectivity issue or CORS problem');
    }
  }
  
  console.log('='.repeat(50));
  console.log('🏁 API test completed');
}

// Test function using axios (if axios is available)
async function testAPIWithAxios() {
  if (typeof axios === 'undefined') {
    console.log('❌ Axios not available, skipping axios test');
    return;
  }
  
  console.log('🚀 Testing API with Axios...');
  
  try {
    const response = await axios.get('https://api.swedenrelocators.se/api/miscellaneous/tracking/snippets');
    
    console.log('✅ Axios test successful!');
    console.log('📊 Status:', response.status);
    console.log('📦 Data:', response.data);
    
  } catch (error) {
    console.log('❌ Axios test failed:');
    console.error(error.response ? error.response.data : error.message);
  }
}

// Run tests
testAPI();

// If you want to test with axios as well (uncomment the line below)
// testAPIWithAxios();

// Export for use in React components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testAPI, testAPIWithAxios };
}
