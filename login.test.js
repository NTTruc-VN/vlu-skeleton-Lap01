const checkLogin = require('./login');

describe('checkLogin', () => {
  test('trả về true khi tài khoản và mật khẩu đúng', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('trả về false khi mật khẩu sai', () => {
    expect(checkLogin('admin', '1234')).toBe(false);
  });

  test('trả về false khi tài khoản sai', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });

  test('trả về false khi cả tài khoản và mật khẩu đều sai', () => {
    expect(checkLogin('user', 'wrongpass')).toBe(false);
  });

  test('trả về false khi để trống thông tin đăng nhập', () => {
    expect(checkLogin('', '')).toBe(false);
  });
});
