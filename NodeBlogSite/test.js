global.setTimeout(() => {
  console.log("OMG");
  clearInterval(int);
}, 2000);

const int = setInterval(() => {
  console.log("Interval");
}, 1000);
