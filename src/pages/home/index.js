import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  const handleClick = () => {
    history.push('/detail/sum')
  }

  return (
    <div>
      <button onClick={handleClick}>点我跳转</button>
      我是首页
    </div>
  )
}
