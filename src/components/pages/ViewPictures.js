import React, { Component } from 'react'
import { withStyles, List, Paper } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import CompanyCard from '../cards/CompanyCard'
import Navbar from '../layout/Navbar'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Premium from '../dataDisplay/messi'
import Ronaldo from '../dataDisplay/ronaldo'
import Neymar from '../dataDisplay/neymar'
import Mbappe from '../dataDisplay/mbappe'
import Salah from '../dataDisplay/salah'
import Hazard from '../dataDisplay/hazard'
import Modric from '../dataDisplay/modric'
import Pogba from '../dataDisplay/pogba'
import Ibra from '../dataDisplay/ibrahim'
import Coutinho from '../dataDisplay/coutinho'
import Griezman from '../dataDisplay/griezman'
import Bale from '../dataDisplay/bale'
import Deb from '../dataDisplay/debreune'
import Kroos from '../dataDisplay/kroos'
import Aguero from '../dataDisplay/aguero'
import Kane from '../dataDisplay/kane'

import Lew from '../dataDisplay/lawandowiski'


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
            <h1 style={{ paddingLeft: 530, color:sessionStorage.getItem('lang')==='a'?'white':'black',marginTop:'5%' }}><b> {'الصور'}</b></h1>
          
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
    <div>
   <Premium/>
   </div>
   <Ronaldo/>
   <Neymar/>
   <Mbappe/>
   <Salah/>
   <Hazard/>
   <Pogba/>
   <Coutinho/>
<Modric/>
<Ibra/>
<Griezman/>
<Bale/>
 <Deb/>
 <Kroos/>
 <Aguero/>
 <Kane/>
 <Lew/>
          </GridList>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ViewApprovedCompanies)
