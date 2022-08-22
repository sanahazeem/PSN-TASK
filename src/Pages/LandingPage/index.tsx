import styled from "styled-components";
import cyclistVideo from "../../assets/cyclistVideo.mp4";
import { mediaLargerThan } from "../../common/styles/variables";

const LandingPage: React.FC = () => {
  const userAction = async () => {
    const response = await fetch("api/devtask");
    const data = await response.json();
    return data;
  };

  const data = userAction();

  console.log(data);

  return (
    <MainContainer>
      <StyledVideo autoPlay muted loop id="myVideo">
        <source src={cyclistVideo} type="video/mp4" />
      </StyledVideo>
      <Heading>
        <h1>
          <span>Redefining</span> Specialist Sports Media
        </h1>
        <Button>Explore The Network</Button>
      </Heading>
    </MainContainer>
  );
};

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 300px;
  text-align: center;
  color: #fff;
  > h1 {
    font-size: 30px;
    > span {
      font-weight: 600;
    }
  }
  ${mediaLargerThan.tablet} {
    > h1 {
      font-size: 80px;
    }
    max-width: 900px;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  margin-top: 2rem;
  background-color: #e32738;
  border-color: #e32738;
  text-decoration: none;
  color: #fff;
  ${mediaLargerThan.tablet} {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default LandingPage;
