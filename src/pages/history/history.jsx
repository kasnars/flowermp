import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './history.scss'

function Index() {
    // 可以使用所有的 React Hooks
    useEffect(() => { })

    // 对应 onReady
    useReady(() => { })

    // 对应 onShow
    useDidShow(() => { })

    // 对应 onHide
    useDidHide(() => { })

    // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // 详情可查阅：【Hooks】
    usePullDownRefresh(() => { })

    return (
        <view>
            历史相关搜索
            <AtTag type='primary' circle active>标签</AtTag>
        </view>
    )
}

export default Index