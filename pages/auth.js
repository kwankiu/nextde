import * as React from 'react'
import styles from '../styles/auth.module.css'
import { Avatar, Button, Zoom } from '@mui/material'

export default function Auth() {

const [showuser,setUser] = React.useState(true);

  return (
    <main className={styles.main}>
    <br />
    <Zoom in={showuser}>
    <Button className={styles.userContainer} onClick={() => {setUser(false)}}>
    <div>
    <br />  
    <Avatar className={styles.avatar} />
    <p>User</p>
    </div>
    </Button>
    </Zoom>
  </main>
  )
}
