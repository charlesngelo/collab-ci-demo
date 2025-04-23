// Mock clipboard API
Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn().mockImplementation(() => Promise.resolve()),
    },
  });
  
  test('copies quote text to clipboard', async () => {
    // Mock quote data
    document.getElementById('quote').textContent = 'Test quote';
    document.getElementById('author').textContent = 'Test Author';
  
    require('../script.js');
    
    document.getElementById('copy-btn').click();
    
    expect(navigator.clipboard.writeText)
      .toHaveBeenCalledWith('"Test quote" — Test Author');
  });
  