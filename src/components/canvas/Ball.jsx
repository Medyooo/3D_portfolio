import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal } from '@react-three/drei/core/Decal.js'
import { Float } from '@react-three/drei/core/Float.js'
import { OrbitControls } from '@react-three/drei/core/OrbitControls.js'
import { Preload } from '@react-three/drei/core/Preload.js'
import { useTexture } from '@react-three/drei/core/Texture.js'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} floatingRange={[-0.15, 0.15]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
