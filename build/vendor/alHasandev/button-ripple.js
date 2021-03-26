const ripples = document.querySelectorAll("[ripple]");

function addRipple(e) {
  const rippleContainer = this.querySelector(".ripple--container");

  const size = rippleContainer.offsetWidth;
  const pos = rippleContainer.getBoundingClientRect();
  const rippler = document.createElement("span");
  const x = e.pageX - pos.left - size / 2;
  const y = e.pageY - pos.top - size / 2;
  let style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;

  // adding optional option for ripple
  if (this.getAttribute("ripple-color")) {
    style += `background-color: ${this.getAttribute("ripple-color")}`;
  }

  if (this.getAttribute("ripple-radius")) {
    style += `border-radius: ${this.getAttribute("ripple-radius")}`;
  }

  rippleContainer.appendChild(rippler);
  rippler.setAttribute("style", style);

  console.log(rippleContainer);
}

function cleanUp(e) {
  const rippleContainer = this.querySelector(".ripple--container");
  while (rippleContainer.firstChild) {
    rippleContainer.removeChild(rippleContainer.firstChild);
    console.log("remove first child");
  }
}

ripples.forEach((ripple) => {
  const rippleContainer = document.createElement("div");
  rippleContainer.className = "ripple--container";

  // add ripple on mouse click
  ripple.addEventListener("mousedown", addRipple);
  // remove ripple after mouse click
  ripple.addEventListener("mouseup", debounce(cleanUp, 2000));

  ripple.rippleContainer = rippleContainer;
  ripple.appendChild(rippleContainer);
});
