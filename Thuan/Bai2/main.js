document.addEventListener("DOMContentLoaded", () => {
    const shape = document.querySelector(".shape");
    let percentage = 0; // Tỷ lệ hiển thị từ 0% đến 100%
    let speed = 0.2; // Tốc độ lan tỏa
    let colorIndex = 0; // Chỉ số màu hiện tại
  
    // Danh sách màu gradient để thay đổi
    const gradients = [
      "linear-gradient(0deg, white, red)",
      "linear-gradient(0deg, white, blue)",
      "linear-gradient(0deg, white, purple)",
      "linear-gradient(0deg, white, green)",
    ];
  
    function animate() {
      percentage += speed; // Tăng dần tỷ lệ hiển thị
  
      if (percentage >= 100) {
        percentage = 0; // Reset về 0 ngay lập tức
        colorIndex = (colorIndex + 1) % gradients.length; // Chuyển sang màu tiếp theo
        shape.style.background = gradients[colorIndex]; // Cập nhật màu gradient mới
      }
  
      // Cập nhật clip-path để tạo hiệu ứng lan tỏa theo chiều cao
      shape.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${percentage}%, 0% ${percentage}%)`;
  
      requestAnimationFrame(animate);
    }
  
    animate(); // Bắt đầu hiệu ứng
  });