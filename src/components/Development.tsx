import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React_logo from "./React_logo";

export default function Development() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.2}>
        <React_logo />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
