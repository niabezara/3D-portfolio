import styled from "styled-components";
import WebDesign from "./WebDesign";
import ProductDesign from "./ProductDesign";
import Development from "./Development";
import { useState } from "react";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

export default function Works() {
  const [work, setWork] = useState<string>("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
}
const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li<{ text: string }>`
  font-size: 9rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
