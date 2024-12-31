// 用户相关接口
import request from '@/utils/request'

const API = {
    // 用户登录
    USER_LOGIN: '/user/login',
    // 获取用户信息
    USER_INFO: '/user/info',
    // 用户退出
    USER_LOGOUT: '/user/logout'
}

// 用户登录
export const userLogin = (data) => {
    return request.post(API.USER_LOGIN, data)
}

// 获取用户信息
export const getUserInfo = () => {
    return request.get(API.USER_INFO)
}

// 用户退出
export const userLogout = () => {
    return request.get(API.USER_LOGOUT)
}
