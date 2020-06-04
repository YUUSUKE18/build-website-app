document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartBtn = document.querySelector("#button");
  const width = 10;

  const lTetoris = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2 + 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetoris = [
    [0, width, width + 1, width + 2],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetoris = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetoris = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetoris = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 2],
  ];

  const alltetoris = [lTetoris, zTetoris, tTetoris, oTetoris, iTetoris];

  let currentPosition = 4;
  let currentRotation = 0;
  let random = Math.floor(Math.random() * alltetoris.length);
  let current = alltetoris[random][currentRotation];

  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add("tetoris");
    });
  }

  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("tetoris");
    });
  }

  timerId = setInterval(moveDown, 1000);

  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  function freeze() {
    if (
      current.some((index) =>
        squares[currentPosition + index + width].classList.contains("take")
      )
    ) {
      current.forEach((index) =>
        squares[currentPosition + index].classList.add("take")
      );
      random = Math.floor(Math.random() * alltetoris.length);
      current = alltetoris[random][currentRotation];
      currentPosition = 4;
      draw();
    }
  }
  //   const height = 20;
  //

  //   let squares = Array.from(grid);

  //   function control(e) {
  //     if (e.KeyCode === 39) {
  //       moveRight();
  //     } else if (e.KeyCode === 38) {
  //       rotate();
  //     } else if (e.KeyCode === 37) {
  //       moveLeft();
  //     } else if (e.KeyCode === 40) {
  //       moveLeft();
  //     }
  //   }

  //   document.addEventListener("keyup", control);

  //

  //
  //

  //   let random = Math.floor(Math.random() * alltetoris.length);
  //   let currentRotation = 0;
  //   let current = alltetoris[random][currentRotation];

  //   //draw shape
  //   function draw() {
  //     current.forEach((index) => {
  //       squares[currentPosition + index].classList.add("block");
  //     });
  //   }

  //   //undraw shape
  //   function undraw() {
  //     current.forEach((index) => {
  //       squares[currentPosition + index].classList.remove("block");
  //     });
  //   }

  //   //move and down
  //   function moveDown() {
  //     undraw();
  //     currentPosition = currentPosition += width;
  //     draw();
  //     freeze();
  //   }

  //   function moveRight() {
  //     undraw();
  //     const isRightEdge = current.some((index) => {
  //       (currentPosition + index) % width === width - 1;
  //     });
  //     if (!isRightEdge) currentPosition += 1;
  //     if (
  //       current.some((index) =>
  //         squares[currentPosition + index].classList.contains("block2")
  //       )
  //     ) {
  //       currentPosition -= 1;
  //     }
  //     draw();
  //   }

  //   function moveLeft() {
  //     undraw();
  //     const isLeftEdge = current.some((index) => {
  //       (currentPosition + index) % width === 0;
  //     });
  //     if (!isLeftEdge) currentPosition -= 1;
  //     if (
  //       current.some((index) =>
  //         squares[currentPosition + index].classList.contains("block2")
  //       )
  //     ) {
  //       currentPosition += 1;
  //     }
  //     draw();
  //   }

  //   function rotate() {
  //     undraw();
  //     currentRotation++;
  //     if (currentRotation === current.length) {
  //       currentRotation = 0;
  //     }
  //     current = theTetrominoes[random][currentRotation];
  //     draw();
  //   }

  //   draw();
});
