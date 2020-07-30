import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function Detail() {
  const history = useHistory()
  const { id } = useParams()

  const handleClick = () => {
    history.push('/home')
  }
  
  const getid = () => {
    console.log('id:', id)
  }

  return (
    <div>
      <button onClick={handleClick}>点我跳转到首页</button>
      我是详情页面
      <button onClick={getid}>点我获取参数</button>
    </div>
  )
}
