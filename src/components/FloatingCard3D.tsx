import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Box } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCard3DProps {
  position: [number, number, number];
  title: string;
  color?: string;
}

const FloatingCard3D = ({ position, title, color = "#2ba99f" }: FloatingCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={position}>
        {/* Backdrop for visibility */}
        <mesh position={[0, 0, -0.06]}>
          <planeGeometry args={[2.6, 1.6]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>

        {/* Floating box */}
        <Box ref={meshRef} args={[2.5, 1.5, 0.1]}>
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.9} 
            emissive="#48d1cc" 
            emissiveIntensity={0.5} 
            metalness={0.3} 
            roughness={0.4} 
          />
        </Box>

        {/* Text */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {title}
        </Text>
      </group>
    </Float>
  );
};

export default FloatingCard3D;
