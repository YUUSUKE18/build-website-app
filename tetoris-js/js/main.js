document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 10;
  const height = 20;
  let currentPosition = 4;

  let squares = Array.from(grid);

  function control(e) {
    if (e.KeyCode === 39) {
      moveRight();
    } else if (e.KeyCode === 38) {
      rotate();
    } else if (e.KeyCode === 37) {
      moveLeft();
    } else if (e.KeyCode === 40) {
      moveLeft();
    }
  }

  document.addEventListener("keyup", control);

  const ltetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2],
  ];

  const ztetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2],
  ];

  const ttetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2],
  ];

  const otetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2],
  ];

  const itetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2],
  ];

  const alltetoris = [ltetoris, ztetoris, ttetoris, otetoris, itetoris];

  let random = Math.floor(Math.random() * alltetoris.length);
  let currentRotation = 0;
  let current = alltetoris[random][currentRotation];

  //draw shape
  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add("block");
    });
  }

  //undraw shape
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("block");
    });
  }

  //move and down
  function moveDown() {
    undraw();
    currentPosition = currentPosition += width;
    draw();
    freeze();
  }

  function moveRight() {
    undraw();
    const isRightEdge = current.some((index) => {
      (currentPosition + index) % width === width - 1;
    });
    if (!isRightEdge) currentPosition += 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("block2")
      )
    ) {
      currentPosition -= 1;
    }
    draw();
  }

  function moveLeft() {
    undraw();
    const isLeftEdge = current.some((index) => {
      (currentPosition + index) % width === 0;
    });
    if (!isLeftEdge) currentPosition -= 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("block2")
      )
    ) {
      currentPosition += 1;
    }
    draw();
  }

  function rotate() {
    undraw();
    currentRotation++;
    if (currentRotation === current.length) {
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation];
    draw();
  }

  draw();
});
