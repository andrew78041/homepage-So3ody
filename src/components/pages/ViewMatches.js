import React, { Component } from 'react'
import { withStyles, List, Paper } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'

import Navbar from '../layout/Navbar'

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

import Barca from '../Matches/BarcReal'
import Lc from '../Matches/LIverCity'
import MM from '../Matches/Man'
import CP from '../Matches/ChelseaParis'
import AZ from '../Matches/Ahlyzmalik'
import RE from '../Matches/Madrid'
import JB from '../Matches/JuveBayern'
const styles = {
  list: {
    width: 1157,
    height: 'auto',
    
  },
  sep: {
    marginLeft: '0.2%',
     paddingRight: 10 ,
     paddingLeft:0,
    marginTop:'-1.3%',
  },
  companiesBackground: {
    background: sessionStorage.getItem('lang')==='a'?'#212121':'#FFFFFF',
    borderStyle: 'solid',
    borderColor: 'black',
  }
}

function handleClick(event) {
  {sessionStorage.getItem('lang')==='a'? sessionStorage.setItem('lang','d'): sessionStorage.setItem('lang','a')}
    window.location.reload() 
}

class ViewApprovedCompanies extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { classes } = this.props
    return (
      
      <div className={classes.holder}>
        <Navbar/>

  
       <br></br>
        <div className={classes.sep}>
       
         
      
          <GridList className={classes.list} style={styles.companiesBackground}>
          <div>
            <div>
            <h1 style={{ paddingLeft: 530, color:sessionStorage.getItem('lang')==='a'?'white':'black',marginTop:'5%' }}><b> {'المباريات'}</b></h1>
          
            </div>
            <div>

            <Fab   variant="extended" aria-label="Add" className={classes.margin}
                  color={sessionStorage.getItem('lang')==='a'?  'secondary':'primary'}
                  style={{ marginLeft:'160%' ,marginTop:'-17%'}}
                  size='large'
                  onClick={handleClick}
                >
                  {sessionStorage.getItem('lang')==='a'? 'Light Mode' : 'Dark Mode '}
                  
        <NavigationIcon className={classes.extendedIcon} />
      </Fab></div>
      </div>
    

    <div></div>
            <div>
          <Barca/>
            </div>
         <Lc/>  

         <JB/>
        <MM/>
        <CP/>
        <AZ/>
        <RE/>


          </GridList>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ViewApprovedCompanies)
