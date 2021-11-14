import styles from '../styles/powermenu.module.css'
import * as React from 'react'

import { Zoom, IconButton } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function PowerMenu() {

  return (
    <Zoom in="true">
    <IconButton className={styles.powerbtnContainer}><PowerSettingsNewIcon /></IconButton>
    </Zoom>
  )
}
