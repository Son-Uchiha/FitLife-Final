# 💪 FITLIFE — Premium Fitness Club

> **Website giới thiệu câu lạc bộ thể hình cao cấp**, được xây dựng hoàn toàn bằng HTML tĩnh + Tailwind CSS CDN.

---

## 🌐 Demo

Mở trực tiếp file `index.html` trên trình duyệt hoặc deploy lên bất kỳ static hosting nào (GitHub Pages, Netlify, Vercel...).

---

## 📁 Cấu trúc dự án

```
FitLife/
├── index.html                    # Trang Chủ — Hero, giới thiệu, feature cards
├── classes.html                  # Lịch Học & Bộ Môn — Bento grid các lớp tập
├── contact.html                  # Liên Hệ — Form liên hệ, thông tin & bản đồ
├── Menu.js                       # Logic tương tác Menu trên thiết bị di động
├── tailwind.config.js            # Cấu hình Tailwind CSS dùng chung
├── tailwind.config.cjs           # File cấu hình backup/module
├── giai-thich-tailwind-config.md # Tài liệu giải thích chi tiết config Tailwind
└── README.md                     # Tài liệu dự án
```

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| **HTML5** | Cấu trúc ngữ nghĩa (semantic markup) |
| **Tailwind CSS CDN** | Styling utility-first, responsive design |
| **Vanilla JavaScript** | Xử lý logic tương tác UI (Responsive Navigation Menu) |
| **Google Fonts** | Typography — Montserrat (headings), Inter (body) |
| **Material Symbols** | Icon system từ Google |

---

## 🎨 Design System

Dự án sử dụng **Material Design 3 color tokens** được cấu hình trong `tailwind.config.js`:

- **Primary:** `#f2ca50` — Vàng gold sang trọng
- **Secondary:** `#ffffff` — Trắng tinh khiết
- **Secondary Container:** `#c3f400` — Xanh lime neon nổi bật
- **Background:** `#121414` — Dark mode chủ đạo
- **Surface variants:** Nhiều cấp độ từ `surface-container-lowest` đến `surface-container-highest`

### Typography

- **Display / Headline:** Montserrat (600–800 weight)
- **Body / Label:** Inter (400–600 weight)

---

## 📄 Chi tiết các trang

### 🌟 Components Dùng Chung
- **TopNavBar:** Thanh điều hướng Responsive được áp dụng đồng bộ trên cả 3 trang. Bao gồm hiệu ứng Sticky trên desktop và Menu thả xuống bằng nút bấm Toggle (Hamburger Icon) điều khiển thông qua `Menu.js` trên thiết bị di động.
- **Footer:** Chứa thông tin bản quyền và các liên kết phụ (Privacy, Terms,...).

### 🏠 `index.html` — Trang Chủ
- Hero section full-width với clip-path và gradient overlay
- Badge "Trải nghiệm đẳng cấp" 
- Bento grid giới thiệu: intro block, stats (24/7), 3 feature cards với hover effects
- Glassmorphism cards với backdrop-blur

### 🏋️ `classes.html` — Lịch Học & Bộ Môn
- Hero section cinematic với background overlay
- Bento grid layout hiển thị các bộ môn:
  - **Gym & Đẩy Tạ** — Hero card lớn (8 cols, 2 rows)
  - **Yoga** — Card nhỏ với hover scale effect
  - **Pilates** — Card nhỏ với badge "Exclusive"
  - **Zumba Energy** — Full-width banner với circular image

### 📞 `contact.html` — Liên Hệ
- Hero text "GET IN TOUCH" 
- Form liên hệ responsive (Họ tên, SĐT, Email, Tin nhắn)
- Sidebar thông tin: Địa chỉ, Hotline, Email
- Map placeholder với overlay gradient

---

## 🚀 Cách sử dụng

### Chạy local

Không cần cài đặt gì — chỉ cần mở file HTML trên trình duyệt:

```bash
# Hoặc dùng Live Server (VS Code extension)
# Click chuột phải vào index.html → "Open with Live Server"
```

### Deploy

Dự án là **100% static**, có thể deploy lên:

- **GitHub Pages** — Push lên repo, bật Pages trong Settings
- **Netlify** — Kéo thả folder vào Netlify Drop
- **Vercel** — Import repo trực tiếp

---

## 📝 Ghi chú

- Tailwind CSS được load qua **CDN** (`cdn.tailwindcss.com`) — phù hợp cho development và demo, không khuyến khích cho production lớn.
- Config được tách ra file `tailwind.config.js` riêng để **tái sử dụng** trên cả 3 trang, tránh duplicate code.
- Tất cả hình ảnh sử dụng **Google hosted images** — không cần lưu trữ local.

---

## 📜 License

© 2024 FITLIFE PREMIUM FITNESS CLUB. All rights reserved.
