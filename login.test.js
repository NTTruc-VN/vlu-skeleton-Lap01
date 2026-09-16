const { checkLogin } = require('./auth');
 
describe('checkLogin', () => {
  test('trả về true khi đúng admin/123', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });
 
  test('trả về false khi sai mật khẩu', () => {
    expect(checkLogin('admin', '456')).toBe(false);
  });
 
  test('trả về false khi sai tài khoản', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });
 
  test('trả về false khi để trống', () => {
    expect(checkLogin('', '')).toBe(false);
  });
 
  test('phân biệt chữ hoa chữ thường', () => {
    expect(checkLogin('Admin', '123')).toBe(false);
  });
});
