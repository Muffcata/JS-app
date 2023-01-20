document.addEventListener(
  "mousemove",
  _.throttle((e) => {
    console.log(e);
  }, 250)
);
