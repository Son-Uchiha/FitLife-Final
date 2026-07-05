# Giải thích chi tiết cấu hình Tailwind CSS (`tailwind.config.js`)

File `tailwind.config.js` của bạn đang mở rộng (`extend`) cấu hình mặc định của Tailwind bằng cách định nghĩa một hệ thống các biến thiết kế (Design Tokens) rất quy chuẩn. Cách đặt tên trong cấu hình này, đặc biệt là hệ thống màu sắc, được thiết kế theo tư duy của **Material Design 3 (Material You)**.

Dưới đây là phần giải thích chi tiết cách đặt tên và dịch nghĩa các thành phần sang tiếng Việt.

---

## 1. Chế độ tối (`darkMode: "class"`)
Cấu hình này cho phép bạn chủ động chuyển đổi giữa giao diện sáng (Light Mode) và tối (Dark Mode) bằng cách thêm hoặc xóa class `.dark` ở thẻ bao ngoài cùng (thường là thẻ `<html>` hoặc `<body>`).

---

## 2. Hệ thống màu sắc (`colors`)
Hệ thống màu sử dụng các tiền tố và hậu tố để chỉ rõ **vai trò** và **ngữ cảnh** sử dụng của màu đó thay vì đặt tên theo màu cụ thể (như red, blue).

### Các nhóm màu chính (Core Colors)
*   **`primary` (Màu chủ đạo):** Màu chính của trang web, dùng cho các nút bấm quan trọng, thành phần nổi bật.
*   **`secondary` (Màu phụ):** Dùng cho các thành phần ít nổi bật hơn, hỗ trợ cho màu chính.
*   **`tertiary` (Màu thứ 3):** Màu điểm nhấn để tạo sự cân bằng với màu chính và phụ.
*   **`error` (Màu lỗi):** Dùng cho các thông báo lỗi, cảnh báo (thường là sắc đỏ).
*   **`surface` (Bề mặt):** Màu nền của các thành phần nổi lên như thẻ (card), hộp thoại (dialog).
*   **`background` (Nền trang):** Màu nền tổng thể ở dưới cùng của toàn bộ trang web.

### Quy tắc hậu tố & tiền tố (Suffixes & Prefixes)
*   **`on-*` (Nằm trên...):** Màu của văn bản hoặc biểu tượng **nằm trên** nền tương ứng. Ví dụ: `on-primary` là màu chữ được thiết kế để đọc rõ nhất khi nằm trên nền `primary`. `on-surface` là màu chữ hiển thị trên nền `surface`.
*   **`*-container` (Khối chứa):** Màu nền dành cho một khối chứa lớn, thường nhạt hơn so với màu gốc. (Ví dụ: `primary-container`).
*   **`on-*-container`:** Màu của chữ/biểu tượng đặt trên nền của container đó.
*   **`*-variant` (Biến thể):** Một sắc độ khác (thường tối hơn hoặc nhạt hơn một chút) của màu gốc, hay dùng cho đường viền (outline) hoặc gạch dưới.
*   **`*-fixed` (Cố định):** Màu sắc giữ nguyên (hoặc thay đổi rất ít) bất kể người dùng đang ở chế độ Sáng hay Tối.
*   **`*-dim` (Tối mờ):** Phiên bản tối hơn/nhạt sắc hơn của màu gốc.

### Các màu bề mặt đặc biệt (Elevation / Surface Colors)
Cấu trúc tạo chiều sâu cho giao diện:
*   `surface-container-lowest`: Bề mặt thấp nhất (tối nhất ở dark mode).
*   `surface-container-low`: Bề mặt thấp.
*   `surface-container`: Bề mặt tiêu chuẩn.
*   `surface-container-high`: Bề mặt cao.
*   `surface-container-highest`: Bề mặt cao nhất (thường sáng nhất để tạo cảm giác nổi lên trên cùng).
*   `surface-bright` / `surface-dim`: Bề mặt sáng / bề mặt tối.
*   `inverse-surface` (Bề mặt đảo ngược): Nền có màu ngược lại với theme hiện tại (ví dụ popup đen trên nền trắng).
*   `outline`: Màu đường viền tiêu chuẩn.

---

## 3. Độ bo góc (`borderRadius`)
Định nghĩa độ cong của các góc (dùng với class như `rounded`, `rounded-lg`...):
*   **`DEFAULT`**: Bo góc mặc định (`0.25rem` ~ 4px).
*   **`lg` (Large):** Bo góc lớn (`0.5rem` ~ 8px).
*   **`xl` (Extra Large):** Bo góc rất lớn (`0.75rem` ~ 12px).
*   **`full`:** Bo tròn hoàn toàn (`9999px`), thường dùng để làm nút bấm hình viên thuốc hoặc ảnh đại diện hình tròn.

---

## 4. Khoảng cách (`spacing`)
Sử dụng cho margin, padding, width, height (ví dụ: `w-container-max`, `p-gutter`, `mb-margin-desktop`):
*   **`container-max`:** Chiều rộng tối đa của phần chứa nội dung giữa màn hình (`1280px`).
*   **`gutter`:** Rãnh khoảng cách giữa các cột hoặc các phần tử (`24px`).
*   **`margin-desktop`:** Lề hai bên của trang web khi xem trên máy tính (`64px`).
*   **`margin-mobile`:** Lề hai bên của trang web khi xem trên điện thoại di động (`20px`).
*   **`unit`:** Đơn vị tính toán cơ sở (`8px`).

---

## 5. Phông chữ & Kích thước (`fontFamily` & `fontSize`)
Cách đặt tên không dùng kích thước vật lý (text-sm, text-lg) mà dựa vào **vai trò của văn bản (Typography Scale)**:

### Quy tắc tên gọi (Vai trò)
*   **`display`:** Chữ kích thước cực lớn, dùng cho các con số nổi bật hoặc tiêu đề chính của trang (Hero section).
*   **`headline`:** Tiêu đề của các khu vực, phần tử (tương đương H1, H2, H3...).
*   **`body`:** Chữ của đoạn văn bản, bài viết thông thường.
*   **`label`:** Chữ của nhãn dán, nút bấm, thẻ tag.

### Hậu tố kích cỡ
*   **`-lg` (Large):** Lớn.
*   **`-md` (Medium):** Trung bình.
*   **`-mobile`:** Biến thể kích thước dành riêng cho màn hình di động.

### Cặp giá trị kích thước
Mỗi class fontSize (ví dụ `text-headline-lg`) cung cấp một mảng chứa [Kích thước chữ, { Chiều cao dòng, Độ đậm, Khoảng cách chữ }].
*   **`display-lg`:** Chữ to 64px, rất đậm (fontWeight: 800), chữ khít lại một chút (letterSpacing: -0.02em). Dùng font **Montserrat**.
*   **`headline-lg` / `headline-lg-mobile`:** Tiêu đề lớn 40px (máy tính) và 32px (điện thoại), đậm (700). Dùng font **Montserrat**.
*   **`headline-md`:** Tiêu đề trung 24px, bán đậm (600). Dùng font **Montserrat**.
*   **`body-lg` / `body-md`:** Văn bản nội dung 18px / 16px, độ đậm bình thường (400), khoảng cách dòng thoáng (1.6). Dùng font **Inter**.
*   **`label-md`:** Nhãn 14px, đậm (600), khoảng cách chữ thưa ra (0.05em) để giúp chữ nhỏ dễ đọc hơn. Dùng font **Inter**.
