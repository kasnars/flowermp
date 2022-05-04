import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtTag, AtTimeline } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './history.scss'
import { useState } from 'react'
// import { getHistoryList } from '../../api/api'
import { getHistoryList } from '../../api/api'

function Index() {
    // 可以使用所有的 React Hooks
    const [history, setHistory] = useState([])
    useEffect(() => { 
        getHistory()
    },[])

    // 对应 onReady
    useReady(() => { })

    // 对应 onShow
    useDidShow(() => { })

    // 对应 onHide
    useDidHide(() => { })

    // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // 详情可查阅：【Hooks】
    usePullDownRefresh(() => { })

    const getHistory = async() => {
        const {data} = await getHistoryList({
            userId:1
        })
        console.log(data.data);
        await data.data.forEach(item => {
            console.log(item,'inn');
            item.title = item.flowerName,
            item.content = [item.time.split('T')[0], item.flowerContent]
        })
        console.log(data.data,'firnm');
        // [
        //     { title: '牡丹', content: ['牡丹是一种红色的花卉，大体形状为xxxx'] },
        //     { title: '月季', content: ['被称为花中皇后，又称“月月红”，是常绿、半常绿低矮灌木，四季开花﹐一般为红色﹐或粉色、偶有白色和黄色﹐可作为观赏植物，也可作为药用植物，亦称月季。有三个自然变种，现代月季花型多样，有单瓣和重瓣，还有高心卷边等优美花型；其色彩艳丽、丰富，不仅有红、粉、黄、白等单色，还有混色、银边等品种；多数品种有芳香。月季的品种繁多，世界上已有近万种，中国也有千种以上'] },
        //     { title: '玫瑰花', content: ['浪漫', '情人节必备', '带刺的玫瑰'] },
        //     { title: '霸王花', content: ['原产地为南美洲'] }
        // ]
        setHistory(data.data)
    }

    return (
        <view className='container'>
            <view className='title'>历史记录</view>
            <view className='timeline'>
                <AtTimeline
                    
                    pending
                    items={history}
                >
                </AtTimeline>
            </view>

        </view>
    )
}

export default Index