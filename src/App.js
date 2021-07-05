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
  const [currentSelectedPlate, setCurrentSelectedPlate] = useState('')
  const [test, setTest] = useState(0)

  const [topSmallLeft, setTopSmallLeft] = useState({
    isActive: false,
    temperature: 3,
    isSelected: false,
  })
  const [topMediumRight, setTopMediumRight] = useState({
    isActive: false,
    temperature: 3,
    isSelected: false,
  })
  const [btmSmallRight, setBtmSmallRight] = useState({
    isActive: false,
    temperature: 3,
    isSelected: false,
  })
  const [btmMediumLeft, setBtmMediumLeft] = useState({
    isActive: false,
    temperature: 3,
    isSelected: false,
  })

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

    power &&
      topSmallLeft.isActive === true &&
      setTopSmallLeft({ isActive: false, temperature: 3 })
    topMediumRight.isActive === true &&
      setTopMediumRight({ isActive: false, temperature: 3 })
    btmSmallRight.isActive === true &&
      setBtmSmallRight({ isActive: false, temperature: 3 })
    btmMediumLeft.isActive === true &&
      setBtmMediumLeft({ isActive: false, temperature: 3 })
    test !== 0 && setTest(0)
    power && setPower(!power)
  }

  const handleLock = (e) => {
    setIsLocked(!isLocked)
  }

  const handleCurrentTemp = (e) => {
    if (e.target.attributes[1].value === 'increaseTemperature') {
      //increaseTemperature
      switch (currentSelectedPlate) {
        case 'topL':
          topSmallLeft.temperature < 9 &&
            setTopSmallLeft({
              ...topSmallLeft,
              temperature: (topSmallLeft.temperature += 1),
            })
          setTest(topSmallLeft.temperature)

          break

        case 'topR':
          topMediumRight.temperature < 9 &&
            setTopMediumRight({
              ...topMediumRight,
              temperature: (topMediumRight.temperature += 1),
            })
          setTest(topMediumRight.temperature)

          break

        case 'btmL':
          btmMediumLeft.temperature < 9 &&
            setBtmMediumLeft({
              ...btmMediumLeft,
              temperature: (btmMediumLeft.temperature += 1),
            })
          setTest(btmMediumLeft.temperature)

          break

        case 'btmR':
          btmSmallRight.temperature < 9 &&
            setBtmSmallRight({
              ...btmSmallRight,
              temperature: (btmSmallRight.temperature += 1),
            })
          setTest(btmSmallRight.temperature)

          break

        default:
          break
      }
    }

    if (e.target.attributes[1].value === 'decreaseTemperature') {
      //decreaseTemperature
      switch (currentSelectedPlate) {
        case 'topL':
          topSmallLeft.temperature > 0 &&
            setTopSmallLeft({
              ...topSmallLeft,
              temperature: (topSmallLeft.temperature -= 1),
            })
          setTest(topSmallLeft.temperature)
          break

        case 'topR':
          topMediumRight.temperature > 0 &&
            setTopMediumRight({
              ...topMediumRight,
              temperature: (topMediumRight.temperature -= 1),
            })
          setTest(topMediumRight.temperature)

          break

        case 'btmL':
          btmMediumLeft.temperature > 0 &&
            setBtmMediumLeft({
              ...btmMediumLeft,
              temperature: (btmMediumLeft.temperature -= 1),
            })
          setTest(btmMediumLeft.temperature)

          break

        case 'btmR':
          btmSmallRight.temperature > 0 &&
            setBtmSmallRight({
              ...btmSmallRight,
              temperature: (btmSmallRight.temperature -= 1),
            })
          setTest(btmSmallRight.temperature)

          break

        default:
          break
      }
    }

    //decreaseTemperature
  }

  const getCurrentTemp = (e) => {
    setCurrentSelectedPlate(e.target.attributes[1].value)
    let current = e.target.attributes[1].value

    if (current === 'topL') {
      setTest(topSmallLeft.temperature)
    }
    if (current === 'topR') {
      setTest(topMediumRight.temperature)
    }
    if (current === 'btmL') {
      setTest(btmSmallRight.temperature)
    }
    if (current === 'btmR') {
      setTest(btmMediumLeft.temperature)
    }
  }

  const selectMiniPlate = (e) => {
    let testing = e.target.attributes[1].value

    switch (testing) {
      case 'topL':
        setTopMediumRight({
          ...topSmallLeft,
          isSelected: false,
        })
        setTopMediumRight({
          ...topMediumRight,
          isSelected: true,
        })
        setBtmMediumLeft({
          ...btmMediumLeft,
          isSelected: false,
        })
        setBtmSmallRight({
          ...btmSmallRight,
          isSelected: false,
        })
        break
      case 'topR':
        setTopMediumRight({
          ...topSmallLeft,
          isSelected: false,
        })
        setTopMediumRight({
          ...topMediumRight,
          isSelected: true,
        })
        setBtmMediumLeft({
          ...btmMediumLeft,
          isSelected: false,
        })
        setBtmSmallRight({
          ...btmSmallRight,
          isSelected: false,
        })
        break
      case 'btmL':
        setTopMediumRight({
          ...topSmallLeft,
          isSelected: false,
        })
        setTopMediumRight({
          ...topMediumRight,
          isSelected: false,
        })
        setBtmMediumLeft({
          ...btmMediumLeft,
          isSelected: true,
        })
        setBtmSmallRight({
          ...btmSmallRight,
          isSelected: false,
        })
        break
      case 'btmR':
        setTopMediumRight({
          ...topSmallLeft,
          isSelected: false,
        })
        setTopMediumRight({
          ...topMediumRight,
          isSelected: false,
        })
        setBtmMediumLeft({
          ...btmMediumLeft,
          isSelected: false,
        })
        setBtmSmallRight({
          ...btmSmallRight,
          isSelected: true,
        })
        break

      default:
        break
    }
  }

  return (
    <>
      <div className='stove'>
        <div className='plate-group'>
          <div
            className={`small-plate ${
              topSmallLeft.isActive && topSmallLeft.temperature > 0
                ? 'circle-active'
                : 'plate'
            }`}
            id='topL'></div>
          <div
            className={`medium-plate ${
              topMediumRight.isActive && topMediumRight.temperature > 0
                ? 'circle-active'
                : 'plate'
            } `}
            id='topR'></div>
        </div>

        <div className='plate-group-reverse'>
          <div
            className={`small-plate ${
              btmSmallRight.isActive && btmSmallRight.temperature > 0
                ? 'circle-active'
                : 'plate'
            } `}
            id='btmL'>
            {' '}
          </div>
          <div
            className={`medium-plate ${
              btmMediumLeft.isActive && btmMediumLeft.temperature > 0
                ? 'circle-active'
                : 'plate'
            }`}
            id='btmR'>
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
              onClick={(e) => {
                e.target.attributes[1] === 'name' &&
                  console.log(e.target.attributes[1].value)
              }}
              style={
                isLocked
                  ? { pointerEvents: 'none' }
                  : !power
                  ? { pointerEvents: 'none' }
                  : {}
              }
              className='circle-group'>
              <span
                onClick={(e) => {
                  getCurrentTemp(e)
                  setTopSmallLeft({
                    ...topSmallLeft,
                    isActive: !topSmallLeft.isActive,
                  })
                  selectMiniPlate(e)
                }}
                className={`circle ${
                  topSmallLeft.isActive && topSmallLeft.temperature > 0
                    ? 'circle-active'
                    : 'plate' &&
                      topSmallLeft.isSelected &&
                      topSmallLeft.temperature == 0
                    ? 'selected'
                    : ''
                } `}
                name='topL'></span>
              <span
                onClick={(e) => {
                  getCurrentTemp(e)
                  setTopMediumRight({
                    ...topMediumRight,
                    isActive: !topMediumRight.isActive,
                  })
                  selectMiniPlate(e)
                }}
                className={`circle ${
                  topMediumRight.isActive && topMediumRight.temperature > 0
                    ? 'circle-active'
                    : 'plate' &&
                      topMediumRight.isSelected &&
                      topMediumRight.temperature == 0
                    ? 'selected'
                    : ''
                } `}
                name='topR'></span>
              <span
                onClick={(e) => {
                  getCurrentTemp(e)
                  setBtmMediumLeft({
                    ...btmMediumLeft,
                    isActive: !btmMediumLeft.isActive,
                  })
                  selectMiniPlate(e)
                }}
                className={`circle ${
                  btmMediumLeft.isActive && btmMediumLeft.temperature > 0
                    ? 'circle-active'
                    : 'plate' &&
                      btmMediumLeft.isSelected &&
                      btmMediumLeft.temperature == 0
                    ? 'selected'
                    : ''
                } `}
                name='btmL'></span>
              <span
                onClick={(e) => {
                  getCurrentTemp(e)
                  setBtmSmallRight({
                    ...btmSmallRight,
                    isActive: !btmSmallRight.isActive,
                  })
                  selectMiniPlate(e)
                }}
                className={`circle ${
                  btmSmallRight.isActive && btmSmallRight.temperature > 0
                    ? 'circle-active'
                    : 'plate' &&
                      btmSmallRight.isSelected &&
                      btmSmallRight.temperature == 0
                    ? 'selected'
                    : ''
                } `}
                name='btmR'></span>
            </div>
          </div>

          <div
            style={
              isLocked
                ? { pointerEvents: 'none' }
                : !power
                ? { pointerEvents: 'none' }
                : {}
            }
            className='temp'>
            <i
              onClick={handleCurrentTemp}
              className='far fa-minus-square'
              name='decreaseTemperature'></i>

            <span className='current-temp'> {test}</span>

            <i
              onClick={handleCurrentTemp}
              className='far fa-plus-square'
              name='increaseTemperature'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
