import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Slideshow from './components/Slideshow/Slideshow'

import ClippedDrawer from './components/layout/drawers/ClippedDrawer'
import ViewApprovedCompanies from './components/pages/ViewApprovedCompanies'

import Navbar from './components/layout/Navbar'
import Pic from './components/pages/ViewPictures'
import Lea from './components/pages/ViewLeagues'
import Match from './components/pages/ViewMatches'
const styles = {
  
    background: 'linear-gradient(to top, #000000, #DCDCDC)',
    borderStyle: 'solid',
    borderColor: 'black',
  
}
class App extends Component {
  constructor(props) {
    super(props) 
    this.state={
      clicked:"a"
    };
  }

  render() {

   return (<div >
      <Router>
      <Route
              exact
              path="/pictures"
              render={() =>
                <div style={{background:'black'}}>

                  <Slideshow/>
                   <Navbar/>
                  
                    <Pic/>
                    </div>
              }
            />
      <Route
              exact
              path="/"
              render={() =>
                <div>      
 <React.Fragment>
        <Slideshow /> 
        <ViewApprovedCompanies/>
          <ClippedDrawer/>
        </React.Fragment>{' '}
      
              
            </div>
  }
        />
         <Route
              exact
              path="/videos"
              render={() =>
                <div>      
                            <Slideshow /> 
                <ViewApprovedCompanies/>
            </div>
  }
        />
         <Route
              exact
              path="/leagues"
              render={() =>
                <div>      
                            <Slideshow /> 
                <Lea/>
            </div>
  }
        />
         <Route
              exact
              path="/matches"
              render={() =>
                <div>      

                   <Slideshow /> 
                <Match/>
            </div>
  }
        />
         <Route
              exact
              path="/infograph"
              render={() =>
                <div>      
                            <Slideshow /> 
                <ViewApprovedCompanies/>
            </div>
  }
        />

        <React.Fragment>
        
       
          <ClippedDrawer/>
        </React.Fragment>{' '}
      </Router>
      </div>
    )
  }
}

export default App
