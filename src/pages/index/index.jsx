/* eslint-disable react/sort-comp */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard , } from 'taro-ui'
import { AtSearchBar } from 'taro-ui'
import { AtMessage } from 'taro-ui'
import { Swiper, SwiperItem } from '@tarojs/components'
import { AtFab } from 'taro-ui'
import { AtGrid } from "taro-ui"

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/card.scss";
import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/fab.scss";
import "taro-ui/dist/style/components/grid.scss";
import './index.scss'
import { getDataByName } from '../../api/api'


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      url:"123",
      value:'',
      isCol:false,
      popBtnShow:false,
      gridData: [
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '历史记录',
          url:'/pages/history/history'
        },
        {
          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '知识星球',
          url: '/pages/knowledge/knowledge'
        },
        {
          image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '近期热门',
          url: '/pages/hot/hot'
        },

        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '贡献数据',
          url: '/pages/upload/upload'
        },
        {
          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '我的收藏',
          url: '../like/like'
        },
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '版本说明',
          url: '/pages/notice/notice'
        },
      ],
      headerList:[
        {
          img:'https://bkimg.cdn.bcebos.com/pic/72f082025aafa40f4bfb1bde5328144f78f0f736b329',
          id:26
        },
        {
          img:'https://bkimg.cdn.bcebos.com/pic/08f790529822720e2a7ec09b79cb0a46f21fab1a',
          id:27
        },
        {
          img:'https://bkimg.cdn.bcebos.com/pic/63d9f2d3572c11dfa9ec066de06e75d0f703918f6461',
          id:29
        }
      ]
    }
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }
  async onActionClick() {
    console.log('开始搜索',this.state.value)
    const {data} = await getDataByName({
      name: this.state.value
    })
    if (data.data) {
      Taro.navigateTo({ url: `/pages/detail/detail?id=${data.data.id}&from=1` })
    } else {
      Taro.atMessage({
        'message': '数据库未收录该花卉',
        'type': 'error',
      })
    }
    console.log(data.data);
    // this.handleClick('success')
  }
  selectPhoto(){
    // Taro.chooseImage({
    //   count: 1, // 默认9
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
    //   success: function (res) {
    //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    //     var tempFilePaths = res.tempFilePaths
    //     console.log(tempFilePaths);
    //   }
    // })
    Taro.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths[0]);
        Taro.uploadFile({
          url: 'https://kasnars.club/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = JSON.parse(res.data)
            console.log(data,'resss');
            console.log(typeof data,'type');
            //do something
            Taro.navigateTo({ url: `/pages/detail/detail?data=${data.url}` })
            
          }
        })
      }
    })
  }
  handleClick(type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }
  toPage(item,index) {
    console.log(item,'item');
    console.log(index,'index');
    Taro.navigateTo({
      url:item.url
    })
  }

  toDetail(id){
    console.log(id);
    Taro.navigateTo({ url: `/pages/detail/detail?id=${id}&from=1` })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  // changeInput = (e) => {
  //   this.setState({url: e.target.value})
  // }

  pop(){
    return (
      <view >
        <AtFab className='pop-fix1'>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
        <AtFab className='pop-fix3'>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
      </view>
    )
  } 
  render () {
    return (
      <>
        <AtMessage />
        <view className='search'>
          <AtSearchBar
            placeholder='搜花'
            actionName='随手搜花'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        </view>
        <view className='header'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            // vertical
            circular
            indicatorDots
            autoplay
          >
            {/* <SwiperItem className='swpItem'>

              <image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0925%252F44cd872dj00qzz1gc000pc000hs00bgg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647202924&t=406abe74669a09aad569b3bf51abdbf7'
                  style='width: 100%;height: 100%'
              alt="" />

              
            </SwiperItem>

            <SwiperItem>
              <image src='https://bkimg.cdn.bcebos.com/pic/72f082025aafa40f4bfb1bde5328144f78f0f736b329'
                  style='width: 100%;height: 100%'
                  alt="" />
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem> */}
            {
                this.state.headerList.map(item => {
                  return(
                    <SwiperItem className='swpItem' onClick={this.toDetail.bind(this,item.id)}>
                      <image src={item.img}
                        style='width: 100%;height: 100%'
                        alt="" />
                    </SwiperItem>
                  )
                })
            }
          </Swiper>
        </view>

        <AtGrid 
        onClick={(item,id) => this.toPage(item,id)}
        data={ this.state.gridData}
on
        />

        <view>
          <AtButton type='primary' 
          className='btn'
            circle onClick={this.selectPhoto.bind(this)}>点击拍照</AtButton>

          <view className='fixView'>
            <AtFab onClick={() => this.setState({ popBtnShow:!this.popBtnShow})}>
              <Text className='at-fab__icon at-icon at-icon-menu'></Text>
            </AtFab>
          </view>

        </view>
        {
          this.popBtnShow && this.pop()
        }
      </>
    )
  }
}
