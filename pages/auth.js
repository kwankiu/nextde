import * as React from 'react'
import styles from '../styles/auth.module.css'
import { Avatar, Button, Zoom, TextField, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel } from '@mui/material'
import { ArrowForward } from '@mui/icons-material';

export default function Auth() {

const [showuser,setUser] = React.useState(true);

React.useEffect(() => {
  if(showuser) {
  setTimeout(() => {
  document.getElementById("user").style.display = "unset";
  document.getElementById("login").style.display = "none";
  }, 500); 
  } else {
  setTimeout(() => {
  document.getElementById("login").style.display = "unset";
  document.getElementById("user").style.display = "none";      
  }, 500); 

  }
}, [showuser])

  return (
    <main className={styles.main}>
    <br />
    <div id="user">
    <Zoom in={showuser}>
    <div style={{display:'flex'}}>
    <Button className={styles.userContainer} onClick={() => {setUser(false)}}>
    <div>
    <br />  
    <Avatar className={styles.avatar} style={{height:'96px', width:'96px'}} />
    <p>User</p>
    </div>
    </Button>

    <Button className={styles.userContainer} onClick={() => {setUser(false)}}>
    <div>
    <br />  
    <Avatar className={styles.avatar} style={{height:'96px', width:'96px'}} />
    <p>User</p>
    </div>
    </Button>   
    </div> 
    </Zoom>
    </div>

    <div id="login">
    <Zoom in={!showuser} style={{transitionDelay:!showuser?'500ms':'0ms'}}>
    <div>
     <div style={{display:'flex',justifyContent:'center'}}>
     <Avatar className={styles.avatar} style={{height:'128px', width:'128px'}} />    
     </div>
     <div style={{display:'flex',justifyContent:'center', fontSize:'1.5em'}}>
     <p onClick={() => {setUser(true)}}>User</p>  
     </div>
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
     <InputLabel htmlFor="outlined-adornment-password" size="small" style={{color:'var(--secondary-color)'}}>Password</InputLabel>
     <OutlinedInput
     label="Password"
     type="password"
     size="small"
     className={styles.outlineWhite}
     endAdornment={<InputAdornment position="end"><IconButton style={{color:'var(--secondary-color)'}}><ArrowForward /></IconButton></InputAdornment>}/>    
     </FormControl>     
    </div>
    </Zoom>
    </div>
  </main>
  )
}
