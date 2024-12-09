import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.4;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};