import React, { useState } from 'react'
import './App.css'

function App() {
  // todo 1.1 induktionsplatta med 2 små plattor och 2 mellan plattor
  // todo 1.2 inkrementera storlek på spisplattorna

  // todo 1.3 värme styrka 1-9
  // todo 2 wifi styrd och manuell styrd
  // todo 3 timer
  // todo 4 extern kamera

  const [power, setPower] = useState(false)
  const [isLocked, setIsLocked] = useState(false)

  const [currentSelectedPlate, setCurrentSelectedPlate] = useState('')
  // const [plateTemp, setPlateTemp] = useState(0)
  const [minimapPlateTemp, setMinimapPlateTemp] = useState({
    topL: 0,
    topR: 0,
    btmL: 0,
    btmR: 0,
  })

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

  // power button settings
  const handlePower = (e) => {
    !isLocked && setPower(!power)

    power &&
      topSmallLeft.isActive === true &&
      setTopSmallLeft({ isActive: false, temperature: 3 })
    setMinimapPlateTemp({ topL: 0, topR: 0, btmL: 0, btmR: 0 })

    topMediumRight.isActive === true &&
      setTopMediumRight({ isActive: false, temperature: 3 })
    setMinimapPlateTemp({ topL: 0, topR: 0, btmL: 0, btmR: 0 })

    btmSmallRight.isActive === true &&
      setBtmSmallRight({ isActive: false, temperature: 3 })
    setMinimapPlateTemp({ topL: 0, topR: 0, btmL: 0, btmR: 0 })

    btmMediumLeft.isActive === true &&
      setBtmMediumLeft({ isActive: false, temperature: 3 })
    setMinimapPlateTemp({ topL: 0, topR: 0, btmL: 0, btmR: 0 })

    power && setPower(!power)
  }

  const handleLock = (e) => {
    setIsLocked(!isLocked)
  }

  const handleCurrentTemp = (e) => {
    //increaseTemperature
    if (e.target.attributes[1].value === 'increaseTemperature') {
      switch (currentSelectedPlate) {
        case 'topL':
          topSmallLeft.temperature < 9 &&
            setTopSmallLeft({
              ...topSmallLeft,
              temperature: (topSmallLeft.temperature += 1),
              isActive: true,
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            topL: topSmallLeft.temperature,
          })

          break

        case 'topR':
          topMediumRight.temperature < 9 &&
            setTopMediumRight({
              ...topMediumRight,
              temperature: (topMediumRight.temperature += 1),
              isActive: true,
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            topR: topMediumRight.temperature,
          })

          break

        case 'btmL':
          btmMediumLeft.temperature < 9 &&
            setBtmMediumLeft({
              ...btmMediumLeft,
              temperature: (btmMediumLeft.temperature += 1),
              isActive: true,
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            btmL: btmMediumLeft.temperature,
          })

          break

        case 'btmR':
          btmSmallRight.temperature < 9 &&
            setBtmSmallRight({
              ...btmSmallRight,
              temperature: (btmSmallRight.temperature += 1),
              isActive: true,
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            btmR: btmSmallRight.temperature,
          })

          break

        default:
          break
      }
    }

    //decreaseTemperature
    if (e.target.attributes[1].value === 'decreaseTemperature') {
      switch (currentSelectedPlate) {
        case 'topL':
          topSmallLeft.temperature > 0 &&
            setTopSmallLeft({
              ...topSmallLeft,
              temperature: (topSmallLeft.temperature -= 1),
            })

          setMinimapPlateTemp({
            ...minimapPlateTemp,
            topL: topSmallLeft.temperature,
          })
          topSmallLeft.temperature === 0 &&
            setTopSmallLeft({
              ...topSmallLeft,
              isActive: false,
            })

          break

        case 'topR':
          topMediumRight.temperature > 0 &&
            setTopMediumRight({
              ...topMediumRight,
              temperature: (topMediumRight.temperature -= 1),
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            topR: topMediumRight.temperature,
          })
          topMediumRight.temperature === 0 &&
            setTopMediumRight({
              ...topMediumRight,
              isActive: false,
            })

          break

        case 'btmL':
          btmMediumLeft.temperature > 0 &&
            setBtmMediumLeft({
              ...btmMediumLeft,
              temperature: (btmMediumLeft.temperature -= 1),
            })

          setMinimapPlateTemp({
            ...minimapPlateTemp,
            btmL: btmMediumLeft.temperature,
          })
          btmMediumLeft.temperature === 0 &&
            setBtmMediumLeft({
              ...btmMediumLeft,
              isActive: false,
            })

          break

        case 'btmR':
          btmSmallRight.temperature > 0 &&
            setBtmSmallRight({
              ...btmSmallRight,
              temperature: (btmSmallRight.temperature -= 1),
            })
          setMinimapPlateTemp({
            ...minimapPlateTemp,
            btmR: btmSmallRight.temperature,
          })

          btmSmallRight.temperature === 0 &&
            setBtmSmallRight({
              ...btmSmallRight,
              isActive: false,
            })
          break

        default:
          break
      }
    }
  }

  const getCurrentTemp = (e) => {
    setCurrentSelectedPlate(e.target.attributes[1].value)
    let current = e.target.attributes[1].value
    if (current === 'topL') {
      setMinimapPlateTemp({
        ...minimapPlateTemp,
        topL: topSmallLeft.temperature,
      })
    }
    if (current === 'topR') {
      setMinimapPlateTemp({
        ...minimapPlateTemp,
        topR: topMediumRight.temperature,
      })
    }
    if (current === 'btmL') {
      setMinimapPlateTemp({
        ...minimapPlateTemp,
        btmL: btmMediumLeft.temperature,
      })
    }
    if (current === 'btmR') {
      setMinimapPlateTemp({
        ...minimapPlateTemp,
        btmR: btmSmallRight.temperature,
      })
    }
  }

  const selectMiniPlate = (e) => {
    let theNameOfSelectedMinimapPlate = e.target.attributes[1].value

    switch (theNameOfSelectedMinimapPlate) {
      case 'topL':
        setTopSmallLeft({
          ...topSmallLeft,
          isSelected: true,
          isActive: !topSmallLeft.isActive,
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
          isSelected: false,
        })
        break
      case 'topR':
        setTopSmallLeft({
          ...topSmallLeft,
          isSelected: false,
        })
        setTopMediumRight({
          ...topMediumRight,
          isSelected: true,
          isActive: !topMediumRight.isActive,
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
        setTopSmallLeft({
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
          isActive: !btmMediumLeft.isActive,
        })
        setBtmSmallRight({
          ...btmSmallRight,
          isSelected: false,
        })
        break
      case 'btmR':
        setTopSmallLeft({
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
          isActive: !btmSmallRight.isActive,
        })
        break

      default:
        break
    }
  }

  return (
    <>
      <h1>Alfa Electro Stove</h1>
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
            id='btmL'></div>
          <div
            className={`medium-plate ${
              btmMediumLeft.isActive && btmMediumLeft.temperature > 0
                ? 'circle-active'
                : 'plate'
            }`}
            id='btmR'></div>
        </div>

        <div className='stove-settings'>
          <div className='power-lock'>
            <div className='icons'>
              <i
                onClick={handlePower}
                className={`${power ? 'active' : ''} fas fa-power-off`}></i>
              <i
                onClick={handleLock}
                className={`${isLocked ? 'active' : ''} fas fa-lock`}></i>
            </div>
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
                      power &&
                      topSmallLeft.isSelected &&
                      topSmallLeft.temperature === 0
                    ? 'selected'
                    : ''
                } `}
                name='topL'></span>
              <span className='current-temp'>{minimapPlateTemp.topL}</span>
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
                      topMediumRight.temperature === 0
                    ? 'selected'
                    : ''
                } `}
                name='topR'></span>
              <span className='current-temp'>{minimapPlateTemp.topR}</span>
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
                      btmMediumLeft.temperature === 0
                    ? 'selected'
                    : ''
                } `}
                name='btmL'></span>
              <span className='current-temp'>{minimapPlateTemp.btmL}</span>
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
                      btmSmallRight.temperature === 0
                    ? 'selected'
                    : ''
                } `}
                name='btmR'></span>
              <span className='current-temp'>{minimapPlateTemp.btmR}</span>
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
            <div className='icons'>
              <i
                onClick={handleCurrentTemp}
                className='far fa-minus-square'
                name='decreaseTemperature'></i>
              <i
                onClick={handleCurrentTemp}
                className='far fa-plus-square'
                name='increaseTemperature'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
