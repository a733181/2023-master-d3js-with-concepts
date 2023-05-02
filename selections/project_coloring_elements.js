const buttonsEl = document.querySelector('.buttons');

const buttonValueList = ['select', 'selectAll', 'filter-odd', 'filter-event'];

buttonsEl.addEventListener('click', function (event) {
  const value = event.target.dataset.value;

  if (value === undefined) {
    return;
  } else {
    selectElements(value);
  }
});

function randomRgbColor() {
  return [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
}

function selectElements(buttonValue) {
  document.querySelector(
    '.output'
  ).firstElementChild.innerText = `Pressed Button:${buttonValue}`;

  const [red, green, blue] = randomRgbColor();

  const select = {
    circle: null,
    square: null,
    rectangle: null,
  };

  const svgList = ['circle', 'square', 'rectangle'];

  if (buttonValue === buttonValueList[0]) {
    svgList.forEach(function (item) {
      select[item] = d3.select(`.${item}`);
    });
  } else {
    svgList.forEach(function (item) {
      select[item] = d3.selectAll(`.${item}`);
    });
  }

  svgList.forEach(function (item) {
    select[item].filter(function (d, i, n) {
      if (buttonValue === buttonValueList[2]) {
        if (i % 2 === 0) {
          this.style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
        }
      } else if (buttonValue === buttonValueList[3]) {
        if (i % 2 !== 0) {
          this.style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
        }
      } else {
        this.style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
      }
    });
  });
}
