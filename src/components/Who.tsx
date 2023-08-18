import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Cube from "./Cube";
export default function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./public/line.png" />
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered experiences</Desc>
          <Button>See our works</Button>
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
  justify-content: center;
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
  flex: 1;
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
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
