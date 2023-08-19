import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cartoon_car from "./Cartoon_car";

export default function ProductDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.2}>
        <Cartoon_car />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
