import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mini_macbook_pro from "./Mini_macbook_pro";
export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.2}>
        <Mini_macbook_pro />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
