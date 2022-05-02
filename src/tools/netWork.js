import Taro from '@tarojs/taro'

export let baseUrl = 'http://1.116.134.48:7001'

export const httpGet = (url,data = {}) => {
    Taro.request({
        url: `${baseUrl}${url}`, //仅为示例，并非真实的接口地址
        data: {
            ...data
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            return res
        }
    })
}
