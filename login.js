/**
 * Kiểm tra thông tin đăng nhập.
 * Trả về true nếu user = 'admin' và pass = '123', ngược lại trả về false.
 */
function checkLogin(username, password) {
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

// Cho phép Node.js / Jest "require" hàm này mà không làm vỡ khi chạy trên trình duyệt.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkLogin;
}
