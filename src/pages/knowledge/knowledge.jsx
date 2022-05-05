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
import { getAllData, getFlowerData } from '../../api/api'

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
    const getData = async() => {
        // const {data} = await getFlowerData({
        //     id:6
        // })
        const {data} = await getAllData()
        console.log(data.data,'allData');
        let max = data.data.length-1
        let index = Math.floor(Math.random() * (max - 0 + 1) + 0)
        console.log(index,'index');
        // console.log(data.data);
        // const artData = {
        //     title:'这是一级标题这是一级标题',
        //     time:'2017-05-07',
        //     author:'这是作者',
        //     img:'https://jdc.jd.com/img/400x400',
        //     content:'这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        // }
        setData(data.data[index])
        console.log('setData');
    }

    return (
        <view style={{margin:'5%'}}>
        <view className='at-article'>
            <view className='at-article__h1'>
                    {data.flowerTag}
            </view>
            <view className='at-article__info'>
                    {data.createTime ? data.createTime.split('T')[0]:'时间不明'}
                    &nbsp;&nbsp;&nbsp;
                    {data.dataSource == 1?'系统自动录入':'用户上传'}
            </view>
            <view className='at-article__content'>
                {
                    data.flowerImg ?
                            <image
                                className='at-article__img'
                                src={data.flowerImg}
                                mode='widthFix' />
                    :
                            <view className='at-article__section'>
                                <view className='at-article__p' style={{color:'blue'}}>
                    图片暂未收录
                    </view>
                    </view>
                }

                <view className='at-article__section'>
                    {/* <view className='at-article__h2'>这是二级标题</view>
                    <view className='at-article__h3'>这是三级标题</view> */}
                    <view className='at-article__p'>
                            {data.flowerDescript}
                    </view>

                </view>
            </view>
        </view>
            <AtButton type='primary' circle className='btn' onClick={() => getData()}>换一篇</AtButton>
        </view>
    )
}

export default Knowledge