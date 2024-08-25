import { onNavigationLinkClick } from './navigation';

const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuNavList = document.querySelector('.burger-menu-nav-list');

openMenuButton.addEventListener('click', handleBurgerMenuOpen);

function handleBurgerMenuOpen() {
  burgerMenu.classList.add('visible');
  openMenuButton.classList.add('hidden');
  closeMenuButton.classList.add('visible');
  burgerMenuNavList.addEventListener('click', onNavigationLinkClick);
  closeMenuButton.addEventListener('click', handleBurgerMenuClose);
  document.addEventListener('keydown', handleBurgerMenuClose);
  document.addEventListener('click', handleBurgerMenuClose);
  window.addEventListener('resize', handleBurgerMenuClose);
}

function handleBurgerMenuClose(e) {
  if (e.code && e.code !== 'Escape') return;
  if (e.target === openMenuButton || e.target === burgerMenu) return;
  burgerMenu.classList.remove('visible');
  openMenuButton.classList.remove('hidden');
  closeMenuButton.classList.remove('visible');
  burgerMenuNavList.removeEventListener('click', onNavigationLinkClick);
  document.removeEventListener('keydown', handleBurgerMenuClose);
  document.removeEventListener('click', handleBurgerMenuClose);
  window.removeEventListener('resize', handleBurgerMenuClose);
  closeMenuButton.removeEventListener('click', handleBurgerMenuClose);
}
