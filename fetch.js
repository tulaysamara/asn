async function getCityData(city) {
    try {
      const response = await fetch(`https://geocode.xyz/${city}?json=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch city data');
      }
      const data = await response.json();
      const latitude = data.latt;
      const longitude = data.longt;
      console.log(`City: ${city}`);
      console.log(`Latitude: ${latitude}`);
      console.log(`Longitude: ${longitude}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Invoke the function with city names
  getCityData('seattle');
  getCityData('london');
  getCityData('tokyo');
  