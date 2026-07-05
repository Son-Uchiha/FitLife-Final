// 1. Tìm và lấy nút bấm từ HTML dựa vào ID
const mobileMenuBtn = document.getElementById("mobile-menu-btn");

// 2. Tìm và lấy cái Menu từ HTML dựa vào ID
const navMenu = document.getElementById("nav-menu");
const menuIcon = document.getElementById("menu-icon");

// 3. Bảo JavaScript: "Khi nào người dùng nhấn (click) vào nút bấm thì làm các việc sau:"
mobileMenuBtn.addEventListener("click", () => {
  // Bật/tắt vị trí (trượt từ trên xuống)
  navMenu.classList.toggle("top-[-500px]");
  navMenu.classList.toggle("top-full");

  // Bật/tắt độ trong suốt (mờ sang rõ)
  navMenu.classList.toggle("opacity-0");
  navMenu.classList.toggle("opacity-100");

  // 4. Đổi icon: Nếu menu đang mở thì hiện dấu X (close), ngược lại hiện 3 gạch (menu)
  if (navMenu.classList.contains("top-full")) {
    menuIcon.textContent = "close";
  } else {
    menuIcon.textContent = "menu";
  }
});
