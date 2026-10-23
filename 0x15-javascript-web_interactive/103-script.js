document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const languageInput = document.querySelector('#language_code');
  const helloElement = document.querySelector('#hello');

  async function translate () {
    const lang = languageInput.value;
    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=' + lang);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Error loading translation';
    }
  }

  btnTranslate.addEventListener('click', translate);

  languageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      translate();
    }
  });
});
