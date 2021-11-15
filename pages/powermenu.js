import styles from '../styles/powermenu.module.css'
import * as React from 'react'

import { Zoom, IconButton, Popover, Paper, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function PowerMenu() {

  const [anchorpowermenuEl, setAnchorPowerMenuEl] = React.useState(null);

  const handlePowerMenuClick = (event) => {
    setAnchorPowerMenuEl(event.currentTarget);
  };

  const handlePowerMenuClose = () => {
    setAnchorPowerMenuEl(null);
  };

  const pwrmenuopen = Boolean(anchorpowermenuEl);
  const pwrmenuid = pwrmenuopen ? 'simple-popover' : undefined;

  return (
    <Zoom in="true">
    <div>
    <IconButton className={styles.powerbtnContainer} aria-describedby={pwrmenuid} onClick={handlePowerMenuClick}><PowerSettingsNewIcon /></IconButton>
    <Popover 
      id={pwrmenuid}
      className={styles.popoverContainer}
      open={pwrmenuopen}
      anchorEl={anchorpowermenuEl}
      onClose={handlePowerMenuClose}
      anchorOrigin={{
       vertical: 'top',
       horizontal: 'center',
      }}
      transformOrigin={{
       vertical: 'bottom',
       horizontal: 'center',
      }}>
      <MenuList className={styles.menuContainer}>
        <MenuItem>
          <ListItemIcon>
            <BedtimeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sleep</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <RestartAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Restart</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘R
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PowerSettingsNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Shut Down</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘W
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LocalHospitalIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Emergency Call</ListItemText>
        </MenuItem>
      </MenuList>
  </Popover>
    </div>
    </Zoom>
  )
}
