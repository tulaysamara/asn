function getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        resolve(randomNumber);
      }, 500);
    });
  }
  
  async function asyncFunction() {
    try {
      const randomNumber = await getRandomNumber();
      console.log("Random number:", randomNumber);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  asyncFunction();
  