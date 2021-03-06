import React from "react";
import { Container, Border } from "./styles";

interface SummaryData {
  title: string;
  challengeCount: number;
  text: string;
}

export function SummaryFields({ title, challengeCount, text }: SummaryData) {
  return (
    <>
      <Container>
        <header>{title}</header>
        <div>
          <span>{challengeCount}</span>
          <p>{text}</p>
        </div>
        <div />
      </Container>
      <Border />
    </>
  );
}
