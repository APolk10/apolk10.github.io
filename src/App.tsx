// import { useState } from 'react'
//import Navbar from './Navbar.tsx'
import LeftPanel from './LeftPanel.tsx'
import RightPanel from './RightPanel.tsx'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <div id="bodyContainer">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
    </div>
  )
}

export default App
