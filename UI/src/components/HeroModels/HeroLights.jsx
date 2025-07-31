import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
    <spotLight position={[1,3,6]} 
    intensity={150}
    penumbra={0.2}
    color="white"
     />
     {/* penubra for softness around the spotlight */}


     <primitive
        object={new THREE.RectAreaLight('#ccff00',8,3,2)}
        position={[2,1,2]}
        intensity={40}
        rotation={[-Math.PI/4, Math.PI/4,0]}
        
        >
     </primitive>

    
    </>
  )
}

export default HeroLights
