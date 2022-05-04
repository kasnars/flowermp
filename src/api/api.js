import { httpGet, httpPost } from "../tools/netWork";

export const testGet = () => {
    return httpGet('/getworks')
}

export const getLikeList = (data) => {
    return httpPost('/ai/likeList',data)
}

export const getHistoryList = (data) => {
    return httpPost('/ai/getHistory',data)
}

export const getFlowerData = (data) => {
    return httpPost('/ai/getFlowerById',data)
}

export const getAi = (data) => {
    return httpPost('/ai',data)
}

export const postData = (data) => {
    return httpPost('/ai/create',data)
}

export const getDataByName = (data) => {
    return httpPost('/ai/getFlowerByName',data)
}

export const getAllData = (data = {}) => {
    return httpPost('/ai/getAllFlower',data)
}

export const addLike = (data) => {
    return httpPost('/ai/like',data)
}