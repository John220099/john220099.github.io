document.addEventListener("DOMContentLoaded", () => {
  let hue = 0;
  function animate() {
    hue = (hue + 1) % 360;
    const color1 = `hsl(${hue}, 49%, 26%)`;
    const color2 = `hsl(${(hue + 60) % 360}, 100%, 50%)`;
    document.body.style.background = `linear-gradient(120deg, ${color1}, ${color2})`;
    requestAnimationFrame(animate);
  }
  animate();
});
