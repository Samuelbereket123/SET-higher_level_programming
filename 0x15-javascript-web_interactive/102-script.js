document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const languageInput = document.querySelector('#language_code');
  const helloElement = document.querySelector('#hello');

  btnTranslate.addEventListener('click', async () => {
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
  });
});
