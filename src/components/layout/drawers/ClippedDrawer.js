import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home'
import Upload from '@material-ui/icons/CloudUpload'
import Add from '@material-ui/icons/PersonAdd'
import ViewList from '@material-ui/icons/ViewList'
import EditProfile from '@material-ui/icons/BorderColor'

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop:64,
    width: drawerWidth,
    background: 'linear-gradient(to right, grey, black)',
    borderStyle: 'solid',
    borderColor: 'black',
  },
 
  content: {
    
  color:'white'
   }
}));


  
function handleHome(event) {
  document.location.href = "../";
}

function handlePictures(event) {
  document.location.href = "../pictures";
}
function handleVideos(event) {
  document.location.href = "../videos";
}
function handleInfograph(event) {
  document.location.href = "../infograph";
}
function handleLeagues(event) {
  document.location.href = "../leagues";
}
function handleMatches(event) {
  document.location.href = "../matches";
}
function handlePlay(event) {
  document.location.href = "../";
}


export default function PermanentDrawerRight() {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
   
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
      
        <List>
        <ListItem button key={"الرئيسيه"}
        onClick={handleHome}
        style={useStyles.content}>
                <ListItemIcon>
                  <Home style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="الرئيسيه" style={{color:'white'}}/>
              </ListItem>
              <ListItem
                button
                key={"اخبار"}
               
              >
                <ListItemIcon>
                  <EditProfile style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="انفوجراف" style={{color:'white'}} />
              </ListItem>
              <ListItem
                button
                key={"انفوجراف"}
                onClick={handleVideos}
              >
                <ListItemIcon>
                  <ViewList style={{color:'white'}} />
                </ListItemIcon>  <ListItemText primary="فيديوهات" style={{color:'white'}} />
              
              </ListItem>
              <ListItem button key={"Upload Form"} onClick={handlePictures} >
                <ListItemIcon>
                  <Upload  style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="صور" style={{color:'white'}}/>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key={"Create Admin"} onClick={handleLeagues} >
                <ListItemIcon>
                  <Add style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="بطولات" style={{color:'white'}}/>
              </ListItem>
              <ListItem
                button
                key={"Create Reviewer"}
                onClick={handleMatches}
              >
                <ListItemIcon>
                  <Add style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="مباريات" style={{color:'white'}}/>
              </ListItem>
              <ListItem
                button
                key={"Create Lawyer"}
                onClick={handlePlay}
              >
                <ListItemIcon>
                  <Add style={{color:'white'}}/>
                </ListItemIcon>
                <ListItemText primary="العب و اربح" style={{color:'white'}}/>
              </ListItem>
              <Divider />
             

 </List>
      </Drawer>
    </div>
  );
}