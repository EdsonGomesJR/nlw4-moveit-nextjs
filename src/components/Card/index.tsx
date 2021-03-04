import {
  Container,
  UserCard,
  ChallengesCompleted,
  Xp,
  Position,
} from "./styles";

export function Card() {
  return (
    <Container>
      <Position>1</Position>
      <UserCard>
        <img src="https://github.com/edsongomesjr.png" alt="Eu" />
        <div>
          <strong> Edson Gomes </strong>
          <span>
            <img src="/icons/level.svg" alt="lvlup" />
            <p>Level 20</p>
          </span>
        </div>
      </UserCard>
      <ChallengesCompleted>
        <p>123</p> completados
      </ChallengesCompleted>
      <Xp>
        <p>123.005</p> xp
      </Xp>
    </Container>
  );
}
