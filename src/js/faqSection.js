const faqAnswerButtons = document.querySelectorAll('.button-triangle');

faqAnswerButtons.forEach(button =>
  button.addEventListener('click', showAnswerHandler)
);

function showAnswerHandler(e) {
  const currentButton = e.target;
  const currentAnswer = currentButton.parentElement.lastElementChild;
  const currentQuestionContainer = currentButton.parentElement;
  const isAnswerShown = currentButton.classList.contains('rotate');

  faqAnswerButtons.forEach(button => {
    if (button !== currentButton) {
      button.classList.remove('rotate');
      button.parentElement.lastElementChild.classList.remove(
        'faq-answer',
        'show-answer'
      );
      button.parentElement.classList.remove('faq-answer');
    }
  });

  currentQuestionContainer.classList.toggle('faq-answer', !isAnswerShown);
  currentButton.classList.toggle('rotate', !isAnswerShown);
  currentAnswer.classList.toggle('show-answer', !isAnswerShown);
}
