import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './knowledge.scss'
import { useState } from 'react'

function Knowledge() {
    // 可以使用所有的 React Hooks
    const [data, setData] = useState({})
    useEffect(() => {
        getData()
    },[])

    // // 对应 onReady
    // useReady(() => { })

    // // 对应 onShow
    // useDidShow(() => { })

    // // 对应 onHide
    // useDidHide(() => { })

    // // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // // 详情可查阅：【Hooks】
    // usePullDownRefresh(() => { })
    const getData = () => {
        const artData = {
            title:'这是一级标题这是一级标题',
            time:'2017-05-07',
            author:'这是作者',
            img:'https://jdc.jd.com/img/400x400',
            content:'这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        setData(artData)
        console.log('setData');
    }

    return (
        <view style={{margin:'5%'}}>
        <view className='at-article'>
            <view className='at-article__h1'>
                {data.title}
            </view>
            <view className='at-article__info'>
                {data.time}&nbsp;&nbsp;&nbsp;{data.author}
            </view>
            <view className='at-article__content'>
                <image
                    className='at-article__img'
                    src={data.img}
                    mode='widthFix' />
                <view className='at-article__section'>
                    {/* <view className='at-article__h2'>这是二级标题</view>
                    <view className='at-article__h3'>这是三级标题</view> */}
                    <view className='at-article__p'>
                        {data.content}
                    </view>

                </view>
            </view>
        </view>
            <AtButton type='primary' circle className='btn' onClick={() => getData()}>换一篇</AtButton>
        </view>
    )
}

export default Knowledge