import React from "react";
import { useState } from "react";
import { SummaryFields } from "../../components/SummaryFields";

import {
  Container,
  ImageContainer,
  Summary,
  GridContainer,
} from "../../styles/pages/shareontwitter";

export default function ShareOnTwitter() {
  const level = 19;

  return (
    <Container>
      <GridContainer>
        {level > 9 ? (
          <ImageContainer hasTwoDigits>
            <div>{level}</div>

            <p>Avancei para {"\n"} o próximo nível!</p>
          </ImageContainer>
        ) : (
          <ImageContainer>
            <div>{level}</div>
            <strong>
              Avancei para o próximo nível! Avancei para o próximo nível!
            </strong>
          </ImageContainer>
        )}

        <Summary>
          <SummaryFields
            title={"Desafios"}
            challengeCount={3}
            text="completados"
          />
          <SummaryFields
            title={"Experiência"}
            challengeCount={15000}
            text="xp"
          />
          <img src="/logo-full.svg" alt="" />
        </Summary>
      </GridContainer>
    </Container>
  );
}
