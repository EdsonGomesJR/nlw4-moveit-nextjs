import { useState } from "react";
import { MoveItLogo } from "../../svg/components/MoveItLogo";
import { Container, Content, HeroImage, LoginContainer } from "./styles";
import { FaArrowRight } from "react-icons/fa";

export default function ChallengesPage() {
  const [username, setUsername] = useState("");
  return (
    <Container>
      <Content>
        <HeroImage>
          <img src="/assets/Simbolo.png" alt="" />
        </HeroImage>
        <LoginContainer>
          <MoveItLogo textColor={"white"} />

          <strong>Bem-vindo</strong>
          <div>
            <img src="/icons/github-icon.svg" alt="" />
            <p>Faça login com seu Github para começar</p>
          </div>
          <form>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Digite seu username"
            />
            <button type="submit" disabled={username.length === 0}>
              <FaArrowRight />
            </button>
          </form>
        </LoginContainer>
      </Content>
    </Container>
  );
}
