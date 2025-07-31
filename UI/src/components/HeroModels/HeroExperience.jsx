import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { ComputerOptimised } from './ComputerOptimised'
import HeroLights from './HeroLights'
import Particles from './Particles'



const HeroExperience = () => {
  
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      

      <OrbitControls enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <Particles />
      <group
        scale={isMobile ? 0.25 : isTablet ? 0.35 : 0.5}
        position={isMobile ? [-0.5, -2.6, 0] : isTablet ? [-1, -2.5, 0] : [0, -3.8, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <ComputerOptimised />
      </group>


    </Canvas>
  )
}

export default HeroExperience
