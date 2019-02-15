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
  const scalar2Element = document.getElementById("scalar2");

  let fadingElements = Array.from(document.getElementsByTagName("section")).map(
    element => ({ element })
  );

  let docHeight = getDocHeight();
  let { pageYOffset, innerHeight } = window;

  const scrollBubbles = () => {
    bubblesElement.style.transform = `translateY(${-pageYOffset / 4}px)`;
  };

  const scrollScalar = () => {
    const cycle = (tick * 0.1) % 1345;
    const sinusoid = Math.sin(((cycle * Math.PI) / 1345) * 2) * 50;
    scalarElement.style.transform = `translate(${-1 * cycle}px, ${-pageYOffset /
      3}px)`;
  };

  const scrollScalar2 = () => {
    const cycle = (tick * 0.05) % 1345;
    const sinusoid = Math.sin(((cycle * Math.PI) / 1345) * 2) * 50;
    scalar2Element.style.transform = `translate(${-1345 +
      cycle}px, ${-pageYOffset / 2}px)`;
  };

  const handleFading = () => {
    const { innerHeight } = window;

    fadingElements.forEach(({ element, bcr }) => {
      if (!bcr) {
        element.classList.remove("faded-down", "faded-up");
        return;
      }

      const { y, height } = bcr;

      if (y - pageYOffset > innerHeight) {
        element.classList.add("faded-down");
      } else if (y - pageYOffset < innerHeight * 0.75) {
        element.classList.remove("faded-down");
      }

      if (y - pageYOffset + height < 0) {
        element.classList.add("faded-up");
      } else if (y - pageYOffset + height > innerHeight * 0.25) {
        element.classList.remove("faded-up");
      }
    });
  };

  const handleScroll = () => {
    pageYOffset = window.pageYOffset;
    tick = pageYOffset;
    innerHeight = window.innerHeight;
    scrollBubbles();
    scrollScalar();
    scrollScalar2();
    handleFading();
  };

  const handleFrame = () => {
    tick++;
    scrollScalar();
    scrollScalar2();
  };

  const setParalax = () => {
    docHeight = getDocHeight();
    bubblesElement.style.height = `${docHeight}px`;
    scalarElement.style.height = `${docHeight}px`;
    scalar2Element.style.height = `${docHeight}px`;
    handleScroll();
  };

  const setFading = () => {
    fadingElements.forEach(({ element }) => {
      element.classList.add("fading");
    });
  };

  const setFadingBCR = () => {
    pageYOffset = window.pageYOffset;
    fadingElements = fadingElements.map(({ element }) => {
      const bcr = element.getBoundingClientRect();
      bcr.y = bcr.y + pageYOffset;

      return {
        element,
        bcr
      };
    });
  };

  setFading();
  setFadingBCR();
  setParalax();
  // setInterval(handleFrame, 1000 / 40);
  // setInterval(handleFading, 100);
  setInterval(setFadingBCR, 1500);
  window.addEventListener("scroll", handleScroll, false);
  window.addEventListener("resize", setParalax);
});
