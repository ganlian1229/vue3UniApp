import { post } from '@/utils/request'

/**
 * 用户登录
 * @param loginForm 登录表单
 */
export function login(loginForm) {
  return post('/auth/login', loginForm)
}
