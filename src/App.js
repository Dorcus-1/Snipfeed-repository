import React from "react";
import Sidebar from "./componets/sideBar"
import Navbar from "./componets/navBar"
import MidHalf from './componets/halfMid'
import PhoneScreen from './componets/phone'


export default function App() {
  return (
    <div class="main">
      <Navbar />
    <div className="down">
      <Sidebar />
    <div ClassName="mid-content"> 
      <MidHalf />
    </div>
     <PhoneScreen></PhoneScreen>
    </div> 
    </div>
  )
}