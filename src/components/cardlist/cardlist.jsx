import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import Taro from '@tarojs/taro'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './cardlist.scss'
import { useState } from 'react'

function Cardlist({dataList}) {
    // 可以使用所有的 React Hooks
    // const initData = [
    //     {title:'牡丹',note:'花中贵族',id:1},
    //     { title: '玫瑰', note: '花中贵族23123', id: 2 },
    //     { title: '月季', note: '23', id: 3 },
    //     { title: '牵牛花', note: '花中大苏打贵族', id: 4 },
    //     { title: '蓝色妖姬', note: '花中驱蚊器贵族', id: 5 },
    //     { title: '牡丹', note: '花中贵恶气恶气族', id: 6 },
    // ]
    const [list, setList] = useState(dataList)
    useEffect(() => {

    }, [])

    // 对应 onReady
    useReady(() => { })

    // 对应 onShow
    useDidShow(() => { })

    // 对应 onHide
    useDidHide(() => { })

    // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // 详情可查阅：【Hooks】
    usePullDownRefresh(() => { })

    const toPage = (id) => {
        console.log(id);
        Taro.navigateTo({url:`/pages/detail/detail?id=${id}&from=1`})
    }

    return (
        <view className='container'>
            <AtList>
                {
                    list.map(item => {
                        return(
                            <AtListItem title={item.flowerTitle} note={item.flowerContent && item.flowerContent.slice(0,30) + '....'} key={item.id} onClick={() => toPage(item.flowerId)} arrow='right' />
                        )
                    })
                }
                
            </AtList>

        </view>
    )
}

export default Cardlist