// As variáveis utilizadas com frequência para não precisar declarar em várias funções
const pixelBoard = document.getElementById('pixel-board');
const boxes = document.getElementsByClassName('color');

// Remove todos os pixels do tabuleiro
function boardRemove() {
  pixelBoard.innerHTML = '';
}

// Determina as cores da paleta, exceto a primeira
function palleteBoxes() {
  for (let index = 1; index < boxes.length; index += 1) {
    const randNumb1 = Math.ceil(Math.random() * 255);
    const randNumb2 = Math.ceil(Math.random() * 255);
    const randNumb3 = Math.ceil(Math.random() * 255);
    boxes[index].style.backgroundColor = `rgb(${randNumb1},${randNumb2},${randNumb3})`;
  }
}
palleteBoxes();

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
window.onload = () => {
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
colorSelection();

// Pinta a box selecionada com a cor que corresponde a box da paleta que tiver selecionada
function printingPixels(printBox) {
  const pixelSelected = printBox;
  const boxColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  switch (document.querySelector('.selected').id) {
  case 'box0':
    pixelSelected.style.backgroundColor = 'black';
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
selectPixel();

// Cria o botão limpar e insere na div
function createButton() {
  const clearButton = document.createElement('input');
  clearButton.style.marginBottom = '10px';
  clearButton.style.marginRight = '20px'
  clearButton.id = 'clear-board';
  clearButton.value = 'Limpar';
  clearButton.className = 'format-btn'
  clearButton.innerHTML = 'Limpar';
  clearButton.type = 'button';
  const buttonDiv = document.getElementById('buttons');
  buttonDiv.appendChild(clearButton);
}
createButton();

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
clearBoard();

// Cria um botão e um campo de input
function createButtonResize() {
  const boardSize = document.createElement('input');
  boardSize.id = 'board-size';
  boardSize.type = 'number';
  boardSize.min = '1';
  boardSize.placeholder = 'Tabuleiro de quantos pixels?';
  document.getElementById('buttons').appendChild(boardSize);
  const generateBoard = document.createElement('input');
  generateBoard.id = 'generate-board';
  generateBoard.type = 'button';
  generateBoard.value = 'VQV';
  generateBoard.className = 'format-btn';
  generateBoard.innerHTML = 'VQV';
  document.getElementById('buttons').appendChild(generateBoard);
}
createButtonResize();

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
  } else if (validSize > 50) {
    validSize = 50;
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
BoardSize();

// Adiciona um botão na página
function createButtonRandomColors() {
  const buttonChangeColor = document.createElement('input');
  const breakLine = document.createElement('br');
  buttonChangeColor.value = 'Cores Aleatórias';
  buttonChangeColor.type = 'button';
  buttonChangeColor.className = 'format-btn';
  buttonChangeColor.id = 'btn-change-colors';
  buttonChangeColor.style.marginLeft = '10px';
  const buttonArea = document.getElementById('buttons');
  buttonArea.appendChild(breakLine);
  buttonArea.appendChild(buttonChangeColor);
}
createButtonRandomColors();

function randomizer() {
  const buttonChangeColor = document.getElementById('btn-change-colors');
  buttonChangeColor.addEventListener('click', () => {
    palleteBoxes();
  });
}
randomizer();
