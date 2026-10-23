async function fetchCharacter () {
  const characterElement = document.querySelector('#character');
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    characterElement.textContent = data.name;
  } catch (error) {
    characterElement.textContent = 'Error loading character';
  }
}

fetchCharacter();
