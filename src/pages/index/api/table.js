import request from '@/pages/index/utils/request'

export function getList(params) {
    return request({
        url: '/table/list',
        method: 'get',
        params
    })
}