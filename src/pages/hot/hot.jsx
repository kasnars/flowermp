import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './hot.scss'
import { useState } from 'react'
import { getAllData } from '../../api/api'
// import Cardlist from '../../components/cardlist/cardlist'

function Hot() {
    // 可以使用所有的 React Hooks
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        getDataList()
        // console.log(dataList, '2222');
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
            { title: 'redian', note: '花中贵族', id: 1 },
            { title: '玫瑰', note: '花中贵族23123', id: 2 },
            { title: '月季', note: '23', id: 3 },
            { title: '牵牛花', note: '花中大苏打贵族', id: 4 },
            { title: '蓝色妖姬', note: '花中驱蚊器贵族', id: 5 },
            { title: '牡丹', note: '花中贵恶气恶气族', id: 6 },
        ]
        const {data} = await getAllData()
        console.log(data.data.slice(-5));
        setDataList(data.data.slice(-5))

    }
    const toPage = (id) => {
        Taro.navigateTo({ url: `/pages/detail/detail?id=${id}&from=1` })
    }

    return (
        <view className='container'>
            <AtList>
                {
                    dataList.map(item => {
                        return (
                            <AtListItem title={item.flowerTag} note={item.flowerDescript && item.flowerDescript.slice(0,30)+'...'} 
                            key={item.id} onClick={() => toPage(item.id)} arrow='right' />
                        )
                    })
                }

            </AtList>

        </view>
    )
}

export default Hot