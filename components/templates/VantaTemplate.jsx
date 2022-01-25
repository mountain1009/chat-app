import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

const VantaTemplate = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return <div ref={vantaRef}>{children}</div>
}

export default VantaTemplate
