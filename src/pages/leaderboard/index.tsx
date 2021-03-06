import React from "react";
import { Card } from "../../components/Card";
import { SideBar } from "../../components/SideBar";
import { Container, CardHeader } from "../../styles/pages/leaderbord";

export default function Leaderboard() {
  return (
    <div>
      <SideBar leaderBoardActivePage />
      <Container>
        <div>
          <strong>Leaderboard</strong>
        </div>
        <CardHeader>
          <div className="posicao">POSIÇÃO</div>
          <div className="usuario">USUÁRIO</div>
          <div className="desafios">DESAFIOS</div>
          <div className="experiencia">EXPERIÊNCIA</div>
        </CardHeader>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}
