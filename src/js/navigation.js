const headerNavList = document.querySelector('.header-nav-list');
const header = document.querySelector('.header');

window.addEventListener('load', redirectToSelectedSection);
headerNavList.addEventListener('click', onNavigationLinkClick);

export function onNavigationLinkClick(e) {
  if (e.target === e.currentTarget) return;
  const elementId =
    e.target.nodeName === 'A'
      ? e.target.getAttribute('href')
      : e.target.firstElementChild.getAttribute('href');
  if (
    location.href.includes('privacy_policy') ||
    location.href.includes('term_of_use')
  ) {
    localStorage.setItem('elementId', elementId);
    location.href = '/';
    return;
  }
  e.preventDefault();
  scrollToElement(elementId);
}

function scrollToElement(elemId) {
  const element = document.querySelector(elemId);
  const currentElementPosition = element.getBoundingClientRect().top;
  const headerHeight = header.offsetHeight / 2;
  const positionToScroll =
    currentElementPosition + window.scrollY - headerHeight;
  window.scrollTo({
    top: positionToScroll,
    behavior: 'smooth',
  });
  if (localStorage.getItem('elementId')) {
    localStorage.setItem('elementId', '');
  }
}

function redirectToSelectedSection() {
  if (!localStorage.getItem('elementId')) return;
  const elementId = localStorage.getItem('elementId');
  scrollToElement(elementId);
}
