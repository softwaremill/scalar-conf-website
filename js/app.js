const getDocHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

$(() => {
  let tick = 0;

  const bubblesElement = document.getElementById("bubbles");
  const scalarElement = document.getElementById("scalar");
  const bottomElement = document.getElementById("bottom");
  const lightElement = document.getElementById("light");

  let docHeight = getDocHeight();
  let { pageYOffset, innerHeight } = window;

  const scrollBubbles = () => {
    bubblesElement.style.transform = `translateY(${-pageYOffset / 4}px)`;
  };

  const scrollScalar = () => {
    const cycle = (tick / 2) % 1345
    const sinusoid = Math.sin(cycle * Math.PI / 1345 * 2) * 50
    scalarElement.style.transform = `translate(${-1 * cycle}px, ${-pageYOffset / 3 + sinusoid}px)`;
  };

  const scrollLight = () => {
    lightElement.style.transform = `translateY(${-pageYOffset / 20}px)`;
  };

  const scrollBottom = () => {
    bottomElement.style.transform = `translateY(${(docHeight -
      pageYOffset -
      innerHeight) /
      30}px)`;
  };

  const handleScroll = () => {
    pageYOffset = window.pageYOffset;
    innerHeight = window.innerHeight;
    scrollBubbles();
    scrollScalar();
    scrollBottom();
    scrollLight();
  };

  const handleFrame = () => {
    tick++;
    scrollScalar();
  };

  const setBubbles = () => {
    docHeight = getDocHeight();
    bubblesElement.style.height = `${docHeight}px`;
    scalarElement.style.height = `${docHeight}px`;
    handleScroll();
  };

  setBubbles();
  setInterval(handleFrame, 1000 / 40);
  window.addEventListener("scroll", handleScroll, false);
  window.addEventListener("resize", setBubbles);
});
