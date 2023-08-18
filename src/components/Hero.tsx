import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";
export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think.Make.Solve.</Title>
          <WhatWeDo>
            <Line src="./public/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.8}>
                <MeshDistortMaterial
                  color="#70389e"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./public/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;
const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 80rem;
  height: 60rem;
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
