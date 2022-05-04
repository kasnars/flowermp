import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtTag, AtTimeline, AtInput, AtForm, AtTextarea, AtButton, AtCar, AtMessage } from 'taro-ui'
import Taro from '@tarojs/taro'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './upload.scss'
import { useState } from 'react'
import { postData } from '../../api/api'

function Upload() {
    // 可以使用所有的 React Hooks
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
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
    const changeTitle = (e) => {
        setTitle(e);
    }
    const onSubmit = async() => {
        const res = await postData({
            name:title,
            content,
        })
        console.log(title);
        console.log(content);
        if ( res) {
            Taro.atMessage({
                'message': '上传成功',
                'type': 'success',
            })
            onReset()
        }
    }
    const onReset = () => {
        setTitle('')
        setContent('')
    }


    return (
        <view className='container'>

            <AtMessage />
            <AtForm
                // onSubmit={() =>onSubmit}
                // onReset={() => onReset}
            >
                <view className='title'>花卉名称：</view>
                <AtInput
                    name='value1'
                    type='text'
                    placeholder='请输入花卉名称'
                    value={title}
                    onChange={(e) => changeTitle(e)}
                    className='mt'
                />
                <view className='title'  >花卉相关描述：</view>
                <AtTextarea
                    value={content}
                    onChange={e => setContent(e)}
                    maxLength={200}
                    placeholder='花卉相关描述'
                    className='mt'
                />

            </AtForm>
            <AtButton type='primary' onClick={() => onSubmit()} className='mt'>提交</AtButton>
            <AtButton type='primary'    onClick={() => onReset()} className='mt'>重置</AtButton>

        </view>
    )
}

export default Upload