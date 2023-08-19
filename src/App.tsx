import GlobalStyles from "./GlobalStyles";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
