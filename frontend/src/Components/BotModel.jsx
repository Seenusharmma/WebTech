// src/components/BotModel.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef } from "react";

export default function BotModel({ size = 80 }) {
  const meshRef = useRef();

  // Rotate the cube continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas style={{ width: size, height: size }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} intensity={1} />
      <mesh ref={meshRef} rotation={[0.4, 0.4, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" />
      </mesh>

      {/* Hidden HTML label (optional) */}
      <Html center>
        <div style={{ display: "none" }}>Bot</div>
      </Html>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
