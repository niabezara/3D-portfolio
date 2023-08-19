import styled from "styled-components";

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const ListItem = styled.li`
  cursor: pointer;
  font-size: 20px;
`;
const Button = styled.button`
  width: 10rem;
  padding: 1rem;
  border: none;
  color: white;
  background-color: #da4ea2;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
