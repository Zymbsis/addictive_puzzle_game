const faqAnswerButtons = document.querySelectorAll('.button-triangle');

faqAnswerButtons.forEach(button =>
  button.addEventListener('click', showAnswerHandler)
);

function showAnswerHandler(e) {
  const currentButton = e.target;
  const currentAnswer = e.target.parentElement.lastElementChild;
  const isAnswerShown = currentButton.classList.contains('rotate');

  faqAnswerButtons.forEach(button => {
    if (button !== currentButton) {
      button.classList.remove('rotate');
      button.parentElement.lastElementChild.classList.remove(
        'faq-answer',
        'show-answer'
      );
    }
  });

  currentButton.classList.toggle('rotate', !isAnswerShown);
  currentAnswer.classList.toggle('show-answer', !isAnswerShown);
  const timer = setTimeout(() => {
    currentAnswer.classList.toggle('faq-answer', !isAnswerShown);
    clearTimeout(timer);
  }, 0);
}
