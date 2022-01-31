import { useEffect, useRef, useState } from 'react'
// import styled from 'styled-components'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.halo.min'

const BackGround = styled.div`
  position: relative;
  width: 100%;
`

const VantaTemplate = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return <BackGround ref={vantaRef}>{children}</BackGround>
}

export default VantaTemplate
