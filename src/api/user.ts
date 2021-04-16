import request from '@/utils/request'

export function getData( data?: any) {
  return request({
    url: '/api/hotSearch',
    method: 'get',
    data
  })
}

