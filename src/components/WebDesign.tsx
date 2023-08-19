import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Retro_computer from "./Retro_computer";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.2}>
        <Retro_computer />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
