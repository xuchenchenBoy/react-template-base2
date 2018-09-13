import request from '../utils/request';

// 获取验证码
export async function getCaptcha(body) {
  return request('', {
    method: 'POST',
    body,
  });
}

// 登录
export async function fakeAccountLogin(body) {
  return request('', {
    method: 'POST',
    body,
  });
}


