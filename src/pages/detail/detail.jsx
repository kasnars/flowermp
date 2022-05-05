import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtFab, AtMessage } from 'taro-ui'
import Taro from '@tarojs/taro'
import {
    useReady,
    useDidShow,
    useDidHide,
    usePullDownRefresh
} from '@tarojs/taro'
import './detail.scss'
import { useState } from 'react'
import { addHistory, addLike, getAi, getFlowerData } from '../../api/api'
import { useLayoutEffect } from 'react'

function Knowledge() {
    // 可以使用所有的 React Hooks
    const [data, setData] = useState({})
    const [org, setOrg] = useState(0)
    const [resindex, setResIndex ] = useState(0)
    // const [res,setRes] = useState([])
    useEffect(() => {
        let from = Taro.getCurrentInstance().router.params.from
        console.log(from,'from');
        // from 0-拍照 1-收藏
        if (from == 1) {
            const id = Taro.getCurrentInstance().router.params.id
            console.log(id, '接受id');
            getData(id)
            setOrg(from)
        } else {
            const data = Taro.getCurrentInstance().router.params.data
            console.log(data,'datain');
            // let parse = Object.assign({},data)
            // parse = JSON.parse(parse)
            // console.log(parse.url,'indata');
            ai(data)
        }

    }, [])

    useEffect((resIndex) => {
        const idata = Taro.getCurrentInstance().router.params.data
        // console.log(data, 'datain');
        // let parse = Object.assign({},data)
        // parse = JSON.parse(parse)
        // console.log(parse.url,'indata');
        ai(idata)
        addHis()
    },[resindex])

    // // 对应 onReady
    useReady(() => {
    
     })

    // // 对应 onShow
    // useDidShow(() => { })

    // // 对应 onHide
    // useDidHide(() => { })

    // // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
    // // 详情可查阅：【Hooks】
    // usePullDownRefresh(() => { })

    const ai = async(url) => {
        const {data} = await getAi({
            url,
        })
        console.log(data.data);
        let inres = await data.data
         inres.forEach(item => {
            item.flowerTag = item.name,
                item.flowerImg = item?.baike_info?.image_url
            item.flowerDescript = item?.baike_info?.description
        })
        // setRes(inres)
        // console.log(res,'array');
        // if (res.length) {
        //     setData(res[0])
        // }
        setData(inres[resindex])
        
    }

    const getData = async(id) => {
        const {data} = await getFlowerData({
            id,
        })
        // const artData = {
        //     title: '这是一级标题这是一级标题',
        //     time: '2017-05-07',
        //     author: '这是作者',
        //     img: 'https://jdc.jd.com/img/400x400',
        //     content: '这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        // }
        setData(data.data)
        console.log('setData');
    }
    const changeData = () => {
        if (org == 1) {
            Taro.navigateBack({ delta: 1})
        } else {
            if(resindex < 1){
                setResIndex(resindex + 1)
            } else{
                    Taro.atMessage({
                    'message': '没有更多可能性了',
                    'type': 'info',
                })
            }
            
            // let side = res.length
            // if (resindex +1 < side) {
            //     // setData(res[resindex])
            //     setResIndex(resindex+1)
            // } else {
            //     Taro.atMessage({
            //         'message': '没有更多可能性了',
            //         'type': 'info',
            //     })
            // }
        }
    }
    const toLike = async() => {
        const res = await addLike({
            userId:1,
            flowerId:data.id,
            flowerTitle: data.flowerTag,
            flowerContent: data.flowerDescript
        })
        if (res) {
            Taro.atMessage({
                'message': '收藏成功',
                'type': 'success',
            })
        }
    }
    const addHis = async() => {
        if (Object.values(data).length > 0) {
            console.log('fasong');
            const res = await addHistory({
                userId: 1,
                flowerName: data.flowerTag,
                flowerContent: data.flowerDescript
            })
        }

}

    const randerData = () => {
        return(
            <view className='at-article'>
                <view className='at-article__h1'>
                    {data.flowerTag}
                </view>

                {
                    org == 1 ?
                        <view className='at-article__info'>
                            {data.createTime ? data.createTime.split('T')[0] : '时间不明'}
                            &nbsp;&nbsp;&nbsp;
                            {data.dataSource == 1 ? '系统自动录入' : '用户上传'}
                        </view>
                        :
                        <view className='at-article__info'>
                            匹配度：
                            {data.score}
                            &nbsp;&nbsp;&nbsp;
                        </view>
                }


                <view className='at-article__content'>
                    {
                        data.flowerImg ?
                            <image
                                className='at-article__img'
                                src={data.flowerImg}
                                mode='widthFix' />
                            :
                            <view className='at-article__section'>
                                <view className='at-article__p'>
                            数据库中暂无参考图片
                            </view>
                            </view>
                    }

                    <view className='at-article__section'>
                        {/* <view className='at-article__h2'>这是二级标题</view>
                    <view className='at-article__h3'>这是三级标题</view> */}
                        <view className='at-article__p'>
                            {data.flowerDescript || '数据库中暂未收录该花卉详细描述'}
                        </view>

                    </view>
                </view>
            </view>
        )

    }

    return (
        <view style={{ margin: '5%',position:'relative' }}>
            <AtMessage />
            {/* <AtFab style={{position:'absoult', bottom:'10%',right:'10%'}}>
                <text className='at-fab__icon at-icon at-icon-menu'></text>
            </AtFab> */}

            {
                randerData() 
            }

            {
                org == 1 &&
                <AtButton type='primary' circle className='btn' onClick={() => toLike()}>
                    收藏
                </AtButton>
            }


            <AtButton type='primary' circle className='btn' onClick={() => changeData()} disabled = {resindex === 1}>
                {
                    org == 1 ? '返回上一页' : resindex < 1 ?'不是这个？看看别的可能性':'没有更多可能性了'
                }
                
            </AtButton>
        </view>
    )
}

export default Knowledge