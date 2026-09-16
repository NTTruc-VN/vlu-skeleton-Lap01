function checkLogin(username, password) {
  return username === 'admin' && password === '123';
}
 
// Export cho Jest (Node). Bọc trong if để không lỗi khi chạy trên trình duyệt.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}
