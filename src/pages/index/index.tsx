import { Component, useRef, useState } from 'react'
import { Cell, List, Loading, Sticky, Tabs } from '@taroify/core'
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import { nextTick } from '@tarojs/taro'

import bannerUrl from './images/maple.jpg'

const BasicList = () => {
  const hasMoreRef = useRef(true)
  const listRef = useRef<string[]>([])
  const [loading, setLoading] = useState(false)
  const [activeKey, setActiveKey] = useState<Tabs.TabKey>(0)

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

  const onScrollToUpper = () => { }
  const onScroll = (e) => {
    // console.log(`e`, e);
  }
  const handleChange = (e) => {
    setActiveKey(e.detail.current)
  }
  return (
    <View style={{ width: '100%', height: '100vh' }}>
      <View>
        <Image src={bannerUrl} style={{ width: '100%' }} />
        <Sticky>
          <Tabs activeKey={activeKey} ellipsis={false} onChange={({ key }) => setActiveKey(key)}>
            <Tabs.TabPane title="标签 1"></Tabs.TabPane>
            <Tabs.TabPane title="标签 2"></Tabs.TabPane>
            <Tabs.TabPane title="标签 3"></Tabs.TabPane>
          </Tabs>
        </Sticky>
      </View>
      <Swiper
        onChange={handleChange}
        style={{ height: '100vh' }}
      >
        <SwiperItem>
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={onScroll}
          >
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
          </ScrollView>
        </SwiperItem>
        <SwiperItem>
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={onScroll}
          >
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
          </ScrollView>
        </SwiperItem>
        <SwiperItem>
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={onScroll}
          >
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
          </ScrollView>
        </SwiperItem>
      </Swiper>

    </View>
  )
}

export default BasicList;
