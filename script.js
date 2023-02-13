document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';

// function geraCores () {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `'rgb(${r}, ${g}, ${b})'`;
// }

const randomColors = () => {
  const paleta = document.getElementsByClassName('color');
  const botao = document.getElementById('button-random-color');
  const cores = [];

  botao.addEventListener('click', () => {
    for (let index = 1; index < paleta.length; index += 1) {
      const random = Math.floor(Math.random() * 16777215).toString(16); // Realizado com ajuda da monitora Natália.
      paleta[index].style.backgroundColor = `#${random}`;
      cores[index] = paleta[index].style.backgroundColor;
      // localStorage.setItem('colorPalette', JSON.stringify(paleta[index].style.backgroundColor));
      // const salvedPalette = localStorage.getItem('colorPalette', JSON.stringify(paleta[index].style.backgroundColor));
      // console.log(salvedPalette);
    }
    localStorage.setItem('colorPalette', JSON.stringify(cores));
  });
};

const fixedColors = () => {
  const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
  if (savedColors) {
    const paleta = document.getElementsByClassName('color');
    for (let index = 1; index < paleta.length; index += 1) {
      paleta[index].style.backgroundColor = savedColors[index];
    }
  }
};
randomColors();
fixedColors();

const quadroPixel = document.getElementById('pixel-board');
for (let index = 0; index < 5; index += 1) {
  const linhaPixel = document.createElement('div');
  linhaPixel.classList.add('linhaPixel');

  for (let i = 0; i < 5; i += 1) {
    const quadro = document.createElement('div');
    quadro.classList.add('pixel');
    // quadro.style.backgroundColor = 'white';

    linhaPixel.appendChild(quadro);
  }
  quadroPixel.appendChild(linhaPixel);
}

// const savedColors = localStorage.getItem('colorPalette');
// document.getElementsByClassName('color').style.backgroundColor = savedColors;

// requisito 8
document.querySelector('.color').classList.add('selected');

// requisito 9
// const colorSelected = document.getElementsByClassName('.color');
// for (let index = 0; index < colorSelected.length; index += 1) {
//   colorSelected[index].addEventListener('click', function () {
//     const corAtual = document.getElementsByClassName('.selected')[index];
//     if (corAtual) {
//       corAtual.classList.remove('selected');
//       // for (let j = 0; j < colorSelected.length; j += 1) {
//       //   colorSelected[j].classList.remove('selected');
//       //   classList.remove('selected');
//     }
//     this.classList.add('selected');
//   });
// };
const colorSelected = document.getElementsByClassName('color');
for (let index = 0; index < colorSelected.length; index += 1) {
  colorSelected[index].addEventListener('click', function () {
    for (let i = 0; i < colorSelected.length; i += 1) {
      colorSelected[i].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

// requisito 10
const quadro = document.getElementsByClassName('pixel');
for (index = 0; index < quadro.length; index += 1) {
  quadro[index].addEventListener('click', function () {
    const selecionadaCor = document.querySelector('.selected').style.backgroundColor;
    this.style.backgroundColor = selecionadaCor;
  });
}
