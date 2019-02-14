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
  const bottomElement = document.getElementById("bottom");
  let docHeight = getDocHeight();
  let { pageYOffset, innerHeight } = window;

  const scrollBubbles = () => {
    bubblesElement.style.transform = `translateY(${-pageYOffset / 3}px`;
  };

  const scrollBottom = () => {
    bottomElement.style.transform = `translateY(${(docHeight - pageYOffset - innerHeight) / 30}px`;
  };

  const handleScroll = () => {
    pageYOffset = window.pageYOffset;
    innerHeight = window.innerHeight;
    scrollBubbles()
    scrollBottom()
  }

  const setBubbles = () => {
    docHeight = getDocHeight();
    bubblesElement.style.height = `${docHeight / 3}px`;
    handleScroll();
  };

  setBubbles();
  window.addEventListener("scroll", handleScroll, false);
  window.addEventListener("resize", setBubbles);
});
