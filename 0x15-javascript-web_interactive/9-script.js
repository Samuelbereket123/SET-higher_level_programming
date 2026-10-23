document.addEventListener('DOMContentLoaded', () => {
  async function fetchHello () {
    const helloElement = document.querySelector('#hello');
    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Error loading translation';
    }
  }

  fetchHello();
});
