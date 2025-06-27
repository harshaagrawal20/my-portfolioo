import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Skill3DProps {
  radius: number;
  angle: number;
  skill: string;
  color: string;
  speed: number;
}

const Skill3D = ({ radius, angle, skill, color, speed }: Skill3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const theta = angle + t * speed;
    const x = radius * Math.cos(theta);
    const z = radius * Math.sin(theta);

    if (groupRef.current) {
      groupRef.current.position.set(x, 1.5, z); // Fixed Y height
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <group ref={groupRef}>
        <Sphere ref={sphereRef} args={[0.4]}>
          <meshStandardMaterial color={color} />
        </Sphere>
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {skill}
        </Text>
      </group>
    </Float>
  );
};

const Skills3D = () => {
  const skills = [
    { name: "React", color: "#61dafb" },
    { name: "Python", color: "#3776ab" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "C++", color: "#00599c" },
    { name: "OpenCV", color: "#5c3ee8" },
    { name: "ML", color: "#ff6b6b" },
    { name: "Next.js", color: "#80dfbeb" },
    { name: "Firebase", color: "#ffca28" },
    { name: "Algorithms", color: "#4caf50" },
  ];

  const radius = 3;
  const angularSpeed = 0.3;

  return (
    <group>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        return (
          <Skill3D
            key={index}
            radius={radius}
            angle={angle}
            skill={skill.name}
            color={skill.color}
            speed={angularSpeed}
          />
        );
      })}
    </group>
  );
};

export default Skills3D;
