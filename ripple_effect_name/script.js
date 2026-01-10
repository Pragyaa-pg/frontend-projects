{/* <script> */}
  const container = document.querySelector(".water-container");
  const rippleLayer = document.querySelector(".ripple-layer");

  container.addEventListener("mousemove", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = container.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    rippleLayer.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
{/* </script> */}
