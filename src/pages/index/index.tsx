import { useRef, useState } from 'react'
import { Button, Tabs, Sticky } from '@taroify/core'
// import Sticky from '../../components/sticky'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

import bannerUrl from './images/maple.jpg'
import { usePageScroll } from '@tarojs/runtime'
import { createSelectorQuery } from '@tarojs/taro'

const data: Array<any> = []

for (let index = 0; index < 50; index++) {
  const item = {
    name: `item-${index}`,
    key: `key-${index}`
  }
  data.push(item)
}

const BasicList = () => {
  const [activeKey, setActiveKey] = useState<Tabs.TabKey>(0)
  const [fixed, setFixed] = useState(false)
  const [outerScroll, setOuterScroll] = useState(true)

  const scrollStyle = {
    height: '100vh'
  }
  const scrollTop = 0
  const Threshold = 20
  const vStyleA = {
    height: '100vh',
    backgroundColor: 'rgb(223,31,101)',
  }
  const vStyleB = {
    height: '100vh',
    backgroundColor: 'rgb(249,173,82)'
  }
  const vStyleC = {
    height: '100vh',
    backgroundColor: 'rgb(179, 205, 241)',
    color: '#333'
  }

  const onScrollToUpper = () => {

  }
  const onScroll = (e) => {
    console.log(`e`, e);
  }

  const [height, setHeight] = useState(800);
  // const handleChange = (e) => {
  //   // setActiveKey(e.detail.current)
  //   if (height === 300) {
  //     setHeight(500)
  //   } else {
  //     setHeight(300)
  //   }
  // }
  // const handleStickyChange = (fixedState: boolean) => {
  //   // setFixed(fixedState);
  //   console.log(`stickyChange`, fixedState)
  // }
  // const handleOuterScroll = (scrollInfo) => {
  //   if (stickyRef.current) {
  //     stickyRef.current.onOuterScroll();
  //   }
  // }

  const stickyRef = useRef(null)

  const query = createSelectorQuery()
  const [top, setTop] = useState(200);
  usePageScroll(() => {
    query.select('#target').boundingClientRect(rect => {
      console.log(`rect`, rect);
      setTop(rect.top)
    }).exec()
  })

  return (
    <View
      style={{ width: '100%' }}
    >
      <View style={{ height: '200px', backgroundColor: 'cyan' }} ></View>
      <View style={{ height: 'calc(100vh)', backgroundColor: 'pink' }}>
        <View style={{ height: 'calc(100% - env(safe-area-inset-bottom))', backgroundColor: 'orange' }} id="target">
          View usePageScroll top: {top}
        </View>
      </View>
      {/* <Image src={bannerUrl} style={{ width: '100%', height: '240px' }} />
      <View style={{ height: 'calc(100vh - 100rpx - env(safe-area-inset-bottom))', backgroundColor: 'cyan' }}></View>
      <View style={{ height: 'env(safe-area-inset-bottom)' }}>填充</View>
      <View style={{ height: '50rpx'}} ></View> */}


    </View>
  )
}

export default BasicList;
