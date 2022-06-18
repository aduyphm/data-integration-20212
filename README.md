# BÀI TẬP LỚN MÔN TÍCH HỢP DỮ LIỆU 20212
## Nhóm 2 - Mã lớp 132679
### ĐỀ TÀI: XÂY DỰNG WEB BÁO MỚI - TIN TỨC TỔNG HỢP TỪ NHIỀU TRANG BÁO

Hướng dẫn truy cập vào Database:
- Truy cập địa chỉ mongodb.com
- Đăng nhập (đăng nhập bằng google nhé)
- email: project20211.team2@gmail.com
- password: project20211
- Ấn browse collection để mở database (collection giống kiểu table trong SQL server)

Để chạy server:
- Tạo file .env có nội dung như sau:
  ```
  MONGO_URI=mongodb+srv://project:20211@cluster0.bdcg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  HOST=<Địa chỉ IP máy của bạn>
  PORT=5000
  ```
- Chạy server bằng lệnh:
- ->cd server
- ->npm install
- ->npm start

Để chạy client:
- chỉnh sửa file src\config\Constants.js (đổi IP thành IP của máy hoặc thành localhost)
- ->cd to client
- ->npm install
- ->npm start
