const counters = document.querySelectorAll(".items .counter");

counters.forEach((counter) => {
  let count = +counter.dataset.counter;
  let starter = +counter.textContent;
  let step = Math.ceil(count / 600);

  const updateCounter = () => {
    if (starter < count) {
      starter += step;
      counter.textContent = starter;
    }
  };

  setInterval(updateCounter, 1);
});
