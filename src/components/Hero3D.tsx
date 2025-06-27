
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const Hero3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.6}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          CS Student
        </Text>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          & Developer
        </Text>
      </Float>

      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.1}>
        <Sphere position={[-2, 0, -1]} args={[0.3]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <Torus position={[2, 0, -0.5]} args={[0.3, 0.15]}>
          <meshStandardMaterial color="#06b6d4" />
        </Torus>
      </Float>

      <Float speed={4} rotationIntensity={0.4} floatIntensity={0.3}>
        <Octahedron position={[0, -1.5, -2]} args={[0.4]}>
          <meshStandardMaterial color="#f59e0b" />
        </Octahedron>
      </Float>
    </group>
  );
};

export default Hero3D;