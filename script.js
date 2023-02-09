const paleta1 = document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
const paleta2 = document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
const paleta3 = document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
const paleta4 = document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';

// function geraCores () {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `'rgb(${r}, ${g}, ${b})'`;
// }

const randomColors = () => {
  const paleta = document.getElementsByClassName('color');
  const botao = document.getElementById("button-random-color");
  botao.addEventListener('click', () => {
    for (let index = 1; index < paleta.length; index += 1) {
      const random = Math.floor(Math.random() * 16777215).toString(16); // Realizado com ajuda da monitora Natália.
      paleta[index].style.backgroundColor = `#${random}`
    }
  })
}
randomColors();
