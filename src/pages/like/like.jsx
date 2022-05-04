import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtTag, AtTimeline } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './like.scss'
import { useState } from 'react'
import Cardlist from '../../components/cardlist/cardlist'
import { getLikeList } from '../../api/api'
// import { getLikeList, testGet } from '../../api/api'
// import {} from '/'

function Like() {
    // 可以使用所有的 React Hooks
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        getDataList()
        // console.log(dataList, '2222');
        testHttp()
    }, [])

    // 对应 onReady
    useReady(() => { 
})

    // 对应 onShow
    useDidShow(() => { })

    // 对应 onHide
    useDidHide(() => { })

    // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // 详情可查阅：【Hooks】
    usePullDownRefresh(() => { })

    const getDataList = async() => {
        const res = [
            { title: '牡丹', note: '花中贵族', id: 1 },
            { title: '玫瑰', note: '花中贵族23123', id: 2 },
            { title: '月季', note: '23', id: 3 },
            { title: '牵牛花', note: '花中大苏打贵族', id: 4 },
            { title: '蓝色妖姬', note: '花中驱蚊器贵族', id: 5 },
            { title: '牡丹', note: '花中贵恶气恶气族', id: 6 },
        ]
        let { data } = await getLikeList({
            userId: 1
        })
        console.log(data.data, 'htp');

        setDataList(data.data)
        
    }

    const testHttp = async() => {
        
        let { data } = await getLikeList({
            userId:1
        })
        console.log(data.data,'htp');
        // testGet.then(res => {
        //     console.log(res,'inhh');
        // })
    }

    return (
        <view className='container'>
            {
                dataList.length > 0 && <Cardlist dataList={dataList}></Cardlist>
            }
            
        </view>
    )
}

export default Like