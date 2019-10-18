import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../components/Images/new/a.jpg'
import img2 from '../../components/Images/new/b.jpg'

import img4 from '../../components/Images/new/d.jpg'
import img5 from '../../components/Images/new/e.jpg'
import img6 from '../../components/Images/new/f.jpg'
import img7 from '../../components/Images/new/g.jpg'
import img8 from '../../components/Images/new/h.png'

const properties = {
  duration: 3250,
  transitionDuration: 325,
  infinite: true,

  arrows: true

}

const eachSlide = {
  marginTop: 80,
  marginLeft: '7%',
  marginRight: '10%',
 
  alignItems: 'center'
}

const slideShowBackground = {
  backgroundColor: '#eeeeee',
  paddingBottom: '10px',
  background: 'linear-gradient(to bottom, #000000, #DCDCDC)',
  width:1164.5
}

const Slideshow = () => {
  return (
    <div style={slideShowBackground}>
      <Slide>
        <div style={eachSlide}>
          <div>
            <span>
              <img src={img1} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div>
        <div style={eachSlide}>
          <div>
            <span>
              <img src={img2} width={1000} height={325} mode="fill" />
            </span>
          </div>
          
        </div>
       
        <div style={eachSlide}>
          <div>
            <span>
              <img src={img4} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div> <div style={eachSlide}>
          <div>
            <span>
              <img src={img5} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div> <div style={eachSlide}>
          <div>
            <span>
              <img src={img6} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div>
        <div style={eachSlide}>
          <div>
            <span>
              <img src={img7} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div>
        <div style={eachSlide}>
          <div>
            <span>
              <img src={img8} width={1000} height={325} mode="fill" />
            </span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow
