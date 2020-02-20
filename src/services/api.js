/*
 * @filename: 
 * @Date: 2020-02-19 21:47:12
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import fetch from 'dva/fetch';

/**
 * 登录请求
 * @param {Object} params 请求参数
 * @returns {Object} Promise
 */
export const fetchLogin = (params) => {
  return fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(params.value),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}