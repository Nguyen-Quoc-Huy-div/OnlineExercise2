let circle = document.getElementById("circle");
let size = 30;
function animate() {
    size += 0.5;
    if (size > 500) {
        size = 30;
    }
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    requestAnimationFrame(animate);
}
animate();