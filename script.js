// As variáveis utilizadas com frequência para não precisar declarar em várias funções
const pixelBoard = document.getElementById('pixel-board');
const boxes = document.getElementsByClassName('color');
const breakLine = document.createElement('br');
let buttonArea = document.getElementById('buttons');
let text = document.createElement('p');

// Remove todos os pixels do tabuleiro
function boardRemove() {
  pixelBoard.innerHTML = '';
}

// Cria os elementos do quadro de acordo com o número de pixels
function boardMaker(pixels) {
  boardRemove();
  const pixelXY = pixels;
  const numberOfPixels = pixelXY * pixelXY;
  for (let index = 1; index <= numberOfPixels; index += 1) {
    const pixelElement = document.createElement('div');
    pixelBoard.appendChild(pixelElement).className = 'pixel';
    if (index % pixelXY === 0) {
      const breakLine = document.createElement('br');
      pixelBoard.appendChild(breakLine);
    }
  }
}

// Seleciona a cor preta como primária e também cria um tabuleiro padrão
function InitBoard() {
  const firstSelectedColor = document.getElementById('box0');
  firstSelectedColor.classList = ('color selected');
  boardMaker(5);
};

// Seleciona a box com a div que tiver 'selected' como class
function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', (event) => {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    const elementSelected = event.target;
    elementSelected.classList = 'color selected';
  });
}

// Pinta a box selecionada com a cor que corresponde a box da paleta que tiver selecionada
function printingPixels(printBox) {
  const pixelSelected = printBox;
  const boxColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  switch (document.querySelector('.selected').id) {
  case 'box0':
    pixelSelected.style.backgroundColor = boxColor;
    break;
  case 'box1':
    pixelSelected.style.backgroundColor = boxColor;
    break;
  case 'box2':
    pixelSelected.style.backgroundColor = boxColor;
    break;
  case 'box3':
    pixelSelected.style.backgroundColor = boxColor;
    break;
  default:
  }
}

// Seleciona o pixel clicando nele, não faz nada se clicar na seção
function selectPixel() {
  pixelBoard.addEventListener('click', (event) => {
    const boxTarget = event.target;
    if (boxTarget.id !== 'pixel-board') {
      printingPixels(boxTarget);
    }
  });
}

// Ao clicar no botão, limpa a tela
function clearBoard() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

// Inspeciona se o valor inserido é válido
function inspectBoardSize(boardSize) {
  let validSize = boardSize;
  if (!validSize) {
    return alert('Board inválido!');
  }
  if (validSize < 0) {
    return alert('O número inserido deve ser maior que 0');
  }
  if (validSize < 5) {
    validSize = 5;
  } else if (validSize > 30) {
    validSize = 30;
  }
  boardMaker(validSize);
}

// Cria um quadro utilizando o tamanho inserido no input, se não inserir valor, apresentar uma mensagem de erro
function BoardSize() {
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    const boardSize = document.getElementById('board-size').value;
    inspectBoardSize(boardSize);
  });
} 

// Ao clicar no botão roda muda as cores da paleta
function randomizer() {
  const buttonChangeColor = document.getElementById('btn-change-colors');
  buttonChangeColor.addEventListener('click', () => {
    palleteBoxes();
  });
}

// Determina as cores da paleta, exceto a primeira
function palleteBoxes() {
  for (let index = 0; index < boxes.length; index += 1) {
    const randNumb1 = Math.ceil(Math.random() * 255);
    const randNumb2 = Math.ceil(Math.random() * 255);
    const randNumb3 = Math.ceil(Math.random() * 255);
    boxes[index].style.backgroundColor = `rgb(${randNumb1},${randNumb2},${randNumb3})`;
  }
}

function Onload() {
  InitBoard();
  colorSelection();
  selectPixel();
  BoardSize();
  randomizer();
  palleteBoxes();
  clearBoard();
}

onload = Onload