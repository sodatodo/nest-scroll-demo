import { ScrollView, View } from "@tarojs/components"
import { createSelectorQuery } from "@tarojs/taro";
import { useState } from "react";

const Second = () => {

    const query = createSelectorQuery()
    const [eventTop, setEventTop] = useState(200);
    const [top, setTop] = useState(200);
    const [timeOutTop, setTimeOutTop] = useState(200);
    const handleScroll = (event) => {
        setEventTop(200 - event.detail.scrollTop)
        query.select('#target').boundingClientRect(rect => {
            setTop(rect.top)
          }).exec()

        const speed = Math.abs(event.detail.deltaY)

        setTimeout(() => {
            query.select('#target').boundingClientRect(rect => {
                setTimeOutTop(rect.top)
              }).exec()
        }, speed)
    }
    return (
        <ScrollView
            style={{ height: 'calc(100vh)', backgroundColor: 'pink' }}
            onScroll={handleScroll}
            scrollY
        >
            <View style={{ height: '200px', backgroundColor: 'cyan' }} ></View>
            <View style={{ height: 'calc(100vh)', backgroundColor: 'pink' }}>
                <View style={{ height: 'calc(100% - env(safe-area-inset-bottom))', backgroundColor: 'orange' }} id="target">
                    ScrollView eventTop { eventTop } 
                    <View>Query top {top}</View>
                    <View>Timeout top {timeOutTop}</View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Second
