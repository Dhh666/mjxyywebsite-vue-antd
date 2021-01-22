import request from './request'

export function getDiaAndAppoint () {
  return request({
    url: '/api/queryDiaAndAppoint/',
    method: 'get'
  })
}
