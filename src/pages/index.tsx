import React, { useState } from "react";
import { MoveItLogo } from "../svg/components/MoveItLogo";
import { useRouter } from "next/router";

import {
  Container,
  Content,
  HeroImage,
  LoginContainer,
} from "../styles/pages/home";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [username, setUsername] = useState("");
  const routes = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    routes.push("/challenges");
  }
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
          <form onSubmit={handleSubmit}>
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
