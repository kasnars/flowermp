import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard  } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/card.scss";
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"123"
    }
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
      <view style={{height:'600px',margin:'5%',display:'flex',flexDirection: 'column'}}>
        <view style={{flex:'1',backgroundColor:'red'}}>
          header
        </view>
        <view style={{flex:'2',backgroundColor:'blue',display:'flex'}}>
          <view style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white',flex:'1'}}>
            center
          </view>
        </view>
        <view style={{flex:'1',backgroundColor:'green'}}>
          footer
        </view>
      </view>
        </>
    )
  }
}
