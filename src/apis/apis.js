import request from '@/utils/request'

export const userApi = {
  getUserInfo: params => request.get('/user/getUserinfo', params),
}
