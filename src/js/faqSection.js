const faqElements = document.querySelectorAll('.faq-item');
faqElements.forEach(element =>
  element.addEventListener('click', showAnswerHandler)
);

function showAnswerHandler(e) {
  const currentElement = e.currentTarget;
  const visibleElement = [...faqElements].find(element =>
    element.classList.contains('show-answer')
  );

  if (!visibleElement) {
    currentElement.classList.add('show-answer');
  } else if (visibleElement === currentElement) {
    visibleElement.classList.remove('show-answer');
  } else {
    currentElement.classList.add('show-answer');
    visibleElement.classList.remove('show-answer');
  }
}
