import styles from '../styles/notch.module.css'
import * as React from 'react'

import LensIcon from '@mui/icons-material/Lens';

export default function Notch() {

  return (
    <div className={styles.notchContainer}>
      <LensIcon />
      <LensIcon style={{marginTop:'1em', marginRight:'.75em', fontSize:'.5em', color:'green'}}/>
    </div>
  )
}
