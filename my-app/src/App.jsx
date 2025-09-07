import { useState } from 'react'
import './App.css'
import Search from './useEffect/Search'
import Window from './useEffect/Window'
import UsersList from './useEffect/UsersList'
import CounterWithTitle from './useEffect/CounterWithTitle'
import Timer from './useEffect/Timer'
import LocalStorageInput from './useEffect/LocalStorage'
import NetworkStatus from './useEffect/NetworkStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p>hello mk</p> */}
    {/* <Search/> */}
    {/* <Window/> */}
    {/* <UsersList/> */}
    {/* <CounterWithTitle/> */}
    {/* <Timer/> */}
    {/* <LocalStorageInput/> */}
    <NetworkStatus/>
    </>
  )
}

export default App



