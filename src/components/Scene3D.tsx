import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import ChatbotWidget from "./ChatbotWidget";

const Scene3D = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Stars radius={200} depth={50} count={3000} factor={4} saturation={0} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            autoRotate={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          {children}
        </Suspense>
      </Canvas>
      <ChatbotWidget />
    </div>
  );
};

export default Scene3D;