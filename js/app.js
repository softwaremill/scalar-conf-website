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

  const scrollBubbles = () => {
    const { pageYOffset } = window;
    bubblesElement.style.transform = `translateY(${-pageYOffset / 3}px`;
  };

  const setBubbles = () => {
    bubblesElement.style.height = `${getDocHeight() / 3}px`;
    scrollBubbles();
  };

  setBubbles();
  window.addEventListener("scroll", scrollBubbles, false);
});
