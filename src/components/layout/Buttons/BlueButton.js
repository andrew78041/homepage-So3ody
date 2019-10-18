import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import ShareIcon from '@material-ui/icons/Share';
export default function SimpleMenu() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
   
  }

  function handleCloseT() {
   
  }
  function handleCloseW() {
   
  }
  return (
    <div>
      <ShareIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="large" color="primary">
      Share On
      </ShareIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> <Link href={"https://www.facebook.com"} >
        Facebook
      </Link>
      </MenuItem>
        <MenuItem onClick={handleClose}><Link href={"https://www.instagram.com"} >
       Instagram
      </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"https://www.whatsapp.com"} >
        Whatsapp
      </Link></MenuItem>
      </Menu>
    </div>
  );
}