export default async function fetchData() {
    const data = {
      token: "987654321:Vg41g0qY",
      request: "test request",
      limit: 100,
      lang: "ru"
    };
  
    const url = 'https://server.leakosint.com/';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }