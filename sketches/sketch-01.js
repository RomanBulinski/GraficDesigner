const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [600, 600]
};

const sketch = () => {
  return ({context, width, height}) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    drawEmptySquares(context);
  };
};

canvasSketch(sketch, settings);

function drawEmptySquares(context){
  const gap = 20;
  const startX = 10;
  const startY = 10;
  const w = 60;
  const h = 60;
  let positionY = startY;
  for (let j = 0; j < 5;
       j++
  ) {
    let positionX = startX;
    for (let i = 0; i < 5; i++) {
      drawEmptySquare(positionX , positionY, i + 2, w, h , context);
      if (Math.random() > 0.5) {
        drawEmptySquare(positionX + 10, positionY + 10, i + 2, w - 20, h - 20, context);
      }
      positionX = startX + ((w + gap) * (i + 1));
    }
    positionY = startY + ((h + gap) * (j + 1));
  }
}

function drawEmptySquare(posistionX, posisotionY, lineWidth, width, height,context ){
  context.lineWidth = lineWidth;
  context.beginPath();
  context.rect(posistionX, posisotionY, width, height);
  context.stroke();
}
