import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  // todo 1.1 induktionsplatta med 2 små plattor och 2 mellan plattor
  //todo 1.2 inkrementera storlek på spisplattorna

  // todo 1.3 värme styrka 1-9
  //todo 2 wifi styrd och manuell styrd
  // todo 3 timer
  //todo 4 extern kamera
  const [power, setPower] = useState(false)
  const [isLocked, setIsLocked] = useState(false)

  const [topSmallLeft, setTopSmallLeft] = useState(false)
  const [topMediumRight, setTopMediumRight] = useState(false)
  const [btmSmallRight, setBtmSmallRight] = useState(false)
  const [btmMediumLeft, setBtmMediumLeft] = useState(false)

  useEffect(() => {
    isLocked ? console.log('stove is locked') : console.log('stove is unlocked')
  }, [isLocked])
  const handlePower = (e) => {
    !isLocked && setPower(!power)

    !isLocked
      ? power && !isLocked
        ? console.log('stove is off')
        : console.log('stove is on')
      : console.log('unlock the stove.')
  }

  const handleLock = (e) => {
    setIsLocked(!isLocked)
  }

  return (
    <>
      <div className='stove'>
        <div className='plate-group'>
          <div
            className={`small-plate ${
              topSmallLeft ? 'circle-active' : 'plate'
            }`}
            id='topL'></div>
          <div
            className={`medium-plate ${
              topMediumRight ? 'circle-active' : 'plate'
            } `}></div>
        </div>

        <div className='plate-group-reverse'>
          <div
            className={`small-plate ${
              btmSmallRight ? 'circle-active' : 'plate'
            } `}>
            {' '}
          </div>
          <div
            className={`medium-plate ${
              btmMediumLeft ? 'circle-active' : 'plate'
            }`}>
            {' '}
          </div>
        </div>

        <div className='stove-settings'>
          <div className='power-lock'>
            <i
              onClick={handlePower}
              className={`${power ? 'active' : ''} fas fa-power-off`}></i>
            <i
              onClick={handleLock}
              className={`${isLocked ? 'active' : ''} fas fa-lock`}></i>
          </div>

          <div className='mini-map'>
            <div
              style={isLocked ? { 'pointer-events': 'none' } : {}}
              className='circle-group'>
              <span
                onClick={(e) => {
                  setTopSmallLeft(!topSmallLeft)
                }}
                className='circle'
                name='topL'></span>
              <span
                onClick={(e) => {
                  setTopMediumRight(!topMediumRight)
                }}
                className='circle'
                name='topR'></span>
              <span
                onClick={(e) => {
                  setBtmMediumLeft(!btmMediumLeft)
                }}
                className='circle'
                name='BtmL'></span>
              <span
                onClick={(e) => {
                  setBtmSmallRight(!btmSmallRight)
                }}
                className='circle'
                name='BtmR'></span>
            </div>
          </div>

          <div
            style={isLocked ? { 'pointer-events': 'none' } : {}}
            className='temp'>
            <i className='far fa-minus-square'></i>
            <span className='current-temp'>5</span>
            <i className='far fa-plus-square'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
