import styles from '../styles/taskbar.module.css'
import * as React from 'react'

import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

export default function TaskBar() {

const [clock, setClock] = React.useState()

React.useEffect(() => {
  let secTimer = setInterval( () => {
    let date = new Date()
    let weekday_short = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let month_short = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let formatted_date = weekday_short[date.getDay()] + " " + date.getDate() +  " " + month_short[date.getMonth()] 
    let formatted_time = date.getHours() + ":" + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})
    let formatted_clock = formatted_date + " " + formatted_time
    setClock(formatted_clock)
  },1000)

  return () => clearInterval(secTimer);
}, [])

  return (
    <div className={styles.taskbarContainer}>
      <VolumeUpRoundedIcon />
      <BluetoothIcon />
      <WifiIcon />
      <BatteryFullIcon />
      <p>{clock}</p>
    </div>
  )
}
