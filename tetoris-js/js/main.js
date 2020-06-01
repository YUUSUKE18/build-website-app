document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 10;
  const height = 20;

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

  let currentPosition;
});
