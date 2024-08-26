const texts = document.querySelectorAll('p[data-number]');

texts.forEach((text, index) => {
  let bgColor;

  switch (index) {
    case 0:
      bgColor = '#db403b';
      break;
    case 1:
      bgColor = '#fe4c64';
      break;
    case 2:
      bgColor = '#eb65a0';
      break;
    case 3:
      bgColor = '#7b70f2';
      break;
    case 4:
      bgColor = '#fa6900';
      break;
    case 5:
      bgColor = ' #28abe3';
      break;
    case 6:
      bgColor = '#5bb02f';
      break;
    case 7:
      bgColor = '#1bc088';
      break;
  }

  text.style.setProperty('--bg-color', bgColor);
});
