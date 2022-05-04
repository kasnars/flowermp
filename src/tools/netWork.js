import Taro from '@tarojs/taro'

export let baseUrl = 'https://kasnars.club'
// export let baseUrl = 'http://localhost:7001'

export const httpGet = (url,data = {}) => {
    return Taro.request({
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

export const httpPost = (url, data = {}) => {
    return Taro.request({
        method:'POST',
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

