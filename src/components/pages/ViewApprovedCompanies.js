import React, { Component } from 'react'
import { withStyles, List, Paper } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import CompanyCard from '../cards/CompanyCard'
import Navbar from '../layout/Navbar'
import Real from '../cards/ImgMediaCard'
import Messi from '../cards/messi'
import Egypt from '../cards/egypt'
import Pogba from '../cards/pogba'
import Button from '@material-ui/core/Button';
import Grizman from '../cards/griezman'
import Bale from '../cards/bale'
import Mbappe from '../cards/mbape'
import Salah from '../cards/salah'
import US from '../cards/US'
import Balon from '../cards/ballon'
import Pe from '../cards/pep'
import Ronaldo from '../cards/ronaldo'
import Neymar from '../cards/neymar'
import Kepa from '../cards/kepa'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Real2 from '../cards/real'
import Real3 from '../cards/real2'
import Premium from '../cards/preimum'


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
            <h1 style={{ paddingLeft: 530, color:sessionStorage.getItem('lang')==='a'?'white':'black',marginTop:'5%' }}><b> {'الاخبار'}</b></h1>
          
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
            <CompanyCard/ >
            </div>
           <Real/>
      
           <Messi/>
           <Egypt/>
            <Grizman/>
           <Pogba/>
           <Bale/>
           <Mbappe/>
           <Salah/>
            <Real3/>
           <Pe/>
      <Balon/>    
      <Ronaldo/> 
      
      <Kepa/><US/> <Neymar/>
      <Real2/> 
    
          </GridList>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ViewApprovedCompanies)
