// Simple test script for the AI chat endpoint
// Run this with: node test-ai-chat.js

const testAIChat = async () => {
  const testMessage = "What should I include in a non-compete clause?";
  
  try {
    console.log('Testing AI Chat endpoint...');
    console.log(`Sending message: "${testMessage}"`);
    
    const response = await fetch('http://localhost:8080/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: testMessage }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✅ AI Chat test successful!');
      console.log('Response:', data.data.response);
      console.log('Timestamp:', data.data.timestamp);
    } else {
      console.log('❌ AI Chat test failed:', data.message);
    }
  } catch (error) {
    console.log('❌ AI Chat test error:', error.message);
    console.log('Make sure the server is running on port 8080');
  }
};

// Test contract-related question
const testContractQuestion = async () => {
  const testMessage = "How do I negotiate better terms in a service agreement?";
  
  try {
    console.log('\nTesting contract-related question...');
    console.log(`Sending message: "${testMessage}"`);
    
    const response = await fetch('http://localhost:8080/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: testMessage }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Contract question test successful!');
      console.log('Response:', data.data.response);
    } else {
      console.log('❌ Contract question test failed:', data.message);
    }
  } catch (error) {
    console.log('❌ Contract question test error:', error.message);
  }
};

// Test non-contract question (should redirect)
const testNonContractQuestion = async () => {
  const testMessage = "What's the weather like today?";
  
  try {
    console.log('\nTesting non-contract question (should redirect)...');
    console.log(`Sending message: "${testMessage}"`);
    
    const response = await fetch('http://localhost:8080/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: testMessage }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Non-contract question test successful!');
      console.log('Response:', data.data.response);
      console.log('Note: The AI should redirect non-contract questions');
    } else {
      console.log('❌ Non-contract question test failed:', data.message);
    }
  } catch (error) {
    console.log('❌ Non-contract question test error:', error.message);
  }
};

// Run all tests
const runTests = async () => {
  console.log('🚀 Starting AI Chat endpoint tests...\n');
  
  await testAIChat();
  await testContractQuestion();
  await testNonContractQuestion();
  
  console.log('\n✨ All tests completed!');
};

runTests(); 