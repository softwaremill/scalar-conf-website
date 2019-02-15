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
  const bubblesElement = document.getElementById("bubbles");
  const scalarElement = document.getElementById("scalar");
  const scalar2Element = document.getElementById("scalar2");

  let fadingElements = Array.from(document.getElementsByTagName("section")).map(
    element => ({ element })
  );

  let docHeight = getDocHeight();
  let { pageYOffset } = window;

  const scrollBubbles = () => {
    bubblesElement.style.transform = `translateY(${-pageYOffset / 4}px)`;
  };

  const scrollScalar = () => {
    const cycle = (pageYOffset * 0.2) % 1345;
    scalarElement.style.transform = `translate(${-1 * cycle}px, ${-pageYOffset /
      3}px)`;
  };

  const scrollScalar2 = () => {
    const cycle = (pageYOffset * 0.1) % 1345;
    scalar2Element.style.transform = `translate(${-1345 +
      cycle}px, ${-pageYOffset / 2}px)`;
  };

  const handleFading = () => {
    const { innerHeight } = window;
    pageYOffset = window.pageYOffset;

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
    innerHeight = window.innerHeight;
    scrollBubbles();
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

  const activate = () => {
    setFading();
    setFadingBCR();
    setParalax();
    handleScroll();
    setInterval(setFadingBCR, 1500);

    if (
      navigator &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("Firefox") === -1 &&
      navigator.userAgent.indexOf("Android") === -1 &&
      navigator.userAgent.indexOf("IPhone") === -1
    ) {
      window.addEventListener("scroll", handleScroll, false);
      window.addEventListener("resize", setParalax);
    }
    if (
      navigator &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("Android") === -1 &&
      navigator.userAgent.indexOf("IPhone") === -1
    ) {
      window.addEventListener("scroll", handleFading, false);
    }
  };

  activate();
});
