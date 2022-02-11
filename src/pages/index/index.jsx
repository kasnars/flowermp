import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard  } from 'taro-ui'
import { AtSearchBar } from 'taro-ui'
import { AtMessage } from 'taro-ui'
import { Swiper, SwiperItem } from '@tarojs/components'
import { AtFab } from 'taro-ui'

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/card.scss";
import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/fab.scss";
import './index.scss'


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"123",
      value:''
    }
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }
  onActionClick() {
    console.log('开始搜索')
    this.handleClick('success')
  }
  handleClick(type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  // changeInput = (e) => {
  //   this.setState({url: e.target.value})
  // }
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
            vertical
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
        </view>
        <view>
          <AtButton type='primary' circle>按钮文案</AtButton>
          <AtFab>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
          </AtFab>
        </view>
      </>
    )
  }
}
