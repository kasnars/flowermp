import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './notice.scss'
import { useState } from 'react'

function Notice() {
    // 可以使用所有的 React Hooks
    const [isOpen, setIsOpen] = useState(true)
    const [aboutApp, setAboutApp ] = useState(false)
    const [aboutJs, setAboutJs] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)
    useEffect(() => {
    }, [])

    // // 对应 onReady
    // useReady(() => { })

    // // 对应 onShow
    // useDidShow(() => { })

    // // 对应 onHide
    // useDidHide(() => { })

    // // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // // 详情可查阅：【Hooks】
    // usePullDownRefresh(() => { })

    return (
        <view style={{ margin: '5%' }}>
            <AtModal
                isOpened = {aboutApp}
                title='功能介绍'
                // cancelText='取消'
                confirmText='确认'
                // onClose={this.handleClose}
                // onCancel={this.handleCancel}
                onConfirm={() => setAboutApp(false)}
                content='
                拍照识别花卉
                花卉相关知识推送
                分享花卉相关知识
                收藏并记录历史查询
                '
            />

            <AtModal
                isOpened={aboutJs}
                title='相关技术栈'
                // cancelText='取消'
                confirmText='确认'
                // onClose={this.handleClose}
                // onCancel={this.handleCancel}
                onConfirm={() => setAboutJs(false)}
                content='
                Taro 3.0 + React 16.8 +Taro UI
                Nodejs + Eggjs + MySql
                PM2 + CentOS
                '
            />

            <AtModal
                isOpened={aboutMe}
                title='关于作者'
                // cancelText='取消'
                confirmText='确认'
                // onClose={this.handleClose}
                // onCancel={this.handleCancel}
                onConfirm={() => setAboutMe(false)}
                content='软件工程1806 - 刘杨鑫'
            />

            {/* <AtAccordion title='关于小程序' icon={{ value: 'chevron-down', color: 'red', size: '15' }} open={isOpen} onClick = {() => setIsOpen(!isOpen)}>
                <AtList hasBorder={false}>
                    <AtListItem
                        title='功能介绍'
                        arrow='right'
                        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        onClick={() => setAboutApp(true) }
                    />
                    <AtListItem
                        title='相关技术'
                        // note='描述信息'
                        arrow='right'
                        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        onClick={() => setAboutJs(true)}
                    />
                    <AtListItem
                        title='关于作者'
                        // note='描述信息'
                        // extraText='详细信息'
                        arrow='right'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        onClick={() => setAboutMe(true)}
                    />
                </AtList>
            </AtAccordion> */}
            <AtList>
                <AtListItem
                    title='功能介绍'
                    note='本作品所拥有的功能'
                    extraText='详细信息'
                    arrow='right'
                    iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
                    onClick={() => setAboutApp(true)}
                />
                <AtListItem
                    title='相关技术'
                    note='本作品所用技术栈'
                    extraText='详细信息'
                    arrow='right'
                    iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
                    onClick={() => setAboutJs(true)}
                />
                <AtListItem
                    title='关于作者'
                    note='关于开发者'
                    extraText='详细信息'
                    arrow='right'
                    iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
                    onClick={() => setAboutMe(true)}
                />
            </AtList>
        </view>
    )
}

export default Notice