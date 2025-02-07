const responses = [
  {message: "", image: "images/bear-01.gif"},
  {message: "¿Segura de la respuesta? :(", image: "images/bear-02.gif"},
  {message: "Venga piensalo de nuevo...", image: "images/bear-03.gif"},
  {message: "Si sabes que quieres :)", image: "images/bear-04.gif"},
  {message: "No te voy a decepcionar", image: "images/bear-05.gif"},
];
const positiveResponse = {message: "SIIII!!! Lo sabía :)", image: "images/bear-yes.gif"};
const bearImage = document.querySelector('.cat');
const messageText = document.querySelector('.text');
const actionButtons = document.querySelectorAll('.button');
const retryButton = document.querySelector('.button__error');

let attemptCount = 0;

function displayResponse(response) {
  bearImage.src = response.image;
  messageText.innerHTML = response.message;
}

retryButton.addEventListener('click', () => {
  attemptCount = 0;
  displayResponse(responses[attemptCount]);
  actionButtons.forEach(btn => btn.style.display = 'inline-block');
  retryButton.style.display = 'none';
});

actionButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === "Si") {
      displayResponse(positiveResponse);
      actionButtons.forEach(btn => btn.style.display = 'none');
    } else if (button.textContent === 'No') {
      attemptCount++;
      if (attemptCount < responses.length) {
        displayResponse(responses[attemptCount]);
      } else {
        actionButtons.forEach(btn => btn.style.display = 'none');
        retryButton.style.display = 'inline-block';
      }
    }
  });
});