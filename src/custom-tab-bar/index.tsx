import { Tabbar } from "@taroify/core"
import { FriendsOutlined, HomeOutlined, Search, SettingOutlined } from "@taroify/icons"
import { useState } from "react"

function KeyTabbar() {
  const [value, setValue] = useState("1")
  return (
    <Tabbar value={value} onChange={(_, newValue) => setValue(newValue)}>
      <Tabbar.Item key="1" icon={<HomeOutlined />}>
        标签
      </Tabbar.Item>
      <Tabbar.Item key="2" icon={<Search />}>
        标签
      </Tabbar.Item>
      <Tabbar.Item key="3" icon={<FriendsOutlined />}>
        标签
      </Tabbar.Item>
      <Tabbar.Item key="4" icon={<SettingOutlined />}>
        标签
      </Tabbar.Item>
    </Tabbar>
  )
}

export default KeyTabbar
